import { useEffect } from 'react';

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = 'BrajProperty.in - Invest Right. Live Better. Earn Smarter.';
    };
  }, [title]);
}
