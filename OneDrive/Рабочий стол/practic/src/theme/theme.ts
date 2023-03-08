import {createTheme} from "@mui/material";

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: "gray !important",
                },
                root: {
                    color: "white !important",
                    borderColor: "white !important",
                }
            },
        },
    }
});