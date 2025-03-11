import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 rounded-full p-2 cursor-pointer hover:bg-white transition-colors z-10"
      onClick={onClick}
    >
      <FaChevronLeft className="text-[#5071FE] text-2xl" />
    </div>
  );
};

export const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 rounded-full p-2 cursor-pointer hover:bg-white transition-colors z-10"
      onClick={onClick}
    >
      <FaChevronRight className="text-[#5071FE] text-2xl" />
    </div>
  );
};
