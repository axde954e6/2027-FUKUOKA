import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '福岡 2027｜九州春日自駕旅行',
  description: '2027 年 3 月，福岡、門司港、別府、由布院與糸島的九日行程模板。',
  openGraph: {
    title: '福岡 2027｜九州春日自駕旅行',
    description: '2027/03/20–03/28｜福岡、門司港、別府、由布院與糸島的九日行程。',
    images: [{ url: 'https://axde954e6.github.io/2027-FUKUOKA/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '福岡 2027｜九州春日自駕旅行',
    description: '2027/03/20–03/28｜福岡、門司港、別府、由布院與糸島的九日行程。',
    images: ['https://axde954e6.github.io/2027-FUKUOKA/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
