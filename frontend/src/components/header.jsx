import { useEffect, useState } from "react";

export default function Header() {
  let [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    let expectedScrollPosition = (window.innerHeight / 100) * 25;

    document.addEventListener("scroll", () => {
      if (window.scrollY >= expectedScrollPosition) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }
    });
  });

  return (
    <header
      className={`fixed z-50 w-full p-2 sm:p-3 border-b border-b-gray-700 bg-darkSpace/90 transition ease-linear duration-700 ${
        headerVisible == true ? "translate-y-0" : "-translate-y-16"
      }`}
    >
      <p className="flex justify-center text-base sm:text-lg font-bold text-white">
        SpaceX<p className="font-thin">Cores</p>
      </p>
    </header>
  );
}
