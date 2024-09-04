import { NextResponse } from 'next/server';
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
  const body = await req.json();
  const { prompt, quality, promptWeight, aspectRatio, imageFormat, disableSafetyCheck } = body;

  try {
    const output = await replicate.run("black-forest-labs/flux-schnell", {
      input: {
        prompt,
        num_outputs: 1,
        aspect_ratio: aspectRatio,
        output_format: imageFormat,
        output_quality: quality,
        prompt_weight: promptWeight,
        disable_safety_check: disableSafetyCheck,
      }
    });

    return NextResponse.json({ success: true, image: output[0] });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json({ success: false, error: 'Failed to generate image' }, { status: 500 });
  }
}
