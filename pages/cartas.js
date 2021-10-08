import styled from "@emotion/styled";
import React from "react";
import LayoutComp from "../components/Layout/LayoutComp.js";
import ListadoCartas from "../components/ListadoCartas";
import { Input, Space } from 'antd';

const { Search } = Input;

const CartaLayout= styled.div`
  h1{
    text-align:center;
    color: var(--main);
    text-transform:uppercase;
  }
`;

const cartas = (cartas_array) => {
  const cartas = cartas_array.cartas_array;
  return (
    <LayoutComp>
      <CartaLayout>
      <h1>PiAcademy card finder</h1>
      <h3>Filtros</h3>
      <Search size="large" placeholder="Filter by text" style={{ width: 250}} />
      <div>{cartas && <ListadoCartas cartas={cartas} />}</div>
      </CartaLayout>
      
    </LayoutComp>
  );
};

export default cartas;

export async function getServerSideProps() {
  const res = await fetch(
    `https://storage.googleapis.com/axie-cdn/game/cards/card-abilities.json`
  );
  const cartas_total = await res.json();

  return {
    props: {
      cartas_array: cartas_total,
    },
  };
}
