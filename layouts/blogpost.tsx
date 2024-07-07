import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

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
        <article className="max-w-6xl my-8 md:my-10 px-8 md:px-36 py-8 md:py-12 mx-auto space-y-12 text-gray-100 lg:rounded-md bg-gray-900">
          <div className="w-full mx-auto space-y-4 text-center">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {title}
            </h1>
          </div>
          <div className="dark:text-gray-800 article pt-2 md:pt-5">
            {children}
          </div>
        </article>
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
