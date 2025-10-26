import { Sandbox } from '@e2b/code-interpreter';
import { inngest } from "./client";
import 'dotenv/config'
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.GOOGLE_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event, step }) => {

        const response = await step.run("ask-gemini", async () => {
            return await openai.chat.completions.create({
                model: "gemini-2.5-flash",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: "Explain to me how AI works." },
                ],
            });
        });


        await step.sleep("wait-a-moment", "2s");
        return {
            message: `Here's your response: ${response.choices[0].message.content}`,
            fullResponse: response,
        };
    },
);
