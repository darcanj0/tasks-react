import { Container, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

export const ContentContainer = (props: ContentContainerProps) => {
  const css: SxProps = {
    width: "100%",
    height: "100%",
    display: "flex",
    background: "#ffffff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Container sx={css} maxWidth={false} disableGutters>
      {props.children}
    </Container>
  );
};
