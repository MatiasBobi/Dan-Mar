import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCaretUp,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openNavMobile, setOpenNavMobile] = useState(false);

  return (
    <header>
      <nav className="h-[50px] w-full bg-[#2E0537] fixed z-20 sm:w-[100vw] sm:pl-4">
        <ul
          className={`flex flex-col gap-y-6 sm:gap-y-0 text-gray-50 pt-[80px] relative w-full z-[100] h-screen overflow-auto sm:overflow-visible [&>li]:p-4 [&>li]:pl-2 bg-slate-600 ${
            openNavMobile ? "left-0" : "left-[-100%] sm:left-0 "
          } transition-[left] ease-in-out duration-100 sm:min-h-[20px] sm:w-screen sm:p-0 sm:flex-row sm:bg-transparent  sm:[&>li]:cursor-pointer sm:h-[50px]`}
        >
          <li className="w-full sm:w-auto">
            <Link className="flex w-full h-[18px]" to={"/"}>
              Inicio
            </Link>
          </li>
          <li
            onClick={(e) => {
              setOpenCategory(!openCategory);
              e.stopPropagation;
            }}
            className="flex flex-col relative sm:basis-[100px] sm:ml-4 "
          >
            <div className="flex flex-col justify-around relative">
              <div className="flex justify-between sm:justify-between gap-x-1 w-[100px] sm:hover:text-gray-500 ">
                <span>Mis redes</span>
                {openCategory ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </div>
              <ul
                className={`${
                  openCategory
                    ? "h-[150px] transition-[height] ease-in-out duration-100 mt-4 "
                    : "h-0 transition-[height] duration-100 overflow-hidden "
                } flex-col w-full [&>li]:p-4 bg-slate-800  sm:bottom-200 sm:p-0  sm:absolute sm:w-[250px] sm:hover:[&>li]:bg-zinc-800 sm:mt-[200px] [$.>a]bg-green-400 `}
              >
                <li>
                  <Link
                    className="block w-full "
                    to={`https://matiasleonardobobi-portfolio.netlify.app`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to={`https://github.com/MatiasBobi`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    to={`linkedin.com/in/bobi-matias-leonardo-02b457247/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <section
          className="absolute text-gray-50 z-[333] top-0 right-0 mt-2 mr-4 text-2xl sm:hidden"
          onClick={() => setOpenNavMobile(!openNavMobile)}
        >
          {openNavMobile ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </section>
      </nav>
    </header>
  );
};
export default Navbar;
