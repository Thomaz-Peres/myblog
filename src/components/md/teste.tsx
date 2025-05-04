'use client';

import { useState } from 'react';

export const CodeWrapper = ({ children }: { children: JSX.Element }) => {
  const [wrap, setWrap] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setWrap(!wrap)}
        className="mb-2 px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        {wrap ? 'Disable Wrap' : 'Enable Wrap'}
      </button>
      <pre
        className={`p-4 bg-gray-900 text-white text-sm rounded overflow-x-auto ${
          wrap ? 'whitespace-pre-wrap break-words' : 'whitespace-pre'
        }`}
      >
        {children}
      </pre>
    </div>
  );
}
