import BlogList from "@/app/components/BlogList";
import Image from "next/image";

export default function page() {
  const imageURL = `https://picsum.photos/200`;

  return (
    <>
      <div className="flex">
        <BlogList />
        <Image src={imageURL} alt="random image" width={200} height={200} />
      </div>
    </>
  );
}
