import { LayoutProp } from "../../utils/interfaces/layout-prop.interface";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children }: LayoutProp) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
