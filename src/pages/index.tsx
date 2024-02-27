import Image from 'next/image';
import {
  HomeContainer,
  Product,
} from '../styles/pages/home';

import { useKeenSlider } from 'keen-slider/react';

import tshirt from '../assets/camisetas/tshirt01.png';

import 'keen-slider/keen-slider.min.css';

export default function Home(props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image
          src={tshirt}
          width={520}
          height={480}
          alt=""
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image
          src={tshirt}
          width={520}
          height={480}
          alt=""
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image
          src={tshirt}
          width={520}
          height={480}
          alt=""
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image
          src={tshirt}
          width={520}
          height={480}
          alt=""
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
