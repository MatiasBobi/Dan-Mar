import kedudesktop from "../../assets/kedu-desktop.png";
import kedumobile2 from "../../assets/kedu-mobile2.png";
import FormSearch from "../formSearch/FormSearch";

export const Searchitem = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <section>
        <picture>
          <source
            srcSet={kedumobile2}
            media="(max-width: 300px)"
            alt="Logo de nuestra empresa"
          />
          <img
            src={kedudesktop}
            className="w-[300px]"
            alt="Logo de nuestra empresa"
          />
        </picture>
      </section>
      <section className="">
        <FormSearch />
      </section>
    </section>
  );
};
