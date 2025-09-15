// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="bg-white shadow-md rounded p-6">
      <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
      <p className="mb-4">
        Olá! Meu nome é Robson Junior e este é meu blog pessoal. Aqui compartilho minhas
        experiências, aprendizados e projetos relacionados a desenvolvimento web com Next.js.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contato</h2>
      <ul className="mb-4 list-disc list-inside">
        <li>Email: <a href="mailto:robson@example.com" className="text-blue-500 hover:underline">robson@example.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/robson-oliveira-gomes-junior/" target="_blank" className="text-blue-500 hover:underline">Meu LinkedIn</a></li>
        <li>GitHub: <a href="https://github.com/SEU_USUARIO" target="_blank" className="text-blue-500 hover:underline">Meu GitHub</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Redes Sociais</h2>
      <ul className="list-disc list-inside">
        <li><a href="https://twitter.com/SEU_USUARIO" target="_blank" className="text-blue-500 hover:underline">Twitter</a></li>
        <li><a href="https://instagram.com/SEU_USUARIO" target="_blank" className="text-blue-500 hover:underline">Instagram</a></li>
      </ul>
    </div>
  );
}
