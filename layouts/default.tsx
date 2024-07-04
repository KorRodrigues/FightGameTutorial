import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main>{children}</main>
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
