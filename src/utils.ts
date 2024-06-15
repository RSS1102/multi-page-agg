import core from '@actions/core'
import { exec } from '@actions/exec';

export const cloneRepo = async (): Promise<void> => {
  try {
    // todo: 传入分支
    // todo: 传入仓库地址
    // todo: 传入工作目录
    // todo: 传入 options 参数
    const exitcode = await exec(
      'git',
      ['clone', '--depth=1', '--single-branch', '--branch', 'dev', 'https://github.com/Tencent/tdesign-starter-cli', 'tdesign-starter-cli'],
    );
    if (exitcode !== 0) {
      core.setFailed('clone repo failed');
    }
    core.debug(`clone repo success`);

  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
};