import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Providers from './providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GeniusGPT',
  description:
    'AI-driven chat and travel planning. Enhance conversations and streamline tours.',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
          <head>
             {/* Google Site Verification Meta Tag */}
             <meta
            name="google-site-verification"
            content="Ad5oRhq5pwfVW0oM9-PXEifw6K2TER1Z2u85LjlF_dY"
          /> 
      </head>
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
