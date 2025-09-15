import PostCard from "../components/PostCard";

// Mock de posts
const posts = [
  {
    slug: "primeiro-post",
    title: "Meu Primeiro Post",
    excerpt: "Esse é o resumo do meu primeiro post no blog...",
    date: "2025-09-15",
  },
  {
    slug: "segundo-post",
    title: "Segundo Post",
    excerpt: "Resumo do segundo post, aprendendo Next.js 15!",
    date: "2025-09-14",
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
