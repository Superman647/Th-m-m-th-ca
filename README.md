<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Poetry Mentor app

Ứng dụng đã được đổi sang:
- **Text AI miễn phí** qua Pollinations (`openai-large`) — không cần Gemini API key.
- **Voice AI miễn phí** qua Web Speech API (ưu tiên giọng nữ tiếng Việt nếu trình duyệt hỗ trợ).

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Deploy notes

- Không cần cấu hình `GEMINI_API_KEY` nữa.
- Text AI gọi trực tiếp endpoint `https://text.pollinations.ai/openai/v1/chat/completions`.
- Voice AI dùng `window.speechSynthesis`, chất lượng giọng phụ thuộc vào hệ điều hành + trình duyệt của người dùng.
