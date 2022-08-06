import { Container } from "react-bootstrap";

type DefaultlayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultlayoutProps) => {
  return <Container className="pt-3">{children}</Container>;
};

export default DefaultLayout;
