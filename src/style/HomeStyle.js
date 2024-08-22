import {createGlobalStyle} from "styled-components";

export const mainStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    font-family: "Inter", sans-serif;
}

body {
    display: flex;
    margin-top: 17vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #5990e3;
}
`;