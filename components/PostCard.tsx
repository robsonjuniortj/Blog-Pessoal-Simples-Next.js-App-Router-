// components/PostCard.tsx
import Link from 'next/link';

interface PostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function PostCard({ slug, title, excerpt, date }: PostCardProps) {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{excerpt}</p>
      <p className="text-sm text-gray-400 mb-2">{date}</p>
      <Link href={`/posts/${slug}`} className="text-blue-500 hover:underline">
        Ler mais
      </Link>
    </div>
  );
}
