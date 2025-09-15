import PostCard from "../components/PostCard";

// Mock de posts
const posts = [
  {
    slug: 'primeiro-post',
    title: 'Meu Primeiro Post',
    excerpt: 'Olá! Sou Robson Oliveira Gomes Junior, Desenvolvedor Full Stack...',
    date: '2025-09-15',
  },
  {
    slug: 'segundo-post',
    title: 'Segundo Post',
    excerpt: 'Hobbie: Desenho e artes visuais...',
    date: '2025-09-14',
  },
];


export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Últimos Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  );
}
