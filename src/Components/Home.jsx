//import React from 'react'
import Head from "../Helper/Head";
import Feed from "./Feed/Feed";

const Home = () => {
  return <section className="container mainContainer">
    <Head title="fotos" description="Home do site Dogs, com o feed de fotos."/>
    <Feed />
  </section>;
};

export default Home;
