'use client';

import { useState } from 'react';
import { PresentationInput } from '@/types/presentation';
import { Sparkles, Users, Clock, Building2, Palette } from 'lucide-react';

interface PresentationFormProps {
  onGenerate: (input: PresentationInput) => void;
  isGenerating: boolean;
}

export default function PresentationForm({ onGenerate, isGenerating }: PresentationFormProps) {
  const [input, setInput] = useState<PresentationInput>({
    theme: '',
    audience: '',
    duration: '',
    industry: '',
    tone: '',
    objective: '',
    slideCount: '',
    visualStyle: '',
    language: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(input);
  };

  return (
    <div className="slide-in">
      <form onSubmit={handleSubmit} className="space-y-6 p-6 glass-effect relative overflow-hidden max-w-2xl mx-auto">
      <div className="text-center mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl rounded-full transform scale-150 floating-animation"></div>
        <div className="flex items-center justify-center mb-4 relative z-10">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 mr-3 neon-glow">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">
            AI プレゼン資料ジェネレーター
          </h2>
        </div>
        <p className="text-gray-600 text-lg relative z-10">テーマを入力するだけで、プロフェッショナルなプレゼン構成を自動生成</p>
      </div>

      <div className="space-y-4">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl rounded-3xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white/40 backdrop-blur-md border border-white/30 rounded-3xl p-5">
            <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-2">
                <span className="text-white text-sm">✨</span>
              </div>
              プレゼンテーマ・目的 *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={input.theme}
                onChange={(e) => setInput({...input, theme: e.target.value})}
                placeholder="例: 新システム導入提案、四半期売上報告"
                className="w-full pl-4 pr-10 py-3 bg-white/70 border border-white/40 rounded-2xl focus:ring-3 focus:ring-blue-500/30 focus:border-blue-400 focus:bg-white/90 transition-all duration-300 text-gray-800 placeholder-gray-500 backdrop-blur-sm font-medium shadow-sm text-sm"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <span className="text-lg">📝</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-lg rounded-2xl group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl p-3 hover:bg-white/50 transition-all duration-300">
              <label className="block text-xs font-semibold text-gray-700 mb-2 flex items-center">
                <Users className="w-3 h-3 mr-1 text-blue-500" />
                対象者
              </label>
              <select
                value={input.audience}
                onChange={(e) => setInput({...input, audience: e.target.value})}
                className="w-full px-2 py-1.5 bg-transparent border-none rounded-xl focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 text-xs text-gray-800 appearance-none cursor-pointer font-medium"
              >
                <option value="">選択</option>
                <option value="役員・経営陣">👔 役員</option>
                <option value="チーム・同僚">🤝 チーム</option>
                <option value="顧客・クライアント">🎯 顧客</option>
                <option value="一般向け">👥 一般</option>
              </select>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-teal-400/10 blur-lg rounded-2xl group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl p-3 hover:bg-white/50 transition-all duration-300">
              <label className="block text-xs font-semibold text-gray-700 mb-2 flex items-center">
                <Clock className="w-3 h-3 mr-1 text-green-500" />
                時間
              </label>
              <select
                value={input.duration}
                onChange={(e) => setInput({...input, duration: e.target.value})}
                className="w-full px-2 py-1.5 bg-transparent border-none rounded-xl focus:ring-2 focus:ring-green-400/30 transition-all duration-300 text-xs text-gray-800 appearance-none cursor-pointer font-medium"
              >
                <option value="">選択</option>
                <option value="5分">⚡ 5分</option>
                <option value="15分">📊 15分</option>
                <option value="30分">📈 30分</option>
                <option value="60分">🎭 60分</option>
              </select>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-lg rounded-2xl group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl p-3 hover:bg-white/50 transition-all duration-300">
              <label className="block text-xs font-semibold text-gray-700 mb-2 flex items-center">
                <Building2 className="w-3 h-3 mr-1 text-purple-500" />
                業界
              </label>
              <select
                value={input.industry}
                onChange={(e) => setInput({...input, industry: e.target.value})}
                className="w-full px-2 py-1.5 bg-transparent border-none rounded-xl focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 text-xs text-gray-800 appearance-none cursor-pointer font-medium"
              >
                <option value="">選択</option>
                <option value="IT・技術">💻 IT</option>
                <option value="マーケティング">📢 マーケ</option>
                <option value="営業・セールス">💼 営業</option>
              </select>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-400/10 blur-lg rounded-2xl group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl p-3 hover:bg-white/50 transition-all duration-300">
              <label className="block text-xs font-semibold text-gray-700 mb-2 flex items-center">
                <Palette className="w-3 h-3 mr-1 text-orange-500" />
                トーン
              </label>
              <select
                value={input.tone}
                onChange={(e) => setInput({...input, tone: e.target.value})}
                className="w-full px-2 py-1.5 bg-transparent border-none rounded-xl focus:ring-2 focus:ring-orange-400/30 transition-all duration-300 text-xs text-gray-800 appearance-none cursor-pointer font-medium"
              >
                <option value="">選択</option>
                <option value="フォーマル">🎩 フォーマル</option>
                <option value="カジュアル">😊 カジュアル</option>
                <option value="データ重視">📊 データ</option>
                <option value="ストーリー重視">📖 ストーリー</option>
              </select>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 blur-lg rounded-2xl group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl p-3 hover:bg-white/50 transition-all duration-300">
              <label className="block text-xs font-semibold text-gray-700 mb-2 flex items-center">
                <span className="text-emerald-500 text-sm mr-1">🎯</span>
                目的
              </label>
              <select
                value={input.objective}
                onChange={(e) => setInput({...input, objective: e.target.value})}
                className="w-full px-2 py-1.5 bg-transparent border-none rounded-xl focus:ring-2 focus:ring-emerald-400/30 transition-all duration-300 text-xs text-gray-800 appearance-none cursor-pointer font-medium"
              >
                <option value="">選択</option>
                <option value="説明・報告">📋 説明</option>
                <option value="提案・企画">💡 提案</option>
                <option value="教育・研修">🎓 教育</option>
                <option value="販売・営業">💰 販売</option>
              </select>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 blur-lg rounded-2xl group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl p-3 hover:bg-white/50 transition-all duration-300">
              <label className="block text-xs font-semibold text-gray-700 mb-2 flex items-center">
                <span className="text-indigo-500 text-sm mr-1">📊</span>
                枚数
              </label>
              <select
                value={input.slideCount}
                onChange={(e) => setInput({...input, slideCount: e.target.value})}
                className="w-full px-2 py-1.5 bg-transparent border-none rounded-xl focus:ring-2 focus:ring-indigo-400/30 transition-all duration-300 text-xs text-gray-800 appearance-none cursor-pointer font-medium"
              >
                <option value="">選択</option>
                <option value="5-10枚">📄 5-10枚</option>
                <option value="10-20枚">📋 10-20枚</option>
                <option value="20-30枚">📚 20-30枚</option>
                <option value="30枚以上">📖 30枚以上</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-rose-400/10 blur-lg rounded-2xl group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl p-4 hover:bg-white/50 transition-all duration-300">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <span className="text-pink-500 text-lg mr-2">🎨</span>
                ビジュアルスタイル
              </label>
              <select
                value={input.visualStyle}
                onChange={(e) => setInput({...input, visualStyle: e.target.value})}
                className="w-full px-3 py-2 bg-transparent border-none rounded-xl focus:ring-2 focus:ring-pink-400/30 transition-all duration-300 text-sm text-gray-800 appearance-none cursor-pointer font-medium"
              >
                <option value="">選択してください</option>
                <option value="ミニマル">✨ ミニマル・シンプル</option>
                <option value="モダン">🔥 モダン・スタイリッシュ</option>
                <option value="クリエイティブ">🎭 クリエイティブ・カラフル</option>
                <option value="ビジネス">💼 ビジネス・プロフェッショナル</option>
                <option value="アカデミック">📚 アカデミック・学術的</option>
              </select>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400/10 to-purple-400/10 blur-lg rounded-2xl group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl p-4 hover:bg-white/50 transition-all duration-300">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <span className="text-violet-500 text-lg mr-2">🌍</span>
                言語・地域
              </label>
              <select
                value={input.language}
                onChange={(e) => setInput({...input, language: e.target.value})}
                className="w-full px-3 py-2 bg-transparent border-none rounded-xl focus:ring-2 focus:ring-violet-400/30 transition-all duration-300 text-sm text-gray-800 appearance-none cursor-pointer font-medium"
              >
                <option value="">選択してください</option>
                <option value="日本語">🇯🇵 日本語（国内向け）</option>
                <option value="英語">🇺🇸 English（国際向け）</option>
                <option value="バイリンガル">🌐 バイリンガル（日英併記）</option>
                <option value="韓国語">🇰🇷 한국어</option>
                <option value="中国語">🇨🇳 中文</option>
              </select>
            </div>
          </div>
        </div>


        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={!input.theme || isGenerating}
            className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white py-3 px-8 rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 flex items-center justify-center text-base overflow-hidden neon-glow transform hover:scale-105"
            style={{
              backgroundSize: '200% 200%',
              backgroundPosition: isGenerating ? '100% 0' : '0% 0'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                <span className="animate-pulse">✨ AI が生成中...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                <span>🚀 プレゼン資料を生成</span>
              </>
            )}
          </button>
        </div>
      </div>
      </form>
    </div>
  );
}