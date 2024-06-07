import styled from "styled-components";

const NawWrapper = styled.li`
    margin-left: 10px;
    font-size: 20px;

    & > a {
        text-decoration: none;
        color: #282c34;
        font-weight: bold;
    }

    & > a.active {
        color: #4477e7;
    }

    & > a:hover {
        color: #1149d3;
    }
`

export const S = {
    NawWrapper
}