import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="my-5">
      <hr />

      <h1 className="text-center font-semibold text-3xl">Custom PC Building</h1>

      <div className="flex justify-center items-center mt-3">
        <BsFacebook className="mr-3 hover:text-[#52619a]" size={24} />
        <BsInstagram className="mr-3 hover:text-[#52619a]" size={24} />
        <AiFillTwitterCircle className="mr-3 hover:text-[#52619a]" size={24} />
        <AiFillLinkedin className="mr-3 hover:text-[#52619a]" size={24} />
      </div>

      <h1 className="text-center mt-2">
        Building PC ©2023 Created by Dipta Sikder
      </h1>
    </footer>
  );
};

export default Footer;
