export const dynamic = 'force-dynamic';

export default async function Blog() {
  const date = new Date();

  const response = await fetch('http://localhost:5010/fake');

  const test = await response.text();

  return (
    <div>
      <div>Blog: {date.toLocaleTimeString()}</div>
      <span>Test: {test}</span>
    </div>
  );
}
