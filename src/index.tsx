import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";
import { darkTheme } from "./theme";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <>
        <React.StrictMode>
            <RecoilRoot>
                <HelmetProvider>
                    <ThemeProvider theme={darkTheme}>
                        <App />
                    </ThemeProvider>
                </HelmetProvider>
            </RecoilRoot>
        </React.StrictMode>
    </>,
);
