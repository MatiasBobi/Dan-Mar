// import react router modules
import { useLocation } from "react-router-dom";

// Import react modules
import { useMemo, useState } from "react";
import TableItemDesc from "../containers/TableItemDesc/TableItemDesc";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ItemDesc = () => {
  const [imageNumber, SetImageNumber] = useState(0);
  const prod = useLocation();
  const state = prod.state;
  let images, title, attributes;
  // Verifica si state está presente antes de acceder a sus propiedades
  if (state !== null) {
    console.log("ENTRE A LOS DATOS");
    images = useMemo(
      () => state[0].imagelinks?.map((value) => value.url),
      [state]
    );
    title = state[1].title;
    attributes = state[2].attributes;
  }

  return (
    <section className="pt-16 pb-8 h-[100%]">
      {state === null ? (
        <section className=" flex flex-col justify-center text-center mt-[-16px]  h-screen">
          <FontAwesomeIcon className="text-8xl text-red-700" icon={faXmark} />
          <p>
            No se encontraron datos a cargar, por favor vuelva al inicio y
            realice una búsqueda correcta.
          </p>
        </section>
      ) : (
        <section>
          <section className="sm:flex sm:h-[600px]">
            <div className="h-[300px] sm:w-[50%]  flex justify-center">
              <img
                src={errorState ? "" : images[imageNumber]}
                className="min-h-[250px] h-[250px] sm:h-[500px]"
                alt={title}
              />
            </div>
            <div className="w-full sm:w-[50%] sm:flex sm:flex-col sm:justify-center  sm:gap-y-[64px]">
              <Swiper
                slidesPerView={4}
                spaceBetween={50}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
                navigation={true}
                className="mySwiper w-[100%] h-[300px]"
              >
                {images.map((value, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      onClick={() => SetImageNumber(index)}
                    >
                      <img
                        className="h-[300px] w-[300px] object-contain"
                        src={value}
                        alt={title}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <h1 className="text-center hidden sm:flex">{title}</h1>
            </div>
          </section>
          <section className="sm:pt-4">
            <h1 className="text-center sm:hidden">{title}</h1>
            <TableItemDesc attributes={attributes} />
          </section>
        </section>
      )}
    </section>
  );
};

export default ItemDesc;
