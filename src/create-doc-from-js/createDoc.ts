import * as fs from 'fs';
import * as path from 'path';
import { DOC_FILE_EXTENSION, EXPORT_FOLDER_NAME, PARAMS } from './config';
import { RunPrompt } from '../lib/openAI-helper';

const CreateDocFromJS = async () => {
  const folderPath = 'files/create-docs/';
  const exportFolderPath = `./exports/docs/${EXPORT_FOLDER_NAME}`;

  const checkJsFileExtension = (fileName: string): boolean => {
    const validExtensions = ['.js', '.jsx', '.ts', '.tsx', '.py'];
    return validExtensions.includes(path.extname(fileName));
  };

  try {
    const files = await fs.promises.readdir(folderPath);

    await fs.promises.mkdir(exportFolderPath, { recursive: true });

    for (const file of files) {
      console.log(
        `Reading ${files.indexOf(file) + 1} out of ${files.length} files`,
      );

      if (checkJsFileExtension(file)) {
        const filePath = path.join(folderPath, file);
        const data = await fs.promises.readFile(filePath, 'utf8');

        const gptOutput = await RunPrompt(PARAMS(data));

        if (gptOutput) {
          const docFileName = `${path.basename(
            file,
            path.extname(file),
          )}.${DOC_FILE_EXTENSION}`;
          const docFilePath = path.join(exportFolderPath, docFileName);
          await fs.promises.writeFile(docFilePath, gptOutput, 'utf8');
          console.log(`Succesfully created ${docFileName} into ${docFilePath}`);
        } else {
          console.log(`No output generated for ${filePath}`);
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
};

CreateDocFromJS();
