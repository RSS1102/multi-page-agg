import * as core from '@actions/core'

import fs from 'fs';
import ghPages from 'gh-pages';
import { buildProducts, cloneRepo, generateViteTemplate, pnpmInstall } from './utils.js';

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const rootDir = '/home/runner/work';
    process.chdir("..");
    const currentDir = process.cwd();

    fs.mkdirSync(`${rootDir}/dist`)
    await cloneRepo();
    await pnpmInstall();
    await buildProducts();
    await generateViteTemplate({
      rootDir,
      currentDir
    });
    // 将dist上传上去`${rootDir}/dist`
   await ghPages.publish(`${rootDir}/dist`, {
      branch: 'gh-pages',
      repo: 'https://github.com/RSS1102/tdesign-starter-cli.git',
    }, (err) => {
      if (err) {
        core.info(`上传失败: ${err}`);
      }
      core.info('上传成功');
    });
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run();
