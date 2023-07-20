import { ChatParams } from '../lib/openAI-helper';

export const DOC_FILE_EXTENSION = 'md';
export const EXPORT_FOLDER_NAME = 'test_docs';

/**
 * parameters for RunPrompt helper function
 * Use link below to determine what kind of parameters you can dd
 * https://platform.openai.com/docs/api-reference/chat/create
 */
export const PARAMS = (fileData: string): ChatParams => {
  const userPrompt = `
    Create documentation for ${fileData} in a .${DOC_FILE_EXTENSION} file format. 
    Don't talk about any limitations or future improvements.
    Code summaries at the end should only be specific to the code itself and 
    contain no general information like 
    "This documentation provides an overview of the code and its functionality. It explains the purpose of each class, its attributes, and methods. Developers can refer to this documentation to understand how to use and extend the code."
    `;

  const systemPrompt = `
    You are a developer and you want to write documentation about some Next.js components.
    You only write about the code and you don't include any obvious side notes 
    about the doc itself.
    `;

  const params: ChatParams = {
    messages: [
      { role: 'user', content: userPrompt },
      {
        role: 'system',
        content: systemPrompt,
      },
    ],
    top_p: 0.2,
  };

  return params;
};
