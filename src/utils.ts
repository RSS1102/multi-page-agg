import * as core from '@actions/core';
import { exec } from '@actions/exec';
import * as glob from '@actions/glob';
import fs from 'fs';

/**
 * 克隆仓库
 */
export const cloneRepo = async (): Promise<void> => {
  core.startGroup('clone repo');
  try {
    // todo: 传入分支
    // todo: 传入仓库地址
    // todo: 传入工作目录
    // todo: 传入 options 参数
    const exitcode = await exec(
      'git',
      ['clone', '--depth=1', '--single-branch', '--branch', 'develop', 'https://github.com/Tencent/tdesign-starter-cli', 'tdesign-starter-cli'],
    );

    if (exitcode !== 0) {
      core.setFailed('clone repo failed');
    }
    core.info(`clone repo success`);
    process.chdir('./tdesign-starter-cli');
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
  core.endGroup();
};

/**
 * 安装pnpm
 */
export const pnpmInstall = async (): Promise<void> => {
  core.startGroup('install pnpm');
  try {
    const exitcode = await exec('npm install pnpm -g');

    if (exitcode !== 0) {
      core.setFailed('pnpm install failed');
    }
    core.info(`install pnpm success`);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
  core.endGroup();
};

/**
 * 构建项目
 */
export const buildProducts = async (): Promise<void> => {
  core.startGroup('build dist');
  try {
    const pnpmInstallExitcode = await exec('pnpm install');
    const exitcode = await exec('pnpm run build');

    if (exitcode !== 0 || pnpmInstallExitcode !== 0) {
      core.setFailed('build failed');
    }
    core.info(`build success`);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
  core.endGroup();
};

/**
 * 生成vite模版
 */
export const generateViteTemplate = async ({ rootDir }: { rootDir: string }): Promise<void> => {
  //todo 兼容vite farm webpack
  // todo规定执行目录
  // todo 传入`${process.cwd()}/dist/${templateName[0]}`参数
  core.startGroup('generate vite template');
  try {
    await exec('pnpm run dev init template-vite-vue2 --description 这是一个vite构建的vue2项目 --type vue2 --template lite --buildToolType vite');
    await exec('pnpm run dev init template-vite-vue3 --description 这是一个vite构建的vue3项目 --type vue3 --template lite --buildToolType vite');
    await exec('pnpm run dev init template-vite-react --description 这是一个vite构建的react项目 --type react --template lite --buildToolType vite');
    core.info('vite模版生成成功');

    const viteConfigFilePath = await glob.create('template-vite-*/vite.config.*')
    const viteConfigFiles = await viteConfigFilePath.glob()
    core.info(`files ${viteConfigFiles}`);
    viteConfigFiles.map(async (viteConfigFile) => {
      // todo 这里有更好的匹配方法吗
      const templateName = viteConfigFile.match(/template-vite-(.*)\//);
      core.info(JSON.stringify(templateName));

      if (templateName === null) {
        core.setFailed('templateName is null');
        return;
      }

      const readViteConfigFile = fs.readFileSync(viteConfigFile, 'utf-8');
      const newViteConfig = readViteConfigFile.replace('defineConfig({', `defineConfig({\n base: ${templateName[0]},`)
      fs.writeFileSync(viteConfigFile, newViteConfig);

      process.chdir(`${rootDir}/${templateName[0]}`);

      exec(`pnpm install && pnpm run build`);

      fs.renameSync(`${rootDir}/dist`, `${rootDir}/dist/${templateName[0]}`);
      // 恢复目录
      process.chdir(rootDir);
    })

      //怎么查看某一个目录下的所有文件结构
    const files = fs.readdirSync(rootDir);
    core.info(`files ${files}`);

  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
  core.endGroup();
};