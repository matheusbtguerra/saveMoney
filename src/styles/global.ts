import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #fff;

        --background: #121214;

        --principal-shape: #202024;
        --secondary-shape: #29292e;
        --tertiary-shape: #323238;

        --placeholder: #7c7c8a;

        --base-text: #c4c4cc;
        --text-title: #e1e1e6;

        --light-green: #00b37e;
        --green: #00875f;
        --dark-green: #015f43;

        --red: #f75a68;
        --dark-red: #aa2834;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: var(--secondary-shape);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{ 
        background: rgba(0,0,0,.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;

        background: var(--principal-shape);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: none;
        background: transparent;
        transition: filter .2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;
