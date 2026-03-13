<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Poetry Mentor app

Ứng dụng đã được đổi sang:
- **Text AI miễn phí** qua Pollinations (fallback model: `openai-large` -> `openai`) — không cần Gemini API key.
- **Voice AI miễn phí** qua Web Speech API (ưu tiên giọng nữ tiếng Việt nếu trình duyệt hỗ trợ).

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Deploy on Vercel

1. Import repo vào Vercel.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy.

App sẽ ưu tiên gọi **`/api/chat`** (Vercel Serverless Function) để tránh lỗi mạng/CORS từ browser tới Pollinations.

## Deploy notes

- Không cần cấu hình `GEMINI_API_KEY` nữa.
- Nếu muốn bỏ qua Vercel function và gọi thẳng endpoint text, có thể set `VITE_TEXT_API_BASE` (ví dụ: `https://text.pollinations.ai`).
- Voice AI dùng `window.speechSynthesis`, chất lượng giọng phụ thuộc vào hệ điều hành + trình duyệt của người dùng.
