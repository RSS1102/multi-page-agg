import * as core from '@actions/core';
import { exec } from '@actions/exec';
import * as glob from '@actions/glob';
import fs from 'fs';
import { copyFolder } from 'copy-folder';
import * as artifactActions from '@actions/artifact'
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
    const exitcode = await exec('git', ['init']);
    await exec('git', ['remote', 'add', 'origin', 'https://github.com/Tencent/tdesign-starter-cli']);
    await exec('git', ['fetch', '--depth=1', 'origin', 'develop']);
    await exec('git', ['checkout', 'develop']);

    if (exitcode !== 0) {
      core.setFailed('clone repo failed');
    }
    core.info(`clone repo success`);
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
 * todo(重构)：将代码抽离出来只处理某一个模板的事情
 */
export const generateViteTemplate = async ({ rootDir, currentDir }: { rootDir: string, currentDir: string }): Promise<void> => {
  core.startGroup('generate vite template');

  try {
    await exec('pnpm run dev init template-vite-vue3 --description 这是一个vite构建的vue3项目 --type vue3 --template lite --buildToolType vite');

    const viteConfigFilePath = await glob.create('template-vite-*/vite.config.*');
    const viteConfigFiles = await viteConfigFilePath.glob();

    // 使用 Promise.all 等待所有异步操作完成
    await Promise.all(viteConfigFiles.map(async (viteConfigFile) => {
      const templateName = viteConfigFile.match(/template-vite-(.*)\//);

      if (templateName === null) {
        core.setFailed('templateName is null');
        return;
      }

      const readViteConfigFile = fs.readFileSync(viteConfigFile, 'utf-8');
      const newViteConfig = readViteConfigFile.replace('defineConfig({', `defineConfig({\n base: '${templateName[0].replace(/\/+/g, '/')}',`);

      core.info(`newViteConfig: ${newViteConfig}`);

      fs.writeFileSync(viteConfigFile, newViteConfig);

      const templateDir = `${currentDir}/${templateName[0]}`;
      process.chdir(templateDir);

      await exec(`pnpm install`);
      await exec(`pnpm run build`);
      fs.mkdirSync(`${rootDir}/dist/${templateName[0]}`, { recursive: true });

      copyFolder(`${templateDir}/dist`, `${rootDir}/dist/${templateName[0]}`);
    }));

  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
  core.endGroup();
};

/**
 * 上传产物 artifact
 */
export const uploadArtifact = async (artifactFilePath: string): Promise<void> => {
  core.startGroup('upload artifact');
  try {
    const artifact = new artifactActions.DefaultArtifactClient();
    const createFilePath = await glob.create(`${artifactFilePath}/**`, { followSymbolicLinks: false });
    const filesGlob = await createFilePath.glob();
    const { id, size } = await artifact.uploadArtifact(
      'github-pages',
      filesGlob,
      artifactFilePath, {
      retentionDays: 1,
    }
    );
    if (!id || !size) {
      throw new Error('Artifact size is undefined');
    }
    core.info(`upload artifact success, id: ${id}, size: ${size}`);
    core.endGroup();
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
    throw error; // 确保在错误情况下抛出异常
  }

};