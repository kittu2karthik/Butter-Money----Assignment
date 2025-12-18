import styled from "styled-components";

const PageElement = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3.2rem 2.4rem;
`;

function PageContainer({ children, ...props }) {
  return <PageElement {...props}>{children}</PageElement>;
}

export default PageContainer;
