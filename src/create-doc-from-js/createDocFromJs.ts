import { DOC_FILE_EXTENSION } from "./config";
import { RunPrompt } from "../lib/openAI-helper";
import * as fs from "fs";

/**
 * Script to create documentation from javascript and typescript code
 */
const CreateDocFromJS = async () => {
   await RunPrompt(
      `Create documentation for all of these JS files in the format of ${DOC_FILE_EXTENSION}`
   );
};

CreateDocFromJS();
