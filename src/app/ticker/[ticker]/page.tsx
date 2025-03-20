import { Testing } from '@/components/TestingPage';
import Link from 'next/link';

export const dynamicParams = true;
export const revalidate = 30;

// Enabling either `generateStaticParams` or `force-static` below will remove the loading spinner
// export const dynamic = 'force-static'

export async function generateStaticParams() {
  return [];
}

const fakePromise = async () => {
  await new Promise(res => {
    setTimeout(() => {
      res('Success');
    }, 1000 * 10);
  });
};

export default async function DynamicLoading(params: { params: Promise<{ ticker: string }> }) {
  const { ticker } = await params.params;
  const lastLoad = new Date().toLocaleTimeString();

  await fakePromise();

  return (
    <div className=" gap-4 size-full grid place-content-center p-12">
      <div className="flex flex-col gap-2">
        <span className="text-base">
          Dynamic page: <b>{ticker}</b>
        </span>

        <div className="flex flex-col gap-1">
          <span>Last load time: {lastLoad}</span>
        </div>

        <Link href="/" prefetch={false}>
          Back Home
        </Link>

        <Testing />
      </div>
    </div>
  );
}
