// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReduxProvider } from '@/store/providers';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body>
        <ReduxProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
            
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}