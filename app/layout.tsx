import "@mantine/core/styles.css";
import '@mantine/carousel/styles.layer.css';
import {ColorSchemeScript, MantineProvider} from "@mantine/core";
import {theme} from "../theme";
import "./styles/App.css";
import {Footer} from "./components/Footer/Footer";

export const metadata = {
    title: "NoteSounds",
    description: "We are NoteSounds record label",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <ColorSchemeScript defaultColorScheme="dark"/>
            <link rel="shortcut icon" href="/logo.png"/>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
        </head>
        <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
            {children}
            <Footer />
        </MantineProvider>
        </body>
        </html>
    );
}
