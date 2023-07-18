import * as fs from 'fs';
import * as path from 'path';
import { DOC_FILE_EXTENSION, EXPORT_FOLDER_NAME } from './config';
import { RunPrompt } from '../lib/openAI-helper';

const CreateDocFromJS = async () => {
  const folderPath = 'src/create-doc-from-js/files/';
  const exportFolderPath = `./exports/docs/${EXPORT_FOLDER_NAME}`;

  const checkJsFileExtension = (fileName: string): boolean => {
    const condition =
      path.extname(fileName) === '.js' ||
      path.extname(fileName) === '.jsx' ||
      path.extname(fileName) === '.ts' ||
      path.extname(fileName) === '.tsx';
    return condition;
  };

  try {
    const files = await fs.promises.readdir(folderPath);

    // Create the 'exports' folder if it doesn't exist
    await fs.promises.mkdir(exportFolderPath, { recursive: true });

    for (const file of files) {
      if (checkJsFileExtension(file)) {
        const filePath = path.join(folderPath, file);
        const data = await fs.promises.readFile(filePath, 'utf8');
        console.log(`Content of ${filePath}:`);
        console.log(data);

        const gptOutput = await RunPrompt(
          `Create documentation for ${data} in a ${DOC_FILE_EXTENSION} file format`
        );

        if (gptOutput) {
          const docFileName = `${path.basename(
            file,
            path.extname(file)
          )}.${DOC_FILE_EXTENSION}`;
          const docFilePath = path.join(exportFolderPath, docFileName);
          await fs.promises.writeFile(docFilePath, gptOutput, 'utf8');
          console.log(`Created ${docFilePath}`);
        } else {
          console.log(`No output generated for ${filePath}`);
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
};

CreateDocFromJS();
