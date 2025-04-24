import { use } from "react";
import { getBlogs } from "../lib/blogs";
import Image from "next/image";
import Link from "next/link";

async function getInitialBlogs() {
  const blogs = getBlogs();
  return blogs;
}

const shortify = (text: string, maxLength = 60) => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + " ...";
};

const Page = () => {
  const blogs = use(getInitialBlogs());

  return (
    <>
      <header className="sticky z-20 top-0 shadow bg-white">
        <div className="mx-auto py-2 max-w-2xl text-left lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 px-4 md:px-0  sm:text-5xl">
            Shubham Reacts
          </h1>
          <p className="mt-2 max-w-7xl hidden lg:block text-left text-sm sm:text-lg lg:leading-tight text-gray-600 ">
            Dive into the convergence of tech and culture—unmasking digital
            revolutions, dispelling hacker myths, probing AI ethics, shattering
            conventions with pointed analysis, sly wit, and boundless curiosity
          </p>
        </div>
      </header>
      <main className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group"
            >
              <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                  fill
                  src={blog.coverImage}
                  alt={""}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{blog.title}</h3>
              <p className="mt-1 text-md font-medium text-gray-900">
                {shortify(blog.description, 100)}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Page;
