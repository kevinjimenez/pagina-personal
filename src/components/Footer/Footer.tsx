import { FooterStyle, PhantomStyle } from "./styles";

export const Footer = () => {
  return (
    <>
      <PhantomStyle />
      <FooterStyle>
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6 text-center">
            <span>
              @ 2020 Copyright: Kevin Jiménez
            </span>
          </div>
          <div className="col-sm-3" />
        </div>
      </FooterStyle>
    </>
  );
};
