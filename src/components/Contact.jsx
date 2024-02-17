import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsappSquare, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="pt-[5rem] max-w-[1150px] mx-auto px-6 md:px-0">
      <div>
        <h1 className="text-xs md:text-sm uppercase font-bold text-[#A96A68]">
          Contact
        </h1>
        <p className="font-semibold md:text-lg">
          Have A Questions? Don't be Shy to Contact me
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 rounded-md gap-8 max-w-[800px] mx-auto shadow-lg p-6">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-center text-xs md:text-sm">
            Contact Me With :
          </h1>
          <div className="flex flex-col font-light gap-2 h-full justify-evenly">
            <a
              href="mailto:anggadek857@gmail.com"
              target="blank"
              className="flex hover:text-blue-600 items-center gap-4 text-xs md:text-sm"
            >
              <MdOutlineEmail className="text-[#0000FF]" size={20} />
              anggadek857@gmail.com
            </a>
            <a
              href="https://whatsapp.com"
              target="blank"
              className="flex hover:text-blue-600 items-center gap-4 text-xs md:text-sm"
            >
              <FaWhatsappSquare className="text-[#25D366]" size={20} />
              082236903868
            </a>
            <a
              href="https://web.telegram.org"
              target="blank"
              className="flex hover:text-blue-600 items-center gap-4 text-xs md:text-sm"
            >
              <FaTelegram className="text-[#0088CC]" size={20} />
              082236903868
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-center text-xs md:text-sm">
            Find Me At 📍
          </h1>
          <div className="flex flex-col font-light gap-2">
            <a
              href="https://www.google.com/maps/place/8%C2%B023'11.5%22S+115%C2%B037'02.2%22E/@-8.3865824,115.6146392,18.28z/data=!4m12!1m7!3m6!1s0x2dd2075625925fbb:0x2cf42de7b1d69b5f!2sBanjar+Ngis+Kaler+Tribuana!8m2!3d-8.3872287!4d115.6163215!16s%2Fg%2F11gh_kgllw!3m3!8m2!3d-8.38654!4d115.617267?entry=ttu"
              target="blank"
              className="flex hover:text-blue-600 text-justify items-center gap-4 text-xs md:text-sm"
            >
              📍 Br Dinas Ngis Kaler, Tribuana Village, Abang, Karangasem, Bali.
            </a>
            <a
              href="https://www.google.com/maps/search/Jl.+Pratu+Ginten+I+Gg.+Delima+No.9,+Lingkungan+Sangket,+Kec.+Sukasada,+Kabupaten+Buleleng,+Bali+81161/@-8.1489406,115.1057337,17.36z?entry=ttu"
              target="blank"
              className="flex text-justify hover:text-blue-600 items-center gap-4 text-xs md:text-sm"
            >
              📍 Pratu Ginten I Street, Delima Alley No.9, Sangket Area,
              Sukasada District, Buleleng Regency, Bali 81161.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
