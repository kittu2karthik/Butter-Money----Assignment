import { useNavigate } from "react-router-dom";
import PageContainer from "../ui/PageContainer";
import Button from "../ui/Button";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <PageContainer
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "3.2rem 2.4rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "1.6rem" }}>404</h1>
      <h2 style={{ marginBottom: "3.2rem" }}>
        The page you are looking for could not be found
      </h2>
      <Button onClick={() => navigate("/")}>&larr; Back to Home</Button>
    </PageContainer>
  );
}

export default PageNotFound;
