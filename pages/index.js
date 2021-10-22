import LayoutComp from "../components/Layout/LayoutComp.js";
import { Button } from "antd";
import { Input, Space } from "antd";
import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const { Search } = Input;

const Banner = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(22, 22, 22, 0.25) 0%,
      rgba(22, 22, 22, 0.25) 100%
    ),
    url("/axie_fondo.PNG");
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  top: 0;
  position: absolute;
  left: 0;
  width: 100%;
  h1 {
    text-align: center;
    max-width: 715px;
    margin: 0 auto;
    font-size: 5rem;
    display: flex;
    align-items: center;
    color: white;
    height: 100%;
  }
`;
const MargenTop = styled.div`
  margin-top: 55rem;
`;
const ContenedorHome = styled.div`
  h1 {
    color: var(--main_pi);
    text-align: center;
  }
  img {
    width: 160px;
    height: 160px;
  }
  .Listado {
    display: flex;
    justify-content: space-evenly;
  }
  .userCard {
    display: grid;
    text-align: center;
    p {
      margin: 10px 0 !important;
      font-weight: bold;
    }
  }
`;

const Nosotros = styled.div`
  text-align: justify;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0rem;
  max-width: 950px;
  margin: 4rem auto;
  margin-bottom: 8rem;

  .imagen {
    display: flex;
    align-items: center;
    /* align-content: center; */
    justify-content: center;
  }
`;
const Caracteristicas = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 3rem;
  margin: 4rem 0;
  margin-bottom: 8rem;
  img {
    height: 140px;
    width: 140px;
    margin-bottom: 1rem;
  }

  .feature{
    transition:.2s;
    :hover {
      transform: scale(1.03);
    }
  }
`;

const Fundador = styled.div``;

export default function Home() {
  const [filtroTexto, setFiltroTexto] = useState();

  const handleChange = (e) => {
    setFiltroTexto(e.target.value);
  };
  console.log(filtroTexto);
  return (
    <LayoutComp>
      <Banner>
        <h1>El cambio de paradigma depende de vos.</h1>
      </Banner>
      <MargenTop />
      <ContenedorHome>
        <Nosotros>
          <div className="imagen">
            <img src="/goal.png" />
          </div>
          <div>
            <h1>Misión</h1>
            <h3>
              Crear una comunidad nft y demás. SER LA MEJOR ACADEMIA DE AXIE EN
              HABLA HISPANA LOCO NO ME IMPORTA NADAAAAAAA
            </h3>
          </div>
        </Nosotros>
        <h1>¿Porqué elegirnos?</h1>
        <Caracteristicas>
          <div className="feature">
            <img src="/top-rated.png" />
            <h3>Alto rendimiento</h3>
            <p>
              Ayuda durante todo el proceso de formacion como becado.
              Disposicion de profesores
            </p>
          </div>
          <div className="feature">
            <img src="/trophy.png" />
            <h3>Torneos</h3>
            <p>
              Ayuda durante todo el proceso de formacion como becado.
              Disposicion de profesores
            </p>
          </div>
          <div className="feature">
            <img src="/teach.png" />
            <h3>Acompañamiento</h3>
            <p>
              Ayuda durante todo el proceso de formacion como becado.
              Disposicion de profesores
            </p>
          </div>
          <div className="feature">
            <img src="/personal-development.png" />
            <h3>Desarrollo personal</h3>
            <p>
              Lograr que nuestros becados desarrollen nuevas habilidades,
              expandiendo así sus oportunidades.
            </p>
          </div>
          <div className="feature">
            <img src="/payment.png" />
            <h3>Acompañamiento</h3>
            <p>
              Ayuda durante todo el proceso de formacion como becado.
              Disposicion de profesores
            </p>
          </div>
          <div className="feature">
            <img src="/mortarboard.png" />
            <h3>Acompañamiento</h3>
            <p>
              Ayuda durante todo el proceso de formacion como becado.
              Disposicion de profesores
            </p>
          </div>
        </Caracteristicas>
        <Fundador>
          <h1>Fundadores</h1>
          <div className="Listado">
            <div className="userCard">
              <img src="/user.png"></img>
              <p>Becher, Juan Maria</p>
              <span>Co-Funder</span>
            </div>
            <div className="userCard">
              <img src="/user.png"></img>
              <p>Perez Castro, Tomas</p>
              <span>Co-Funder</span>
            </div>
          </div>
        </Fundador>

        {/* <Search
          size="large"
          placeholder="Filter by text"
          style={{ width: 250 }}
          onChange={handleChange}
        />
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button> */}
      </ContenedorHome>
    </LayoutComp>
  );
}
