import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'BuildMore AI — The Complete Civil Engineering Intelligence Platform',
    template: '%s · BuildMore AI',
  },
  description: '34 integrated AI modules, 150+ sub-systems, custom sensors and a proprietary language model — automating, monitoring and predicting the entire civil engineering lifecycle. Built Indian-first.',
  icons: { icon: '/icon.svg' },
};

export const viewport = {
  themeColor: '#f7f8fb',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
