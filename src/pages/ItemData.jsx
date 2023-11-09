import { Link } from "react-router-dom";
const ItemData = ({ title, imgLinks, attributes }) => {
  const firstImg = imgLinks[0].url;
  return (
    <section className="flex flex-col border p-2 border-blue-500 shadow-xl rounded-lg w-[300px] h-[450px]">
      <div>
        <img
          className="w-[300px] h-[300px] object-container"
          src={firstImg}
          alt=""
        />
      </div>
      <section className="flex flex-col text-center justify-around gapy-4 mt-2 h-[150px]">
        <h3 className="font-bold">{title}</h3>
        <Link
          className="w-[150px] h-[35px] text-[#ffffff] font-bold flex items-center justify-center rounded-lg m-auto bg-[#c78383]"
          to={"../details"}
          state={[
            { imagelinks: imgLinks },
            { title: title },
            { attributes: attributes },
          ]}
        >
          Ver mas
        </Link>
      </section>
    </section>
  );
};

export default ItemData;
