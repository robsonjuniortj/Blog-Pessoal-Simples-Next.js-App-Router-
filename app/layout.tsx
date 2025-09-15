// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

export const metadata = {
  title: 'Blog Pessoal Robson Oliveira Gomes Junior',
  description: 'Blog minimalista com Next.js 15',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900 min-h-screen flex flex-col font-sans">
        {/* Navbar */}
        <header className="bg-[#292929]">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">
              Blog Pessoal Robson Oliveira Gomes Junior
            </h1>
            <nav className="space-x-4">
              <Link href="/" className="text-white hover:text-blue-400">Home</Link>
              <Link href="/about" className="text-white hover:text-blue-400">Sobre</Link>
            </nav>
          </div>
        </header>

        {/* Conteúdo */}
        <main className="flex-1 container mx-auto px-4 py-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#292929] py-6 text-center text-white">
          <p className="mb-2">Desenvolvido por Robson Oliveira Gomes Junior</p>
          <div className="flex justify-center gap-4 text-xl">
            <a href="https://www.linkedin.com/in/robson-oliveira-gomes-junior-729600190/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/robsonjuniortj" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/_robson_junior_tj/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@_robson_junior_tj?is_from_webapp=1&sender_device=pc" target="_blank">
              <FaTiktok />
            </a>
            <a href="https://www.youtube.com/@_robson_junior_tj" target="_blank">
              <FaYoutube />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
