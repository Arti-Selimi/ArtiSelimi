'use client';

import { useEffect } from 'react';

export default function ClientHydrationSuppressor() {
  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' &&
        args[0].includes('Warning: Expected server HTML to contain a matching') ||
        args[0].includes('Text content does not match server-rendered HTML')
      ) {
        return;
      }
      originalError(...args);
    };
  }, []);

  return null; 
}
