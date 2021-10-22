import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Link from "next/link";
import { css } from "@emotion/react";
import $ from "jquery";
import styled from "@emotion/styled";

const { Header, Content, Footer } = Layout;

const Logo = styled.div`
  display: flex;
  align-items: center;
  a,
  a:hover {
    color: white;
  }
  h2 {
    color: white;
    width: 150px;
    margin:0px 5px !important;
  }
  img{
      /* width:50px; */
      border-radius:50%;
  }
`;
const MyHeader = () => {

   // Agrega fondo blanco a header cuando scrolleamos 
   useEffect(() => {
    const pageHeader = document.querySelector(".ant-layout-header");
    const fondoHeader = "fondoHeader";
    let targetScroll = window.innerHeight - pageHeader.offsetHeight;
    window.addEventListener("scroll", () => {
      const scrollY = window.pageYOffset;
      // console.log("scroll:" +scrollY);
      // console.log("window.inner:" +window.innerHeight);
      // console.log("pageheader:" +pageHeader.offsetHeight);
      // console.log("target:" + targetScroll);
        
      // console.log(scrollY);
      if (scrollY > 200 || window.location.pathname != '/') {
        pageHeader.classList.add(fondoHeader);
      } else {
        pageHeader.classList.remove(fondoHeader);
      }
    });

    window.addEventListener("resize", () => {
      targetScroll = window.innerHeight - pageHeader.offsetHeight;
    });
  }, []);

  // Fondo al no estar en directorio raiz
  useEffect(() => {
    const pageHeader = $(".ant-layout-header");
    const fondoHeader = "fondoHeader";
    if (window.location.pathname != "/") {
      pageHeader.addClass(fondoHeader);
    }
    //   if(window.location.pathname == '/propiedades'){
    //     $(".page-header").css("box-shadow","none");
    //   }
  }, []);

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        // display: "flex",
        // justifyContent: "space-between",
        backgroundColor: "rgb(0 0 0 / 21%);",
        color: "white",
      }}
    >
        <div className="width1200">
      <Logo>
        {/* <img src="/logo3.png" /> */}
        <h2>
          <Link href="/">
            <a>Pi Academy</a>
          </Link>
        </h2>
      </Logo>
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={["1"]}
        collapsible
        css={css`
          background-color: transparent !important;
          li {
            width: 100px;
            color: white !important;
            text-align: center;
          }
        `}
      >
        <Menu.Item key="1">
          <Link href="/" activeClassName="active">
            <a css={css`color:white;`}>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/becados" activeClassName="active">
            <a>Becados</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/" activeClassName="active">
            <a>Becas</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/cartas" activeClassName="active">
            <a>Cartas</a>
          </Link>
        </Menu.Item>
      </Menu>
      </div>
    </Header>
  );
};

export default MyHeader;
