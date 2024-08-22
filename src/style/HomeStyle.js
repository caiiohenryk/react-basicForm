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
    justify-content: start;
    flex-direction: column;
    background: rgb(42,68,103);
    background: radial-gradient(circle, rgba(42,68,103,1) 0%, rgba(39,56,82,1) 100%);
}
`;