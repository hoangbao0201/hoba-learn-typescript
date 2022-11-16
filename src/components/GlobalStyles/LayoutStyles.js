import styled from "styled-components";

export const ModalLayout = styled.div`
    width: 100%;
    height: 100%;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.08);
    position: fixed;
    visibility: ${({ active }) => (active ? "visible" : "hidden")};
`
export const Devider = styled.div`
    width: 100%;
    height: 0px;
    border-top: 1px solid ${({ color }) => (color ? color : "rgba(255, 255, 255, 0.5)")};
    border-bottom: 1px solid ${({ double }) => (double ? "rgba(255, 255, 255, 0.5)" : "transparent")};
    margin: 5px 0px;
`

export const Button = styled.div`
    width: ${({ width }) => (width ? width : "100%")};
    color: ${({ color }) => (color ? color : "#ffff")};
    background: ${({ bg }) => (bg ? bg : "#3b49df")};
    padding: ${({ padding }) => (padding ? padding : "15px 10px")};
    border-radius: ${({ borderRd }) => (borderRd ? borderRd : "4px")};
    font-size: ${({ size }) => (size ? size : "18px")};
    font-weight: ${({ fontW }) => (fontW ? fontW : "600")};;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 10px 0px;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
    transition: 0.2s;

    &:hover {
        background: ${({ bgHv }) => (bgHv ? bgHv : "rgb(47, 58, 178)")};
    }
`