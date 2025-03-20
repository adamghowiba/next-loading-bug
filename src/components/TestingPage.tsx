'use client';

import Link from 'next/link';

const RANDOM_WORDS = [
  'apple',
  'banana',
  'cherry',
  'date',
  'elderberry',
  'fig',
  'grape',
  'honeydew',
  'kiwi',
  'lemon',
  'mango',
  'nectarine',
  'orange',
  'papaya',
  'quince',
  'raspberry',
  'strawberry',
  'tangerine',
  'watermelon',
];

export const Testing = () => {
  return (
    <div className="flex flex-col gap-4">
      Some testing component
      <div className="flex flex-col gap-2">
        {RANDOM_WORDS.map((word, index) => (
          <Link href={`/ticker/${word}`} prefetch={false} key={index}>
            {word}
          </Link>
        ))}
      </div>
    </div>
  );
};
