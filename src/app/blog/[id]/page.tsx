import BlogList from "@/app/components/BlogList";
import Link from "next/link";

export default function BlogDetails({ params }: { params: { id: number } }) {
  return (
    <>
      <div className="flex">
        <BlogList />
        <div className="flex flex-col">
          <h2>Blog {params.id}</h2>
          <Link href={`/blog/${params.id}/image`} className="text-blue-500">see image</Link>
        </div>
      </div>
    </>
  );
}
