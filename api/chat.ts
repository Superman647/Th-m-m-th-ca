export default async function handler(_req: any, res: any) {
  res.status(410).json({
    error:
      'Deprecated endpoint: /api/chat has been removed. This app now uses Puter Gemini directly from the client.',
  });
}
