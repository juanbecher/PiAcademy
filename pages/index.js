import LayoutComp from "../components/Layout/LayoutComp.js";
import { Button } from 'antd';

export default function Home() {
  return (
    <LayoutComp>
      <div>
        <h1>PiAcademyyyyy</h1>
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

