import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Eduardo from "./assets/eduardomenin.svg";

function AboutmeSection() {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between py-10 lg:py-[110px] bg-[#232323] text-[#EBFFE7] px-6 md:px-10 lg:px-[120px]">
      <motion.div
        className="flex flex-col items-center lg:items-start w-full lg:w-1/2 px-[30px] xl:px-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-xl md:text-3xl xl:text-3xl font-semibold mb-8 :mb-[100px] text-center lg:text-left xl:pl-[70px]">
          {t("welcomePortfolio")}
        </h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-justify xl:pl-[70px]">
          {t("aboutMeParagraph")}
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={Eduardo}
          alt="Eduardo Menin"
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[430px] lg:h-[430px] xl:w-[500px] xl:h-[500px] "
        />
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] lg:h-[3px] bg-[#EBFFE7]"></div>
    </div>
  );
}

export default AboutmeSection;