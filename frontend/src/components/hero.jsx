import spaceshipMobile from "../assets/spaceship-mobile.jpg";
import spaceshipDesktop from "../assets/spaceship-desktop.jpg";
import BouncingDownArrow from "./ui-components/bouncing-down-arrow";
import Headline from "./ui-components/headline";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100vh] border-b-[1px] border-b-gray-200">
      <picture>
        <source media="(max-width: 639px)" srcSet={spaceshipMobile} />
        <source media="(min-width: 640px)" srcSet={spaceshipDesktop} />
        <img src={spaceshipDesktop} alt="spaceship" />
      </picture>
      <div className="absolute top-0 p-5 w-full h-full bg-darkSpace/50">
        <Headline />
      </div>
      <BouncingDownArrow />
    </section>
  );
}
