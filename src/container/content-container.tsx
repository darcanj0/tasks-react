import { Container, SxProps } from "@mui/material";
import { ReactNode } from "react";
import { LogoutFloatButton } from "../components/logout.float-button";
import { AddFloatButton } from "../components/add.float-button";

interface ContentContainerProps {
  children: ReactNode;
}

export const ContentContainer = (props: ContentContainerProps) => {
  const css: SxProps = {
    width: "100%",
    height: "100%",
    display: "flex",
    background: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Container sx={css} maxWidth={false} disableGutters>
      <LogoutFloatButton />
      {props.children}
      <AddFloatButton />
    </Container>
  );
};
