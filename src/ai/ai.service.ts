import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class AiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY!,

      baseURL: 'https://openrouter.ai/api/v1',

      defaultHeaders: {
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'AI Property Assistant',
      },
    });
  }

  async generateDescription(data: any) {
    try {
      const prompt = `
You are a professional real estate copywriter.

Write a natural, professional, and SEO-friendly property description for a real estate listing.

Property Details

Title:
${data.title}

Property Type:
${data.type}

Location:
${data.location}

Features:
${data.features}

Requirements:

- Write in a natural human writing style.
- Make it persuasive and engaging for buyers.
- Use professional real estate language.
- Highlight the property's key benefits.
- Naturally mention the location within the description.
- Include the property's most attractive features.
- Keep the description between 100 and 140 words.
- Return plain text only.
- Do NOT use Markdown formatting.
- Do NOT use headings.
- Do NOT use bold text (**).
- Do NOT use hashtags (#).
- Do NOT use bullet points.
- Do NOT use emojis.
- Start immediately with an engaging opening sentence.
- End with a professional call to action encouraging the buyer to schedule a viewing.
`;

      const completion = await this.openai.chat.completions.create({
        model: 'inclusionai/ling-3.0-flash:free',

        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],

        temperature: 0.7,
      });

      return {
        description:
          completion.choices[0]?.message?.content ??
          'No description generated.',
      };
    } catch (error: any) {
      console.log('==============================');
      console.log('OPENROUTER ERROR');
      console.log('STATUS:', error.status);
      console.log('MESSAGE:', error.message);
      console.log('DETAIL:', error.error);
      console.log('FULL ERROR:', JSON.stringify(error, null, 2));
      console.log('==============================');

      throw error;
    }
  }
}