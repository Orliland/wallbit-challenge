import GithubIcon from "../assets/github-mark-white.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import ThreadsIcon from "../assets/threads.svg";
import NavLink from "../components/NavLink";

const Header = () => {
  return (
    <header className="lg:col-span-full lg:row-span-1 py-2 flex justify-between items-center">
      <span className="text-neutral-300 font-bold text-xl py-3 px-6 rounded-full bg-black/20">
        Tienda Topo
      </span>
      <nav className="bg-black/20 rounded-full ">
        <ul className="flex">
          <NavLink
            link="https://www.threads.net/orliland/"
            icon={ThreadsIcon}
            alt="Visita mi perfil en Threads"
          />

          <NavLink
            link="https://www.linkedin.com/in/orliland/"
            icon={LinkedinIcon}
            alt="Visita mi perfil en LinkedIn"
          />

          <NavLink
            link="https://github.com/Orliland/wallbit-challenge/tree/main"
            icon={GithubIcon}
            alt="Visita el repositorio de este proyecto en GitHub"
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
