import Link from "next/link";

export default function BlogList() {
  type BlogListItem = number;
  const BlogList: BlogListItem[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div>
        <ul>
          {BlogList.map((blogNumber) => (
            <li key={blogNumber}>
              <Link href={`/blog/${blogNumber}`} className="text-blue-500">Blog {blogNumber}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
