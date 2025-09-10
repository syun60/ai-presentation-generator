'use client';

import { GeneratedPresentation } from '@/types/presentation';
import { FileText, Palette, Copy, Download } from 'lucide-react';
import toast from 'react-hot-toast';

interface GeneratedContentProps {
  presentation: GeneratedPresentation;
}

export default function GeneratedContent({ presentation }: GeneratedContentProps) {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label}をクリップボードにコピーしました`);
  };

  const exportText = () => {
    const text = `
# ${presentation.title}

## 構成
${presentation.structure.map((item, index) => `${index + 1}. ${item}`).join('\n')}

## スライド詳細
${presentation.slides.map((slide, index) => `
### ${index + 1}. ${slide.title}
キーポイント:
${slide.keyPoints.map(point => `- ${point}`).join('\n')}

ノート: ${slide.notes}
`).join('\n')}

## デザイン提案
- カラーパレット: ${presentation.designSuggestions.colorPalette.join(', ')}
- フォント: ${presentation.designSuggestions.fontSuggestion}
- レイアウト: ${presentation.designSuggestions.layoutStyle}
    `;
    
    copyToClipboard(text.trim(), '完全版');
  };

  return (
    <div className="space-y-8 fade-in">
      <div className="glass-effect p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl rounded-full"></div>
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 mr-4 neon-glow">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold gradient-text">
              {presentation.title}
            </h2>
          </div>
          <button
            onClick={exportText}
            className="group flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 font-medium hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            🎦 全てエクスポート
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 mr-3">
                <span className="text-white font-bold">📋</span>
              </div>
              プレゼン構成
            </h3>
            <div className="space-y-3">
              {presentation.structure.map((item, index) => (
                <div key={index} className="group flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => copyToClipboard(
                presentation.structure.map((item, index) => `${index + 1}. ${item}`).join('\n'),
                '構成'
              )}
              className="mt-4 flex items-center px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-xl transition-all duration-300 font-medium hover:scale-105"
            >
              <Copy className="w-4 h-4 mr-2" />
              📋 構成をコピー
            </button>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mr-3">
                <Palette className="w-5 h-5 text-white" />
              </div>
              デザイン提案
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-2xl">
                <p className="font-semibold text-gray-800 mb-3 flex items-center">
                  🎨 カラーパレット
                </p>
                <div className="flex space-x-3">
                  {presentation.designSuggestions.colorPalette.map((color, index) => (
                    <div
                      key={index}
                      className="relative group"
                    >
                      <div
                        className="w-14 h-14 rounded-2xl shadow-lg border-3 border-white hover:scale-110 transition-transform duration-300 cursor-pointer"
                        style={{ backgroundColor: color }}
                        title={color}
                      ></div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded">
                        {color}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl">
                <p className="font-semibold text-gray-800 mb-2 flex items-center">
                  🔤 推奨フォント
                </p>
                <p className="text-lg font-medium text-gray-700 bg-white/50 px-4 py-2 rounded-xl">{presentation.designSuggestions.fontSuggestion}</p>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-2xl">
                <p className="font-semibold text-gray-800 mb-2 flex items-center">
                  📝 レイアウトスタイル
                </p>
                <p className="text-lg font-medium text-gray-700 bg-white/50 px-4 py-2 rounded-xl">{presentation.designSuggestions.layoutStyle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold gradient-text mb-2">📝 スライド詳細</h3>
          <p className="text-gray-600">各スライドの詳細な内容とスピーカーノート</p>
        </div>
        {presentation.slides.map((slide, index) => (
          <div key={index} className="glass-effect p-8 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mr-4 font-bold text-white text-lg group-hover:scale-110 transition-transform neon-glow">
                  {index + 1}
                </div>
                <h4 className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                  {slide.title}
                </h4>
              </div>
              <button
                onClick={() => copyToClipboard(
                  `${slide.title}\n\nキーポイント:\n${slide.keyPoints.map(p => `• ${p}`).join('\n')}\n\nノート: ${slide.notes}`,
                  `スライド${index + 1}`
                )}
                className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 group/btn"
              >
                <Copy className="w-5 h-5 group-hover/btn:animate-pulse" />
              </button>
            </div>
            
            <div className="mb-6 relative z-10">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
                <p className="font-bold text-gray-800 mb-4 flex items-center text-lg">
                  ✨ キーポイント
                </p>
                <ul className="space-y-3">
                  {slide.keyPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl">
                <p className="font-bold text-gray-800 mb-4 flex items-center text-lg">
                  🎤 スピーカーノート
                </p>
                <p className="text-gray-700 bg-white/70 p-4 rounded-xl leading-relaxed font-medium shadow-sm">{slide.notes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}