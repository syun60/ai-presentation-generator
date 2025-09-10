'use client';

import { useState } from 'react';
import PresentationForm from '@/components/PresentationForm';
import GeneratedContent from '@/components/GeneratedContent';
import { generatePresentation } from '@/data/templates';
import { PresentationInput, GeneratedPresentation } from '@/types/presentation';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  const [presentation, setPresentation] = useState<GeneratedPresentation | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (input: PresentationInput) => {
    setIsGenerating(true);
    
    // リアルな生成時間をシミュレート
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const generated = generatePresentation(input);
    setPresentation(generated);
    setIsGenerating(false);
  };

  const handleReset = () => {
    setPresentation(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, #4F46E5 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-400/5 via-purple-400/5 to-transparent rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 py-8 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-3xl rounded-full scale-150 floating-animation"></div>
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 leading-tight">
                🎯 AI プレゼン資料ジェネレーター
              </h1>
              <p className="text-gray-600 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
                最新のAI技術で、プロフェッショナルなプレゼンテーション構成を自動生成
              </p>
              <div className="flex justify-center mt-8 space-x-6">
                <div className="flex items-center text-gray-600">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="font-medium">✨ AIパワード</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="font-medium">⚡ 高速生成</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="font-medium">🎨 プロ級</span>
                </div>
              </div>
            </div>
          </div>

          {!presentation ? (
            <PresentationForm onGenerate={handleGenerate} isGenerating={isGenerating} />
          ) : (
            <div className="space-y-6">
              <div className="flex justify-center mb-8">
                <button
                  onClick={handleReset}
                  className="group flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 neon-glow"
                >
                  <span className="mr-3 text-2xl group-hover:animate-spin">🔄</span>
                  新しいプレゼンを作成
                </button>
              </div>
              <GeneratedContent presentation={presentation} />
            </div>
          )}
        </div>
      </div>
      <Toaster position="top-right" />
    </main>
  );
}
