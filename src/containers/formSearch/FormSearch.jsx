import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FormSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`items/search?busqueda=${searchInput}`);
  };
  return (
    <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
      <label className="flex-col flex relative" htmlFor="searchbar">
        <span className=" text-center text-[1.7rem] text-gray-50">
          Buscar un producto
        </span>
        <input
          id="searchbar"
          placeholder="buscar..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="placeholder-red-800 w-[300px] py-[20px] text-center rounded-[5px] mt-5"
          type="text"
        />
      </label>
      <button className="flex items-center rounded-[5px] px-16 py-4 bg-red-500">
        Buscar
      </button>
    </form>
  );
};

export default FormSearch;
