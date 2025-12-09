'use client';

import { usePathname, useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); 

  const handleChangeLocale = (newLocale: string) => {
 
    const segments = pathname.split('/');
    if (routing.locales.includes(segments[1])) {
      segments[1] = newLocale; 
    } else {
      segments.unshift('', newLocale); 
    }

    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      {routing.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleChangeLocale(locale)}
          className="px-4 py-2 border rounded"
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
