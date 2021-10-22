import styled from "@emotion/styled";
import React, { useState } from "react";
import LayoutComp from "../components/Layout/LayoutComp.js";
import ListadoCartas from "../components/ListadoCartas";
import { Input, Space,Menu, Dropdown, Button } from "antd";

const { Search } = Input;

const CartaLayout = styled.div`
  h1 {
    text-align: center;
    color: var(--main);
    text-transform: uppercase;
  }
`;

const Filtros = styled.div`
  display:flex;
`;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const cartas = (cartas_array) => {
  const cartas = cartas_array.cartas_array;
  // const [filtroTexto, setFiltroTexto] = useState();

  // const handleChange = (e) => {
  //   setFiltroTexto(e.target.value);
  // };
  console.log(filtroTexto);
  console.log(cartas);
  return (
    <LayoutComp>
      <CartaLayout>
        <h1>PiAcademy card finder</h1>
        <h3>Filtros</h3>
        <Filtros>
          <Input
            size="large"
            placeholder="Filter by text"
            style={{ width: 250 }}
            onChange={handleChange}
          />
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>bottomCenter</Button>
          </Dropdown>
        </Filtros>

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
