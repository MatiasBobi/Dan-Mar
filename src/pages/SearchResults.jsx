import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ItemData from "./ItemData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PropagateLoader from "react-spinners/PropagateLoader";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [resultItems, SetResultItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const prevSearchParams = useRef(null);
  const currentSearch = useRef(null);
  const navigate = useNavigate();
  const searchItems = async () => {
    const newSearch = searchParams.get("busqueda");
    console.log(currentSearch.current);
    try {
      if (prevSearchParams.current === newSearch) {
        console.log("ENTRE");
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      const res = await axios.get(
        `https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=${newSearch}`
      );
      SetResultItems(res.data.results);
      prevSearchParams.current = newSearch;
      currentSearch.current = res.data.results;
      setIsLoading(false);
    } catch (error) {
      navigate("../../404");
    }
  };
  useEffect(() => {
    searchItems();
  }, []);
  return (
    <section>
      {isLoading ? (
        <section className="flex flex-col h-screen gap-16 text-center justify-center items-center">
          <PropagateLoader
            className="ml-[-40px]"
            color="#36d7b7"
          ></PropagateLoader>
          <p className="text-3xl text-center">Buscando productos...</p>
        </section>
      ) : (
        <section className="flex flex-col justify-center items-center p-4 gap-4 h-screen pt-16 sm:grid sm:grid-cols-auto-fit-cols sm:gap-x-[150px] sm:w-[90%] [&.sectionLoading]:bg-red-400">
          {resultItems.length === 0 ? (
            <section className="flex flex-col  h-[100%] gap-4 text-center justify-center items-center">
              <FontAwesomeIcon icon={faXmark} className="text-8xl text-[red]" />
              <p>
                No se encontro lo que buscaba, para volver al inicio presione en
                el boton
              </p>
              <Link
                className="bg-green-400 w-32 h-12 flex items-center text-1xl font-bold justify-center rounded-lg"
                to={"/"}
              >
                Inicio
              </Link>
            </section>
          ) : (
            resultItems.map((data, key) => {
              return (
                <ItemData
                  key={key}
                  title={data.name}
                  imgLinks={data.pictures}
                  attributes={data.attributes}
                />
              );
            })
          )}
        </section>
      )}
    </section>
  );
};

/*


*/
