import { ReactNode, createContext, useContext, useState } from "react";
import { Profile } from "../types/profile";
import { Api } from "../api/axios";
import { ApiPaths } from "../types/api.paths";

interface IProfileContextProvider {
  myProfile: Profile;
  getMyProfile: () => Promise<void>;
}

const ProfileContext = createContext<IProfileContextProvider>(
  {} as IProfileContextProvider
);

interface IProfileContextProviderProps {
  children: ReactNode;
}

const ProfileContextProvider = ({ children }: IProfileContextProviderProps) => {
  const [myProfile, setMyProfile] = useState<Profile>({
    email: "email@mail.com",
    id: "profile id",
    name: "User name",
    password: "password",
  });

  const getMyProfile = async () => {
    Api.get(ApiPaths.GET_MY_PROFILE).then(({ data }) => {
      setMyProfile(data);
    });
  };

  return (
    <ProfileContext.Provider value={{ myProfile, getMyProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProfile = () => useContext(ProfileContext);

export { ProfileContextProvider, useProfile };
