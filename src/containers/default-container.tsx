import { Container, SxProps } from "@mui/material";
import { ReactNode } from "react";
import { ErrorAlert } from "../components/alerts/error.alert";

interface DefaultContainerProps {
  children: ReactNode;
}

export const DefaultContainer = (props: DefaultContainerProps) => {
  const css: SxProps = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "0px 0px 20px 0px",
    gap: "20px",
    backgroundColor: "#e1e1e5"
  };

  return (
    <Container sx={css} maxWidth={false} disableGutters>
      {props.children}
      <ErrorAlert />
    </Container>
  );
};
