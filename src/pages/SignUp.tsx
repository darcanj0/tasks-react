import { SignForm as SignUpForm } from "../components/forms/sign-up.form";
import { DefaultContainer } from "../containers/default-container";

export const SignUpPage = () => {
  return (
    <DefaultContainer>
      <SignUpForm></SignUpForm>
    </DefaultContainer>
  );
};
