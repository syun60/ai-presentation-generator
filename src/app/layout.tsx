import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI プレゼン資料ジェネレーター',
  description: '最新のAI技術でプロフェッショナルなプレゼンテーション構成を自動生成',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
