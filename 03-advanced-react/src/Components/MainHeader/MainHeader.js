import React from "react";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex justify-between items-center bg-neutral-100 md:px-8 px-4  shadow-md">
      <h1 className="font-bold font-sans  uppercase md:text-4xl text-2xl bg-gradient-to-r from-zinc-800 to-zinc-600 text-transparent bg-clip-text cursor-pointer">
        path to success!
      </h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
