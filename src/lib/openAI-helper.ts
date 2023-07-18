import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

// OpenAI configuration creation
const configuration = new Configuration({
  apiKey: process.env.OPENAI_SECRET_KEY,
});

// OpenAI instance creation
const openai = new OpenAIApi(configuration);

/**
 * Function to run a chatGPT prompt and return a message
 */
export const RunPrompt = async (prompt: string) => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });
    const message = completion.data.choices[0].message?.content;
    console.log(message);
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
