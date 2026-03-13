<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Poetry Mentor app

Ứng dụng hiện hỗ trợ:
- **Gemini qua Puter.js (duy nhất cho text AI)**, ưu tiên model nhanh + sâu: `gemini-3-flash-preview` -> `gemini-3.1-flash-lite-preview` -> `gemini-3.1-pro-preview`.
- **Voice AI qua ElevenLabs** (voice ID mặc định: `jdlxsPOZOHdGEfcItXVu`) qua endpoint `/api/tts`.

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

## Deploy notes

- Bắt buộc nhúng Puter SDK ở `index.html`: `https://js.puter.com/v2/`.
- Text AI phụ thuộc Puter Gemini, không còn dùng Pollinations.
- Chat dùng streaming realtime để phản hồi xuất hiện sớm.
- Cần set `ELEVENLABS_API_KEY` (Project Settings -> Environment Variables) để bật giọng ElevenLabs.
- Có thể set `VITE_ELEVENLABS_TTS_BASE` nếu muốn trỏ frontend sang domain backend khác có route `/api/tts`.
- `/api/chat` đã deprecated và không còn dùng.
