import { ReactNode, createContext, useContext, useState } from "react";
import { Api } from "../api/axios";
import { ApiPaths } from "../types/api.paths";
import { Tag } from "../types/tag";

interface ITagContextProvider {
  myTags: Tag[];
  getMyTags: () => Promise<void>;
}

const TagContext = createContext<ITagContextProvider>(
  {} as ITagContextProvider
);

interface ITagContextProviderProps {
  children: ReactNode;
}

const TagContextProvider = (props: ITagContextProviderProps) => {
  const [myTags, setMyTags] = useState<Tag[]>([]);

  const getMyTags = async () => {
    Api.get(ApiPaths.GET_MY_TAGS).then(({ data }) => {
      setMyTags(data);
    });
  };

  return (
    <TagContext.Provider value={{ myTags, getMyTags }}>
      {props.children}
    </TagContext.Provider>
  );
};

const useTags = () => useContext(TagContext);

export { TagContextProvider, useTags };
