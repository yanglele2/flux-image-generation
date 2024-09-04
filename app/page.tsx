"use client"

import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  const [quality, setQuality] = React.useState(50);
  const [promptWeight, setPromptWeight] = React.useState(0.5);
  const [aspectRatio, setAspectRatio] = React.useState("16:9");
  const [imageFormat, setImageFormat] = React.useState("png");
  const [disableSafetyCheck, setDisableSafetyCheck] = React.useState(false);

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Flux 图片生成器</h1>
      
      <div className="w-full max-w-md">
        <Textarea
          placeholder="输入你的提示词"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white"
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
            Disable Safety Check
          </label>
        </div>

        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white h-9 px-4 py-2" 
          variant="default"
        >
          生成图像
        </Button>
      </div>

      <div className="mt-8 w-full max-w-md h-64 bg-gray-800 border border-gray-700 rounded flex items-center justify-center">
        <p className="text-gray-400">生成的图像将显示在这里</p>
      </div>
    </main>
  );
}
