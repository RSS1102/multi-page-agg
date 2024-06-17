import core from '@actions/core'
import { exec } from '@actions/exec';

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
    core.debug(`clone repo success`);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
  core.endGroup();
};

export const pnpmInstall = async (): Promise<void> => {
  core.startGroup('clone repo');
  try {
    const exitcode = await exec('cd ./tdesign-starter-cli && pnpm install');

    if (exitcode !== 0) {
      core.setFailed('pnpm install failed');
    }
    core.debug(`pnpm install success`);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
  core.endGroup();
};

export const buildProducts = async (): Promise<void> => {
  core.startGroup('clone repo');
  try {
    const pnpmInstallExitcode = await exec('cd ./tdesign-starter-cli && pnpm install');
    const exitcode = await exec('cd ./tdesign-starter-cli && pnpm run build');

    if (exitcode !== 0 || pnpmInstallExitcode !== 0) {
      core.setFailed('build failed');
    }
    core.debug(`build success`);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
  core.endGroup();
};