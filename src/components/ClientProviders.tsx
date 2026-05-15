'use client';

import { ReactLenis } from '@/utils/lenis';
import { Toaster } from 'sonner';

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root>
      <Toaster position="top-center" />
      {children}
    </ReactLenis>
  );
}
