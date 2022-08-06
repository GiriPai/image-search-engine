import { Container } from "react-bootstrap";

const DefaultLayout = ({ children }) => {
  return <Container className="pt-3">{children}</Container>;
};

export default DefaultLayout;
