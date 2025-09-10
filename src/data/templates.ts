import { GeneratedPresentation } from '@/types/presentation';

export const industryTemplates = {
  'IT・技術': {
    structures: [
      '現状課題の分析',
      '技術的解決策',
      'アーキテクチャ設計',
      '実装・導入計画',
      'ROI・成果測定'
    ],
    keyPointsTemplates: {
      '現状課題の分析': [
        'システムレスポンス時間の遅延（平均3.2秒→目標1秒以下）',
        'セキュリティ脆弱性の発見（CVSSスコア7.5以上が5件）',
        '運用コストの増大（月額予算20%オーバー）'
      ],
      '技術的解決策': [
        'マイクロサービスアーキテクチャへの移行',
        'Kubernetes基盤でのコンテナオーケストレーション',
        'CI/CDパイプラインの自動化導入'
      ],
      'アーキテクチャ設計': [
        'API Gateway + マイクロサービス構成',
        'Redis/ElastiCacheによるキャッシュ層',
        'RDS Multi-AZ + Read Replicaによる冗長化'
      ],
      '実装・導入計画': [
        'フェーズ1：基盤構築（2ヶ月）',
        'フェーズ2：アプリケーション移行（3ヶ月）',
        'フェーズ3：運用最適化（1ヶ月）'
      ],
      'ROI・成果測定': [
        'レスポンス時間67%改善による顧客満足度向上',
        '運用コスト30%削減（月額150万円→105万円）',
        'システム可用性99.9%達成'
      ]
    },
    colorPalettes: [
      ['#3B82F6', '#1E40AF', '#F3F4F6', '#374151'],
      ['#6366F1', '#4F46E5', '#F8FAFC', '#475569']
    ]
  },
  'マーケティング': {
    structures: [
      '市場環境分析',
      'ターゲット戦略',
      'マーケティング施策',
      '実行・運用計画',
      '効果測定・KPI'
    ],
    keyPointsTemplates: {
      '市場環境分析': [
        '市場規模：2024年度1,200億円（前年比108%成長）',
        '競合3社のシェア分析と差別化ポイント',
        '顧客ニーズの変化：デジタル化志向が75%増加'
      ],
      'ターゲット戦略': [
        'プライマリ：30-45歳 年収600万円以上のビジネスパーソン',
        'セカンダリ：25-35歳 IT・金融業界の意思決定者',
        'ペルソナ：効率性重視、品質志向、ROI重視の特性'
      ],
      'マーケティング施策': [
        'デジタル広告：Google/Facebook広告で月間100万PV獲得',
        'コンテンツマーケティング：週2回のブログ＋月1回ウェビナー',
        'インフルエンサーマーケティング：業界専門家5名と連携'
      ],
      '実行・運用計画': [
        'Q1：ブランド認知向上キャンペーン（予算500万円）',
        'Q2-Q3：リード獲得最大化（目標1,000件/月）',
        'Q4：既存顧客ロイヤリティ向上施策'
      ],
      '効果測定・KPI': [
        'ブランド認知度：25%→40%向上目標',
        'リード獲得コスト：5,000円→3,500円に改善',
        'コンバージョン率：2.1%→3.5%向上'
      ]
    },
    colorPalettes: [
      ['#EC4899', '#BE185D', '#FDF2F8', '#374151'],
      ['#F59E0B', '#D97706', '#FFFBEB', '#1F2937']
    ]
  },
  '営業・セールス': {
    structures: [
      '現状・課題分析',
      'ソリューション提案',
      '導入効果・ROI',
      '実装スケジュール',
      '契約・次期ステップ'
    ],
    keyPointsTemplates: {
      '現状・課題分析': [
        '売上目標未達：四半期で計画比85%（1.5億円不足）',
        '営業効率低下：商談成約率12%→目標20%',
        'リードタイム長期化：受注まで平均45日かかる'
      ],
      'ソリューション提案': [
        'CRM・SFAシステム導入による営業プロセス標準化',
        'リード管理自動化でタイムリーなフォローアップ実現',
        'データ分析による確度の高い見込み客の特定'
      ],
      '導入効果・ROI': [
        '営業効率30%向上→年間売上1.8億円増加見込み',
        'リードタイム25%短縮（45日→34日）',
        'システム投資1,200万円→18ヶ月でペイバック'
      ],
      '実装スケジュール': [
        '月次1：システム選定・契約締結',
        '月次2-3：導入・設定・データ移行',
        '月次4：トレーニング・本格運用開始'
      ],
      '契約・次期ステップ': [
        'プロポーザル提出：2週間後（○月○日）',
        '最終決裁・契約締結：1ヶ月後を目標',
        'キックオフミーティング：契約後1週間以内'
      ]
    },
    colorPalettes: [
      ['#10B981', '#047857', '#F0FDF4', '#374151'],
      ['#8B5CF6', '#7C3AED', '#F5F3FF', '#1F2937']
    ]
  }
};

export const generatePresentation = (input: any): GeneratedPresentation => {
  const template = industryTemplates[input.industry as keyof typeof industryTemplates] || industryTemplates['IT・技術'];
  
  const slides = template.structures.map((title, index) => ({
    title,
    keyPoints: template.keyPointsTemplates?.[title] || [
      `${title}に関する具体的な数値・データ`,
      `${title}における課題解決のアプローチ`,
      `${title}で期待される成果・効果`
    ],
    notes: `${title}について説明する際は、具体的な数値やデータを示し、聞き手にとっての価値や影響を明確に伝えることが重要です。質問がある場合は適切に回答し、次のステップへの合意形成を図りましょう。`
  }));

  // Visual style mapping
  const visualStyleMap: { [key: string]: string } = {
    'ミニマル': 'ミニマル・シンプル',
    'モダン': 'モダン・スタイリッシュ',
    'クリエイティブ': 'クリエイティブ・カラフル',
    'ビジネス': 'ビジネス・プロフェッショナル',
    'アカデミック': 'アカデミック・学術的'
  };

  // Language-specific title formatting
  const languageMap: { [key: string]: string } = {
    '日本語': '向けプレゼンテーション',
    '英語': ' Presentation',
    'バイリンガル': ' Presentation / プレゼンテーション',
    '韓国語': ' 프레젠테이션',
    '中国語': ' 演示文稿'
  };

  const titleSuffix = languageMap[input.language] || '向けプレゼンテーション';
  const layoutStyle = visualStyleMap[input.visualStyle] || 'モダンフラット';

  return {
    title: `${input.theme} - ${input.audience}${titleSuffix}`,
    structure: template.structures,
    slides,
    designSuggestions: {
      colorPalette: template.colorPalettes[0],
      fontSuggestion: 'Noto Sans JP',
      layoutStyle: layoutStyle
    }
  };
};