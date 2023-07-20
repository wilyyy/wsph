import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_SECRET_KEY,
});

const openai = new OpenAIApi(configuration);

// parameter types for RunPrompt function
export interface ChatParams {
  messages: {
    role: 'user' | 'system' | 'assistant';
    content: string;
  }[];
  top_p?: number;
}

/**
 * Function to run a chatGPT prompt and return a message
 */
export const RunPrompt = async (params: ChatParams) => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      ...params,
    });
    const message = completion.data.choices[0].message?.content;
    // console.log(message);
    return message;
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.status);
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }
  }
};
