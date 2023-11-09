import { useLocation } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { useMemo, useState } from "react";
import TableItemDesc from "../containers/TableItemDesc/TableItemDesc";

const ItemDesc = () => {
  const [imageNumber, SetImageNumber] = useState(0);
  let { state } = useLocation();
  const images = useMemo(
    () => state[0].imagelinks.map((value) => value.url),
    []
  );
  const title = state[1].title;
  const attributes = state[2].attributes;

  return (
    <section className="pt-16 pb-8 h-[100%]">
      <section>
        <div className="w-full h-[300px] flex justify-center">
          <img
            src={images[imageNumber]}
            className="min-h-[250px] h-[250px]"
            alt={title}
          />
        </div>
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={true}
            className="mySwiper"
          >
            {images.map((value, index) => {
              return (
                <SwiperSlide key={index} onClick={() => SetImageNumber(index)}>
                  <img src={value} alt={title} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section>
        <h1 className="text-center">{title}</h1>
        <TableItemDesc attributes={attributes} />
      </section>
    </section>
  );
};

export default ItemDesc;
