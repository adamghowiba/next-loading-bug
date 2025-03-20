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
  'pear',
  'quince',
  'raspberry',
  'strawberry',
  'tangerine',
  'watermelon',
];

export default function Home() {
  return (
    <div className="size-full grid place-content-center p-12">
      <div className="flex flex-col">
        <h1 className="text-lg">Trying to understanding why I can&apos;t get loading spinners to work properly.</h1>
        <span className="text-foreground/80">
          `Loading.tsx` pages seem to break when used with ISR. Please, please... Help me.
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <h2>Try clicking any of these links</h2>

        <div className="flex flex-col gap-1.5 max-h-[400px] overflow-auto p-4">
          {RANDOM_WORDS.map(word => (
            <Link key={word} href={`/ticker/${word}`} className="underline" prefetch={false}>
              {word}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
