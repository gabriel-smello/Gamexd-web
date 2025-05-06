import React from "react";
import Header from "../Components/Layouts/Header";
import Layout from "../Components/Props/Layout";
import SideBarFilter from "../Components/Layouts/SideBarFilter";

const BrowsePage = () => {
  return (
    <Layout>
      <Header></Header>
      <SideBarFilter></SideBarFilter>
    </Layout>
  );
};

export default BrowsePage;
