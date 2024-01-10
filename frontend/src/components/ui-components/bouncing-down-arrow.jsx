import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function BouncingDownArrow() {
  let [arrowVisible, setArrowVisible] = useState(true);

  useEffect(() => {
    let expectedScrollPosition = (window.innerHeight / 100) * 30;

    document.addEventListener("scroll", () => {
      if (window.scrollY >= expectedScrollPosition) {
        setArrowVisible(false);
      } else {
        setArrowVisible(true);
      }
    });
  });

  const scrollDown = () => {
    const coresGallery = document.getElementById("cores-gallery");

    coresGallery.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className={`fixed inline-flex bottom-0 inset-x-0 z-50 text-6xl justify-center text-white animate-bounce ease-linear duration-200 ${
        !arrowVisible ? "opacity-0" : "opacity-100"
      }`}
    >
      {arrowVisible ? (
        <button onClick={scrollDown}>
          <FiChevronDown />
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
