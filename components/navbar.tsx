import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-white">
      <div className="container mx-auto h-16 flex items-center">
        <Link href="/">
          <Image height="43" width="132" src="/logo.png" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
