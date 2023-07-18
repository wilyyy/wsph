import { DOC_FILE_EXTENSION } from "./config";
import { RunPrompt } from "../lib/openAI-helper";
import * as fs from "fs";
import * as path from "path";

const CreateDocFromJS = async () => {
   const folderPath = "src/create-doc-from-js/files/";
   const checkJsFileExtension = (fileName: string): boolean => {
      const condition =
         path.extname(fileName) === ".js" ||
         path.extname(fileName) === ".jsx" ||
         path.extname(fileName) === ".ts" ||
         path.extname(fileName) === ".tsx";
      return condition;
   };
   try {
      const files = await fs.promises.readdir(folderPath);
      for (const file of files) {
         if (checkJsFileExtension(file)) {
            const filePath = path.join(folderPath, file);
            const data = await fs.promises.readFile(filePath, "utf8");
            console.log(`Content of ${filePath}:`);
            console.log(data);

            const gptOutput = await RunPrompt(
               `Create documentation for ${data} in a ${DOC_FILE_EXTENSION} file format`
            );

            console.log(gptOutput);
         }
      }
   } catch (err) {
      console.error(err);
   }
};

CreateDocFromJS();
