import { Testing } from '@/components/TestingPage';

// export const dynamicParams = true;
export const revalidate = 30;
export const dynamic = 'force-static'

// export async function generateStaticParams() {
//   return [];
// }

// const fakePromise = async () => {
//   await new Promise(res => {
//     setTimeout(() => {
//       res('Success');
//     }, 1000 * 10);
//   });
// };

const fakeFetch = async () => {
  const response = await fetch('http://localhost:5010/fake');

  return await response.text();
};

export default async function DynamicLoading(params: { params: Promise<{ ticker: string }> }) {
  const { ticker } = await params.params;
  const lastLoad = new Date().toLocaleTimeString();

  await fakeFetch();

  return (
    <div className="flex flex-col gap-4">
      <span className="text-base">Dynamic page load {ticker}</span>

      <div className="flex flex-col gap-1">
        <span>Last load time: {lastLoad}</span>
      </div>

      <Testing />
    </div>
  );
}
