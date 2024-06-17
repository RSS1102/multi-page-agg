import * as core from '@actions/core'
import { exec } from '@actions/exec'

import fs from 'fs';
import ghPages from 'gh-pages';
import { buildProducts, cloneRepo, generateViteTemplate, pnpmInstall } from './utils.js';

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const currentDir = process.cwd();

    fs.mkdirSync(`${currentDir}/dist`);

    await cloneRepo();
    await pnpmInstall();
    await buildProducts();
    await generateViteTemplate();
    // const viteFilePath = await glob.create('template-vite-*/vite.config.*')
    // core.debug(`vite ${viteFilePath}`)
    // const files = await viteFilePath.glob()
    // core.debug(`files ${files}`)

    // files.map(async (file) => {
    //   core.debug(`file ${file}`)
    //   // 匹配`template-vite-*一直到`/`之间的内容
    //   const templateName = file.match(/template-vite-(.*)\//)
    //   core.debug(`templateName ${templateName}`)
    //   const readViteConfig = fs.readFileSync(file, 'utf-8');
    //   if (!templateName) {
    //     return core.setFailed('模版名称匹配失败');;
    //   }
    //   const newViteConfig = readViteConfig.replace('defineConfig({', `defineConfig({\n base: ${templateName[0]},`)
    //   fs.writeFileSync(file, newViteConfig);
    //   exec(`cd ${templateName[0]} && pnpm install && pnpm run build`);
    //   // 重命名文件夹使用nodejs
    //   fs.renameSync(`${file}/dist`, `${currentDir}/dist/${templateName[0]}`);
    // })

    // // 将文件夹部署到github page
    // await new Promise<void>((resolve, reject) => {
    //   ghPages.publish(currentDir + '/dist', {
    //     branch: 'gh-pages', // 更改为你的目标分支
    //     message: '自动部署更新',
    //     silent: false,
    //   }, (err: { message: string | Error }) => {
    //     if (err) {
    //       console.error('部署失败', err);
    //       core.setFailed(err.message);
    //       return reject(err);
    //     }
    //     core.debug('部署成功');
    //     resolve();
    //   });
    // });

  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run();
