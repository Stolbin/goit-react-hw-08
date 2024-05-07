import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";
import Loader from "../Loader/Loader";

const Layout = ({ children }) => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <AppBar />
        <main>{children}</main>
      </Suspense>
    </div>
  );
};

export default Layout;
