import Carousel from "react-bootstrap/Carousel";
import "./carousal.css";

function Carousel1() {
  return (
    <Carousel className="ms-5 ps-4 mt-3">
      <Carousel.Item>
        <img src="/img/slide2.webp" alt="" style={{ width: "95%" }} />
        <Carousel.Caption>
          <h2 id="head">Geetha-Govindam </h2>
          <p id="head1">
            Geetha Govindam is a 2018 Indian Telugu-language romantic comedy
            film written and directed by Parasuram.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/slide3.webp" alt="" style={{ width: "95%" }} />
        <Carousel.Caption>
          <h3 id="head">Migration</h3>
          <p id="head1">
            Migration is a 2023 American animated adventure comedy film produced
            by Universal Pictures and Illumination, and distributed by
            Universal.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/slide1.webp" alt="" style={{ width: "95%" }} />
        <Carousel.Caption>
          <h3 id="head">Kaatera</h3>
          <p id="head1">
            Kaatera is a 2023 Indian Kannada-language action drama film directed
            by Tharun Sudhir and produced by Rockline Venkatesh
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/slide4.webp" alt="" style={{ width: "95%" }} />
        <Carousel.Caption>
          <h3 id="head">Goast Movie</h3>
          <p id="head1">
            Ghost is a 2023 Indian Kannada-language action heist thriller film
            directed by M. G. Srinivas and produced by Sandesh Nagaraj under
            Sandesh Production.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
