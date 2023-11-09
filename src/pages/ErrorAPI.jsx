import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ErrorAPI = () => {
  return (
    <section className="flex flex-col h-screen gap-16 text-center justify-center items-center">
      <FontAwesomeIcon icon={faXmark} className="text-8xl text-red-600" />
      <p className="text-2xl text-center">
        Ocurrio un error al intentar conectarse con la API.
      </p>
    </section>
  );
};

export default ErrorAPI;
