import styled from "styled-components";

const LoaderWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 50px;
    opacity: 0.5;
`;

const Spinner = styled.span`
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 8;
    display: block;
    height: 0;
    width: 0;
    padding: 10px;
    margin: -18px 0 0 0;
    border: 2px solid #fff;
    border-right-color: #000;
    border-radius: 22px;
    pointer-events: none;
    user-select: none;
    animation: rotate 1s infinite linear;
`;

export default function Loader() {
    return <LoaderWrapper><Spinner data-testid="loader"></Spinner></LoaderWrapper>
}