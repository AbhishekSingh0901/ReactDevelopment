import React from "react";

import Card from "../UI/Card/card";

const Home = (props) => {
  return (
    <Card className="w-11/12 max-w-2xl mt-52 mx-auto text-center">
      <h1 className=" my-10 font-bold uppercase md:text-4xl text-2xl bg-gradient-to-r from-teal-800 to-teal-600 text-transparent bg-clip-text cursor-pointer ">
        Welcome Back!
      </h1>
    </Card>
  );
};

export default Home;
