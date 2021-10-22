import { jsx } from "@emotion/react";
import Head from "next/head";
// import {Html} from 'next/document';
import React, { Children, Fragment } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import { Global, css } from "@emotion/react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import Link from "next/link";
import MyHeader from "./Header"
const { Header, Content, Footer } = Layout;

const LayoutComp = (props) => {


  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --main: #aa5e1a;
            --main_pi: #CF5A62;
            --morado: #853035;
            --marron: #D1CE62;
            --azul_claro: #449ECF;
            --azul: #316682;
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
        <meta
          name="description"
          content="Pi Academy - Scholarship program Axie Infinity"
        />
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Changa+One:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;600;700&display=swap" rel="stylesheet"></link>
      </Head>

      <Layout>
        <MyHeader/>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Pi Academy ©2021</Footer>
      </Layout>
    </Fragment>
  );
};

export default LayoutComp;
