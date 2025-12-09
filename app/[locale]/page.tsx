'use client';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { useTranslations } from 'next-intl';
import { useDispatch,useSelector } from 'react-redux';
export default function HomePage() {
/*   const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch(); */
  const t = useTranslations();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>{t('hello')}</h1>
        {/*   <p>{counter.value }</p> */}
        <LocaleSwitcher />
      </main>
    </div>
  );
}
