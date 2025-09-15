// app/about/page.tsx
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="bg-white shadow-md rounded p-6">
      <h1 className="text-3xl font-bold mb-4 text-black">Sobre Mim</h1>
      <p className="mb-4 text-black">
        Olá! Sou <strong>Robson Oliveira Gomes Junior</strong>, Desenvolvedor Full Stack Junior apaixonado por tecnologia e criatividade. Além de programar, gosto muito de expressar minhas ideias através do desenho, unindo lógica e arte em tudo que faço.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-black">Contato</h2>
      <ul className="mb-4 list-disc list-inside text-black">
        <li>Email: <a href="mailto:rnjrtj@gmail.com" className="text-blue-500 hover:underline">rnjrtj@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/robson-oliveira-gomes-junior-729600190/" target="_blank" className="text-blue-500 hover:underline">Robson Oliveira Gomes Junior</a></li>
        <li>GitHub: <a href="https://github.com/robsonjuniortj" target="_blank" className="text-blue-500 hover:underline">robsonjuniortj</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-black">Redes Sociais</h2>
      <div className="flex gap-4 text-xl">
        <a href="https://www.instagram.com/_robson_junior_tj/" target="_blank" className="text-pink-500"><FaInstagram /></a>
        <a href="https://www.tiktok.com/@_robson_junior_tj?is_from_webapp=1&sender_device=pc" target="_blank" className="text-black"><FaTiktok /></a>
        <a href="https://www.youtube.com/@_robson_junior_tj" target="_blank" className="text-red-600"><FaYoutube /></a>
      </div>
    </div>
  );
}
