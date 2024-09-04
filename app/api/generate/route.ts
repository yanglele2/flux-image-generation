import { NextResponse } from 'next/server';
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// 定义输出类型
type ReplicateOutput = string[];

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
    }) as ReplicateOutput; // 使用类型断言

    if (output && output.length > 0) {
      return NextResponse.json({ success: true, image: output[0] });
    } else {
      throw new Error('No output generated');
    }
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json({ success: false, error: 'Failed to generate image' }, { status: 500 });
  }
}
