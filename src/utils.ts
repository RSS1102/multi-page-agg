import * as core from '@actions/core';
import { exec } from '@actions/exec';
import * as glob from '@actions/glob';
import fs from 'fs';
import { DefaultArtifactClient } from '@actions/artifact'
import { cwd } from 'process';
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
  //todo 兼容vite farm webpack
  // todo规定执行目录
  // todo 传入`${process.cwd()}/dist/${templateName[0]}`参数
  core.startGroup('generate vite template');
  try {
    // await exec('pnpm run dev init template-vite-vue2 --description 这是一个vite构建的vue2项目 --type vue2 --template lite --buildToolType vite');
    await exec('pnpm run dev init template-vite-vue3 --description 这是一个vite构建的vue3项目 --type vue3 --template lite --buildToolType vite');
    // await exec('pnpm run dev init template-vite-react --description 这是一个vite构建的react项目 --type react --template lite --buildToolType vite');

    const viteConfigFilePath = await glob.create('template-vite-*/vite.config.*')
    const viteConfigFiles = await viteConfigFilePath.glob()

    viteConfigFiles.map(async (viteConfigFile) => {
      // todo 这里有更好的匹配方法吗
      const templateName = viteConfigFile.match(/template-vite-(.*)\//);

      if (templateName === null) {
        core.setFailed('templateName is null');
        return;
      }
      core.info(`templateName: ${templateName[0]}`);

      const readViteConfigFile = fs.readFileSync(viteConfigFile, 'utf-8');
      const newViteConfig = readViteConfigFile.replace('defineConfig({', `defineConfig({\n base: '/tdesign-starter-cli/${templateName[0]}',`)

      core.info(`newViteConfig: ${newViteConfig}`);

      fs.writeFileSync(viteConfigFile, newViteConfig);

      const templateDir = `${currentDir}/${templateName[0]}`;
      core.info(`当前目录2: ${currentDir}`);

      await exec(`pnpm install`, [], {
        cwd: templateDir,
      });
      await exec(`pnpm run build`, [], {
        cwd: templateDir,
        listeners: {
          stdout: async (data) => {
            core.info(data.toString());
            // await fs.promises.mkdir(`${rootDir}/dist/${templateName[0]}`, { recursive: true });
            // core.info(`mkdir ${templateName[0]} to ${rootDir}/dist/${templateName[0]}`);
            // await fs.promises.cp(`${templateDir}dist/`, `${rootDir}/dist/${templateName[0]}`, {
            //   recursive: true
            // });

          },
          stderr: async (data) => {
            core.info(data.toString());
          },
          stdline: async (data) => {
            core.info(data.toString());
          },
          errline: async (data) => {
            core.info(data.toString());
          },
          debug: async (data) => {
            core.info(data.toString());
          },
        }
      });

      core.info(`copy ${templateName[0]} success`);
    })


  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
  core.endGroup();
};

/**
 * 上传产物 artifact
 */
export const uploadArtifact = async (artifactFilePath: string): Promise<{ id: number; size: number }> => {
  core.startGroup('upload artifact');
  try {
    const artifact = new DefaultArtifactClient();
    // todo 这里匹配的文件有问题    
    core.info(`artifactFilePath: ${artifactFilePath}`);
    const createFilePath = await glob.create(`${artifactFilePath}/dist/**`, { followSymbolicLinks: false });
    core.info(`createFilePath: ${createFilePath}`);
    const filesGlob = await createFilePath.glob();
    core.info(`filesGlob: ${filesGlob}`);
    const { id, size } = await artifact.uploadArtifact(
      'github-pages',
      filesGlob,
      artifactFilePath,
    );
    if (!id || !size) {
      throw new Error('Artifact size is undefined');
    }
    core.info(`upload artifact success, id: ${id}, size: ${size}`);
    return { id, size };
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
    throw error; // 确保在错误情况下抛出异常
  }
};