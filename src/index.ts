import * as core from '@actions/core'
import fs from 'fs';
import ghPages from 'gh-pages';
import { buildProducts, cloneRepo, generateViteTemplate, pnpmInstall, uploadArtifact } from './utils.js';

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const rootDir = '/home/runner/work';
    process.chdir("..");
    const currentDir = process.cwd();

    fs.mkdir(`${rootDir}/dist`, async () => {
      await cloneRepo();
      await pnpmInstall();
      await buildProducts();
      await generateViteTemplate({
        rootDir,
        currentDir
      });
      await uploadArtifact(rootDir);
    })

  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run();
