import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { TabContextProvider } from "./contexts/tab.context.tsx";
import { TagContextProvider } from "./contexts/tags.context.tsx";
import { TaskContextProvider } from "./contexts/tasks.context.tsx";
import { AlertContextProvider } from "./contexts/alert.context.tsx";
import { ProfileContextProvider } from "./contexts/profile.context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProfileContextProvider>
      <AlertContextProvider>
        <TagContextProvider>
          <TaskContextProvider>
            <TabContextProvider>
              <App />
            </TabContextProvider>
          </TaskContextProvider>
        </TagContextProvider>
      </AlertContextProvider>
    </ProfileContextProvider>
  </React.StrictMode>
);
