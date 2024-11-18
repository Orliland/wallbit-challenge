const NavLink = ({ link, icon, alt }) => {
  return (
    <li>
      <a
        href={link}
        target="_blank"
        className="block p-2 hover:bg-white/30 hover:cursor-pointer rounded-full"
      >
        <img className="w-6 h-6" src={icon} alt={alt} />
      </a>
    </li>
  );
};

export default NavLink;
