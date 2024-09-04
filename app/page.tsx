"use client"

import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import React, { useState, useCallback } from 'react';
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [quality, setQuality] = useState(50);
  const [promptWeight, setPromptWeight] = useState(0.5);
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [imageFormat, setImageFormat] = useState("png");
  const [disableSafetyCheck, setDisableSafetyCheck] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // 新增错误状态

  const handleGenerate = useCallback(async () => {
    setIsLoading(true);
    setError(null); // 清除之前的错误
    console.log(`前端 - 质量: ${quality}, 提示词权重: ${promptWeight}, 禁用安全检查: ${disableSafetyCheck}`);
    try {
      const response = await fetch('http://localhost:4000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          quality,
          promptWeight,
          aspectRatio,
          imageFormat,
          disableSafetyCheck,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setGeneratedImage(data.image);
      } else {
        console.error('生成图像失败:', data.error);
        setError(data.error || '生成图像失败，请重试'); // 设置错误信息
        if (data.details) {
          console.error('错误详情:', data.details);
          setError(`${data.error}: ${data.details}`); // 包含更详细的错误信息
        }
      }
    } catch (error) {
      console.error('生成图像时出错:', error);
      setError('生成图像时发生错误，请检查网络连接并重试'); // 设置网络错误信息
    } finally {
      setIsLoading(false);
    }
  }, [prompt, quality, promptWeight, aspectRatio, imageFormat, disableSafetyCheck]);

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Flux 图片生成器</h1>
      
      <div className="w-full max-w-md">
        <Textarea
          placeholder="输入你的提示词"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        
        <div className="mb-4">
          <label htmlFor="quality-slider" className="block mb-2">图片质量</label>
          <Slider
            id="quality-slider"
            min={0}
            max={100}
            value={[quality]}
            onValueChange={(value) => setQuality(value[0])}
            step={1}
            className="w-full"
            showValue={true}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="prompt-weight-slider" className="block mb-2">提示词权重</label>
          <Slider
            id="prompt-weight-slider"
            min={0}
            max={1}
            value={[promptWeight]}
            onValueChange={(value) => setPromptWeight(value[0])}
            step={0.01}
            className="w-full"
            showValue={true}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">图片比例</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between h-9 px-4 py-2 text-black bg-white">
                {aspectRatio}
                <span className="ml-2">▼</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setAspectRatio("16:9")}>16:9</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setAspectRatio("9:16")}>9:16</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setAspectRatio("1:1")}>1:1</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mb-4">
          <label className="block mb-2">选择图片格式</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between h-9 px-4 py-2 text-black bg-white">
                {imageFormat}
                <span className="ml-2">▼</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setImageFormat("png")}>png</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setImageFormat("jpg")}>jpg</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setImageFormat("webp")}>webp</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mb-4 flex items-center">
          <Checkbox
            id="disable-safety-check"
            checked={disableSafetyCheck}
            onCheckedChange={(checked) => setDisableSafetyCheck(checked as boolean)}
          />
          <label
            htmlFor="disable-safety-check"
            className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            禁用安全检查
          </label>
        </div>

        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white h-9 px-4 py-2" 
          variant="default"
          onClick={handleGenerate}
          disabled={isLoading}
        >
          {isLoading ? '生成中...' : '生成图像'}
        </Button>
      </div>

      {error && ( // 显示错误信息
        <div className="mt-4 p-2 bg-red-600 text-white rounded">
          错误: {error}
        </div>
      )}

      <div className="mt-8 w-full max-w-md h-64 bg-gray-800 border border-gray-700 rounded flex items-center justify-center">
        {isLoading ? (
          <p className="text-gray-400">正在生成图像...</p>
        ) : generatedImage ? (
          <img src={generatedImage} alt="Generated" className="max-w-full max-h-full object-contain" />
        ) : (
          <p className="text-gray-400">生成的图像将显示在这里</p>
        )}
      </div>
    </main>
  );
}
