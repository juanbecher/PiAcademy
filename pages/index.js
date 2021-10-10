import LayoutComp from "../components/Layout/LayoutComp.js";
import { Button } from 'antd';
import { Input, Space } from 'antd';
import React,{useState} from 'react';


const { Search } = Input;


export default function Home() {
  const [filtroTexto, setFiltroTexto] = useState()

  const handleChange = (e) =>{
    setFiltroTexto(e.target.value);
  }
  console.log(filtroTexto);
  return (
    <LayoutComp>
      <div>
        <h1>PiAcademyyyyy</h1>
        <Search size="large" placeholder="Filter by text" style={{ width: 250}} onChange={handleChange}
          />
        <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
      </div>
    </LayoutComp>
  );
}

