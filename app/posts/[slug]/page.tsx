import LikeButton from '../../../components/LikeButton';

// Mock de posts (mesmo da home)
const posts = [
  {
    slug: 'primeiro-post',
    title: 'Meu Primeiro Post',
    content: 'Esse é o conteúdo completo do meu primeiro post...',
    date: '2025-09-15',
    author: 'Robson Junior',
  },
  {
    slug: 'segundo-post',
    title: 'Segundo Post',
    content: 'Conteúdo completo do segundo post, aprendendo Next.js 15!',
    date: '2025-09-14',
    author: 'Robson Junior',
  },
];

interface PostPageProps {
  params: { slug: string };
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return <p>Post não encontrado.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">
        {post.date} | {post.author}
      </p>
      <p className="mb-6">{post.content}</p>
      <LikeButton />
    </div>
  );
}
