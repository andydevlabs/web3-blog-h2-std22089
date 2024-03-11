import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link href="/blog" className="text-blue-500">Blog List</Link>
    </>
  );
}
