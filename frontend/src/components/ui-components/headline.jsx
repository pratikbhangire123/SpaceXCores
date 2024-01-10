import { useEffect, useState } from "react";

export default function Headline() {
  let [headlineVisible, setHeadlineVisible] = useState(true);

  useEffect(() => {
    let expectedScrollPosition = (window.innerHeight / 100) * 15;

    document.addEventListener("scroll", () => {
      if (window.scrollY >= expectedScrollPosition) {
        setHeadlineVisible(false);
      } else {
        setHeadlineVisible(true);
      }
    });
  });

  return (
    <h1
      className={`mt-28 text-center text-2xl leading-6 md:text-[2.5rem] md:leading-10 lg:text-5xl text-white transition ease-linear duration-[900ms] ${
        headlineVisible == true ? "translate-y-0" : "-translate-y-28"
      }`}
    >
      IT&apos;S TIME TO EXPLORE <br />
      THE <span className="italic font-black">SPACE</span>
    </h1>
  );
}
