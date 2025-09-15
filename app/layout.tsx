import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Blog Pessoal",
  description: "Blog minimalista com Next.js 15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Blog Pessoal</h1>
            <nav className="space-x-4">
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-500">
                Sobre
              </Link>
            </nav>
          </div>
        </header>

        {/* Conteúdo */}
        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

        {/* Footer */}
        <footer className="bg-white shadow-inner py-4 mt-auto text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Blog Pessoal
        </footer>
      </body>
    </html>
  );
}
