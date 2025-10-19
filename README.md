# ChatKit Starter Template

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
![NextJS](https://img.shields.io/badge/Built_with-NextJS-blue)
![OpenAI API](https://img.shields.io/badge/Powered_by-OpenAI_API-orange)

This repository is the simplest way to bootstrap a [ChatKit](http://openai.github.io/chatkit-js/) application. It ships with a minimal Next.js UI, the ChatKit web component, and a ready-to-use session endpoint so you can experiment with OpenAI-hosted workflows built using [Agent Builder](https://platform.openai.com/agent-builder).

## What You Get

- Next.js app with `<openai-chatkit>` web component and theming controls
- API endpoint for creating a session at [`app/api/create-session/route.ts`](app/api/create-session/route.ts)
- Config file for starter prompts, theme, placeholder text, and greeting message

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create your environment file

Create a `.env.local` file in the root directory with the following variables:

```bash
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# ChatKit Workflow Configuration  
NEXT_PUBLIC_CHATKIT_WORKFLOW_ID=wf_your_workflow_id_here

# Optional: Custom ChatKit API Base URL (defaults to https://api.openai.com)
# CHATKIT_API_BASE=https://api.openai.com
```

You can get your workflow id from the [Agent Builder](https://platform.openai.com/agent-builder) interface, after clicking "Publish":

<img src="./public/docs/workflow.jpg" width=500 />

You can get your OpenAI API key from the [OpenAI API Keys](https://platform.openai.com/api-keys) page.

### 3. Configure ChatKit credentials

Update `.env.local` with the variables that match your setup.

- `OPENAI_API_KEY` — This must be an API key created **within the same org & project as your Agent Builder**. If you already have a different `OPENAI_API_KEY` env variable set in your terminal session, that one will take precedence over the key in `.env.local` one (this is how a Next.js app works). So, **please run `unset OPENAI_API_KEY` (`set OPENAI_API_KEY=` for Windows OS) beforehand**.
- `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` — This is the ID of the workflow you created in [Agent Builder](https://platform.openai.com/agent-builder), which starts with `wf_...`
- (optional) `CHATKIT_API_BASE` - This is a customizable base URL for the ChatKit API endpoint

> Note: if your workflow is using a model requiring organization verification, such as GPT-5, make sure you verify your organization first. Visit your [organization settings](https://platform.openai.com/settings/organization/general) and click on "Verify Organization".

### 4. Run the app

```bash
npm run dev
```

Visit `http://localhost:3000` and start chatting. Use the prompts on the start screen to verify your workflow connection, then customize the UI or prompt list in [`lib/config.ts`](lib/config.ts) and [`components/ChatKitPanel.tsx`](components/ChatKitPanel.tsx).

### 5. Deploy to Vercel

This app is ready to deploy to Vercel with minimal configuration. Follow these steps:

#### Option A: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Set environment variables in Vercel dashboard or via CLI:
```bash
vercel env add OPENAI_API_KEY
vercel env add NEXT_PUBLIC_CHATKIT_WORKFLOW_ID
```

#### Option B: Deploy via GitHub Integration

1. Push your code to GitHub
2. Connect your repository to Vercel at [vercel.com](https://vercel.com)
3. Add environment variables in the Vercel dashboard:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID`: Your ChatKit workflow ID

#### Required Environment Variables for Production

Make sure to set these environment variables in your Vercel project:

- `OPENAI_API_KEY` — Your OpenAI API key (get from [OpenAI API Keys](https://platform.openai.com/api-keys))
- `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` — Your ChatKit workflow ID (get from [Agent Builder](https://platform.openai.com/agent-builder))

#### Domain Verification

Before deploying your app, you need to verify the domain by adding it to the [Domain allowlist](https://platform.openai.com/settings/organization/security/domain-allowlist) on your OpenAI dashboard.

#### Local Build Test

Test the build process locally before deploying:

```bash
npm run build
npm start
```

#### Pre-Deployment Checklist

Before deploying to Vercel, make sure you have:

- [ ] Created a ChatKit workflow in [Agent Builder](https://platform.openai.com/agent-builder)
- [ ] Obtained your OpenAI API key from [OpenAI API Keys](https://platform.openai.com/api-keys)
- [ ] Set up environment variables in Vercel dashboard
- [ ] Added your domain to OpenAI's [Domain allowlist](https://platform.openai.com/settings/organization/security/domain-allowlist)
- [ ] Tested the build locally with `npm run build`

## Customization Tips

- Adjust starter prompts, greeting text, [chatkit theme](https://chatkit.studio/playground), and placeholder copy in [`lib/config.ts`](lib/config.ts).
- Update the event handlers inside [`components/.tsx`](components/ChatKitPanel.tsx) to integrate with your product analytics or storage.

## References

- [ChatKit JavaScript Library](http://openai.github.io/chatkit-js/)
- [Advanced Self-Hosting Examples](https://github.com/openai/openai-chatkit-advanced-samples)
