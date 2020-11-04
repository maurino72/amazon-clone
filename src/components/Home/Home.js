import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_es_US_1x._CB418727898_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71kLrGElbOL.__BG0,0,0,0_FMpng_AC_UL600_SR399,600_.jpg"
            rating={5}
          />{" "}
          <Product
            id={2}
            title="AmazonBasics Nylon Braided Lightning to USB Cable - MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot (2-Pack) (Durability Rated 4,000 Bends)"
            price={21.99}
            image="https://m.media-amazon.com/images/I/61stA5Z9W0L._AC_UL320_.jpg"
            rating={4}
          />{" "}
        </div>{" "}
        <div className="home__row">
          <Product
            id={3}
            title="Fitbit Versa 2 Special Edition - Reloj inteligente de salud y aptitud física con frecuencia cardíaca, música, Alexa integrado, seguimiento de sueño y natación, FB507RGRW, Burdeos/Rosa Cobre, 1"
            price={179.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41tttgs4alL._AC_US160_.jpg"
            rating={1}
          />{" "}
          <Product
            id={4}
            title="WD WDBWLG0120HBK-NESN - Disco duro de sobremesa (12 TB, USB 3.0)"
            price={219.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31NBRkcO0ZL._AC_US160_.jpg"
            rating={4}
          />{" "}
          <Product
            id={5}
            title="Acer Aspire 5 Slim Laptop, 15.6 pulgadas Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4 GB DDR4, 128 GB SSD, teclado retroiluminado, Windows 10 en modo S, A515-43-R19L, Plata"
            price={359.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg"
            rating={4}
          />{" "}
        </div>{" "}
        <div className="home__row">
          <Product
            id={6}
            title='Hisense 40" Class H4 Series LED Roku Smart TV con compatibilidad Alexa (40H4F, modelo 2020)'
            price={221.99}
            image="https://m.media-amazon.com/images/I/71wq7qNoBLL._AC_UY218_.jpg"
            rating={4}
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Home;
