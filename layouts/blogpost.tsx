import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import BlogMenu from "@/components/BlogMenu";

export default function DefaultLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="bg-gray-800">
        <div className="max-w-[1280px] mx-auto grid grid-cols-6 md:gap-8 md:my-8 md:my-10">
          <div className="col-span-8 md:col-span-1">
            <BlogMenu />
          </div>
          <article className="article col-span-8 md:col-span-5 px-8 md:px-36 py-8 md:py-12 text-gray-100 lg:rounded-md bg-gray-900">
            <div className="w-full mx-auto space-y-4 text-center">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                {title}
              </h1>
            </div>
            <div className="dark:text-gray-800 pt-2 md:pt-5">{children}</div>
          </article>
        </div>
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://github.com/KorRodrigues"
          title="KorRodrigues github"
        >
          <span className="text-default-600">Made by</span>
          <p className="text-primary">Kor Rodrigues</p>
        </Link>
      </footer>
    </div>
  );
}
