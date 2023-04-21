import { Container, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface DefaultContainerProps {
  children: ReactNode;
}

export const DefaultContainer = (props: DefaultContainerProps) => {
  const css: SxProps = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    border: "1px solid red",
    justifyContent: "space-between",
    padding: "0px 0px 20px 0px",
    gap: "20px",
  };

  return (
    <Container sx={css} maxWidth={false} disableGutters>
      {props.children}
    </Container>
  );
};
