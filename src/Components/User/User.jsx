//import React from 'react'
import { Routes, Route } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserphotoPost from "./UserphotoPost";
import Userstats from "./Userstats";
import React from "react";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";
import Head from "../../Helper/Head";

const User = () => {
  const {data} = React.useContext(UserContext);

  return (
    <div className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserphotoPost />} />
        <Route path="estatisticas" element={<Userstats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default User;
