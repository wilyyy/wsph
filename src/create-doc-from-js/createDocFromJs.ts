// import { FILE_EXTENSION } from "./config";
import { RunPrompt } from "../lib/openAI-helper";

/**
 * Script to create documentation from javascript and typescript code
 */
const CreateDocFromJS = async () => {
   await RunPrompt("What is the meaning of life ?");
};

CreateDocFromJS();
