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

        "HTTP-Referer": "http://localhost:3000",

        "X-Title": "AI Property Assistant",

      },

    });

  }



  async generateDescription(data: any) {

    try {


      const prompt = `

You are a professional real estate marketing expert.

Write an attractive property listing description.

Property Title:
${data.title}

Property Type:
${data.type}

Location:
${data.location}

Features:
${data.features}


Requirements:

- Make it persuasive for buyers
- Make it SEO friendly
- Use professional real estate language
- Highlight benefits
- Around 120 words


`;



      const completion = await this.openai.chat.completions.create({


        model: "inclusionai/ling-3.0-flash:free",


        messages: [

          {

            role: "user",

            content: prompt,

          },

        ],


        temperature: 0.7,


      });



      return {

        description:
          completion.choices[0]?.message?.content || 
          "No description generated."


      };



    } catch (error: any) {


      console.log("==============================");

      console.log("OPENROUTER ERROR");

      console.log("STATUS:", error.status);

      console.log("MESSAGE:", error.message);

      console.log(
        "DETAIL:",
        error.error
      );

      console.log(
        "FULL ERROR:",
        JSON.stringify(error, null, 2)
      );

      console.log("==============================");


      throw error;

    }

  }


}