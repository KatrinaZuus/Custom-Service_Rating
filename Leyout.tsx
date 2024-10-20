import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
    <MainContainer>
      {/* <NavBar /> */}
      <Outlet />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  height: 100%;
`;