import {createGlobalStyle} from "styled-components";
import {COLORS} from "../lib/constants/constants";

export const GlobalStyles = createGlobalStyle`
  body {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: ${COLORS.TEXT_COLOR};
    background-color: ${COLORS.BACKGROUND_COLOR};
    min-height: calc(100vh - 40px);
    
  }
  
  h1 {
    color: ${COLORS.H1};
    text-align: center;
    margin: 20px 0;
  }
  
  p {
    margin: 20px 0;
  }
  
  code {
    display: block;
    background-color: ${COLORS.CODE_BACKGROUND};
    padding: 20px;
    margin: 20px 0;
    border-radius: 10px;
    white-space: pre-wrap;
  }
  
  li {
    padding-left: 20px;
    margin: 20px 0;
    color: ${COLORS.LI_COLOR}
  }
  
  img {
    object-fit: cover;
    width: 100%;
  }
  
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  button {
    font-family: inherit;
  }
  
  #root {
    display: flex;
    justify-content: center;
  }
`