import { jsx } from "@emotion/react";
import Head from "next/head";
import {Html} from 'next/document';
import React, { Children, Fragment } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import { Global, css } from "@emotion/react";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

const LayoutComp = (props) => {
  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --main: #aa5e1a;
            --gris_anterior: #3d3d3d; /*   */
            --gris2: #6f6f6f;
            --gris3: #e1e1e1;
            --gris_borde: #e0e1e1;
            --negro: #2a2a33; /* Letra  */
            --blanco: #e1ecf2;
            --gris_head: #313333;
            --bordo: #8c3e4c;
            --rosa: #f2b3bf;
            --rojo: #a63f5a;
            --gris: #bfbfbf;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            font-size: 1.5rem !important;
            /* font-size: 1.6rem !important; */
            font-family: "Inter", sans-serif !important;
            /* font-family: "Segoe UI Historic", "Segoe UI", Helvetica, Arial,sans-serif; */
            line-height: 1.5 !important;
          }
          h1,
          h2,
          h3 {
            /* margin: 0 0 2rem 0; */
            line-height: 1.5;
            margin: 0;
            font-weight: 600;
          }
          p {
            margin: 0 !important;
          }
          ul {
            /* list-style: none; */
            margin: 0;
            padding: 0;
          }

          a {
            text-decoration: none !important;
          }
        `}
      />
      <Head>
        <title>Pi Academy</title>
        <link rel="shortcut icon" type="image/jpg" href="/BRONCE18x18.png" />
        {/* <html lang="es"/> */}
        <meta name="description" content="Pi Academy - Scholarship program Axie Infinity"/>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Courgette&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Changa+One:ital@0;1&display=swap" rel="stylesheet"></link>
      </Head>

      <Layout >
      <Header style={{ position: "fixed", zIndex: 1, width: "100%",display: "flex",justifyContent: "center"}}>
        <div className="logo">
          <img src="/BRONCE18x18.png"/>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Cartas</Menu.Item>
          <Menu.Item key="2">Becados</Menu.Item>
          <Menu.Item key="3">Cursos</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Cartas</Breadcrumb.Item>
          <Breadcrumb.Item>Becados</Breadcrumb.Item>
          <Breadcrumb.Item>Cursos</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Pi Academy ©2021
      </Footer>
    </Layout>
    </Fragment>
  );
};

export default LayoutComp;
