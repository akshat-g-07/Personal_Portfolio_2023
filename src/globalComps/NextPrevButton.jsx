import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const NextPrevButton = ({
  // eslint-disable-next-line react/prop-types
  scrollTo,
  // eslint-disable-next-line react/prop-types
  setScrollTo,
  // eslint-disable-next-line react/prop-types
  setScrollDown,
  // eslint-disable-next-line react/prop-types
  setTransitionTime,
}) => {
  const sectionArray = [
    "landing",
    "skills",
    "projects",
    "experience",
    "education",
    "hobby",
    "contact",
  ];
  const timeStamps = [0, 1.5, 2.5, 4.25, 5.5, 6.5, 8.5];
  return (
    <>
      <motion.div
        className="fixed flex flex-col justify-between h-screen right-8 z-10 text-stone-100 select-none text-lg py-8"
        animate={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ type: "spring", delay: 2.5 }}
      >
        <motion.div
          className={
            scrollTo === "landing"
              ? "flex items-center cursor-not-allowed scale-100 text-stone-500"
              : "flex items-center cursor-pointer scale-100 hover:font-semibold"
          }
          whileHover={
            scrollTo !== "landing" && {
              scale: 1.15,
              transition: { type: "spring" },
            }
          }
          whileTap={scrollTo !== "landing" && { scale: 0.8 }}
          onClick={() => {
            let indexVal = sectionArray.indexOf(scrollTo);
            if (indexVal === 0) return;
            setTransitionTime(timeStamps[indexVal] - timeStamps[indexVal - 1]);
            indexVal -= 1;
            setScrollTo("transition");
            setScrollDown(-1);
            setTimeout(() => {
              setScrollTo(sectionArray[indexVal]);
            }, 5);
          }}
        >
          <motion.div
            animate={{ x: [-10, 0, -10], y: [-1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowLeftIcon boxSize={12} />
          </motion.div>
          &nbsp;Previous
        </motion.div>
        <motion.div
          className={
            scrollTo === "contact"
              ? "flex items-center cursor-not-allowed scale-100 text-stone-500"
              : "flex items-center cursor-pointer scale-100 hover:font-semibold"
          }
          whileHover={
            scrollTo !== "contact" && {
              scale: 1.15,
              transition: { type: "spring" },
            }
          }
          whileTap={scrollTo !== "contact" && { scale: 0.8 }}
          onClick={() => {
            let indexVal = sectionArray.indexOf(scrollTo);
            if (indexVal === 6) return;
            indexVal += 1;
            setTransitionTime(timeStamps[indexVal] - timeStamps[indexVal - 1]);
            setScrollTo("transition");
            setScrollDown(1);
            setTimeout(() => {
              setScrollTo(sectionArray[indexVal]);
            }, 5);
          }}
        >
          Next&nbsp;
          <motion.div
            animate={{ x: [10, 0, 10], y: [-1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRightIcon boxSize={12} />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default NextPrevButton;
