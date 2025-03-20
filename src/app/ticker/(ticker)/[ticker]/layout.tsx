import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="h-full w-[100px] border-r border-blue-500"></div>

      <div className="size-full">{children}</div>
    </div>
  );
}
