import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "./logo.png";

const menuData = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Contact Us", path: "/contact" },
];

const Header = () => {
  const { data: session } = useSession();
  const pathUrl = usePathname();


  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };


  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const { theme, setTheme } = useTheme();

  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "shadow-nav fixed z-[999] border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-dark/10"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link href="/" className={`navbar-logo block w-full ${sticky ? "py-2" : "py-5"}`}>
                <Image src={logo} alt="Logo" width={60} height={20} className="header-logo w-full dark:hidden" />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? " top-[7px] rotate-45" : " "} ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${pathUrl === "/" && sticky ? "bg-dark dark:bg-white" : "bg-white"}`} />
                  <span className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? "opacity-0 " : " "} ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${pathUrl === "/" && sticky ? "bg-dark dark:bg-white" : "bg-white"}`} />
                  <span className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? " top-[-8px] -rotate-45" : " "} ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${pathUrl === "/" && sticky ? "bg-dark dark:bg-white" : "bg-white"}`} />
                </button>
                <nav id="navbarCollapse" className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${navbarOpen ? "visibility top-full opacity-100" : "invisible top-[120%] opacity-0"}`}>
                  <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        <Link onClick={navbarToggleHandler} scroll={false} href={menuItem.path} className={`ud-menu-scroll flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${pathUrl === menuItem?.path ? (sticky ? "text-black" : "text-white") : (sticky ? "text-white" : "text-dark dark:text-white dark:group-hover:text-primary lg:text-white")} ${pathUrl === menuItem?.path && sticky && "!text-white"}`}>
                          {menuItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="hidden items-center justify-end pr-16 sm:flex lg:pr-0">
                {/* theme toggler */}
                <button aria-label="theme toggler" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white">
                  <span>
                    <svg viewBox="0 0 16 16" className="hidden h-[22px] w-[22px] fill-current dark:block">
                      {/* Remove the 'd' attribute here */}
                      <path />
                    </svg>
                    <svg viewBox="0 0 23 23" className={`h-[30px] w-[30px] fill-current text-dark dark:hidden ${!sticky && pathUrl === "/" && "text-white"}`}>
                      <g clipPath="url(#clip0_40_125)">
                        <path />
                      </g>
                    </svg>
                  </span>
                </button>
                {session?.user ? (
                  <>
                    <p className={`loginBtn px-7 py-3 text-base font-medium ${!sticky && pathUrl === "/" ? "text-white" : "text-dark"}`}>
                      {session?.user?.name}
                    </p>
                    {pathUrl !== "/" || sticky ? (
                      <button onClick={() => signOut()} className="signUpBtn rounded-lg bg-primary bg-opacity-100 px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-20 hover:text-dark">
                        Sign Out
                      </button>
                    ) : (
                      <button onClick={() => signOut()} className="signUpBtn rounded-lg bg-white bg-opacity-20 px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark">
                        Sign Out
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    {pathUrl !== "/" ? (
                      <>
                        <Link href="/signin" className="px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white">
                          Sign In
                        </Link>
                        <Link href="/signup" className="rounded-lg bg-primary px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-primary/90 dark:bg-white/10 dark:hover:bg-white/20">
                          Sign Up
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link href="/signin" className={`px-7 py-3 text-base font-medium hover:opacity-70 ${sticky ? "text-dark dark:text-white" : "text-white"}`}>
                          Sign In
                        </Link>
                        <Link href="/signup" className={`rounded-lg px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-90 ${sticky ? "bg-primary" : "bg-white bg-opacity-20 hover:bg-white hover:text-dark"}`}>
                          Sign Up
                        </Link>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
