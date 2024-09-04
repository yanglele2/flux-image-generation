require('dotenv').config();
console.log('REPLICATE_API_TOKEN:', process.env.REPLICATE_API_TOKEN);

const express = require('express');
const cors = require('cors');
const Replicate = require('replicate');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

app.post('/generate', async (req, res) => {
  try {
    const { prompt, quality, promptWeight, aspectRatio, imageFormat, disableSafetyCheck } = req.body;
    
    // 将disableSafetyCheck转换为布尔值
    const safetyCheckDisabled = disableSafetyCheck === true || disableSafetyCheck === 'true';
    
    console.log('后端 - 接收到的请求参数:');
    console.log(`  提示词: ${prompt}`);
    console.log(`  输出质量: ${quality}`);
    console.log(`  提示词权重: ${promptWeight}`);
    console.log(`  宽高比: ${aspectRatio}`);
    console.log(`  图像格式: ${imageFormat}`);
    console.log(`  禁用安全检查: ${safetyCheckDisabled}`);

    console.log('\n将用于API调用的参数:');
    console.log(`  output_quality: ${quality}`);
    console.log(`  prompt_weight: ${promptWeight}`);
    console.log(`  disable_safety_check: ${safetyCheckDisabled}`);

    const output = await replicate.run("black-forest-labs/flux-schnell", {
      input: {
        prompt,
        num_outputs: 1,
        aspect_ratio: aspectRatio,
        output_format: imageFormat,
        output_quality: parseInt(quality),
        prompt_weight: parseFloat(promptWeight),
        disable_safety_check: safetyCheckDisabled,
      }
    });

    console.log('\nAPI调用成功,返回图像URL');

    res.json({ success: true, image: output[0] });
  } catch (error) {
    console.error('错误详情:', error.response ? error.response.data : error.message);
    res.status(500).json({ 
      success: false, 
      error: '生成图像失败', 
      details: error.response ? error.response.data : error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
