import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-[80%] max-w-6xl mx-auto min-h-screen">{children}</div>
  );
};

export default Layout;
