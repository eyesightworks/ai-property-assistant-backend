# AI Property Assistant Backend

Backend API for an AI-powered real estate description generator.

This service uses NestJS and OpenRouter AI models to generate professional, SEO-friendly property descriptions from property details.

## Features

- AI property description generation
- REST API with NestJS
- OpenRouter AI integration
- TypeScript backend
- Clean modular architecture

## Tech Stack

- NestJS
- TypeScript
- Node.js
- OpenRouter API
- OpenAI SDK

## Project Structure

```text
src
├── ai
│   ├── ai.controller.ts
│   ├── ai.service.ts
│   └── ai.module.ts
├── app.module.ts
└── main.ts
```

## API Endpoint

### Generate Property Description

```
POST /ai/generate-description
```

## Request Body

```json
{
  "title": "Luxury Apartment",
  "type": "Apartment",
  "location": "Ibadan, Nigeria",
  "features": "3 Bedrooms, Swimming Pool, Modern Kitchen"
}
```

## Response

```json
{
  "description": "Professional AI generated property description..."
}
```

## Installation

Clone repository:

```bash
git clone https://github.com/eyesightworks/ai-property-assistant-backend.git
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
OPENROUTER_API_KEY=your_api_key_here
```

Do not commit your real API key.

## Running Locally

Start development server:

```bash
npm run start:dev
```

Backend runs on:

```
http://localhost:3000
```

## Frontend

The frontend application is available here:

https://github.com/eyesightworks/ai-property-assistant-frontend

## Author

**ALAWODE ADEWALE AFEEZ**

Full Stack Product Engineer

GitHub:

https://github.com/eyesightworks
