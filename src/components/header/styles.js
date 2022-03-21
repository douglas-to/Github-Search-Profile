import styled from 'styled-components';


export const HeaderSection = styled.header`
    width: 400px;
    height: 130px;
    background: #4078c0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 0;
`

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    color: #333;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    width: 100%;
`

export const HeaderInputContainer = styled.div`
    position:relative;
    top:-10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 15px;
    border: none;
    padding: 0 16px;
    color: #f5f5f5;
    transition: .4s ease;
    background-color:#333;
    &:focus {
        outline: none;
        width: 220px;
        transition: .4s ease;
    }
`

export const HeaderSearchButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background:#333;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#4078c0;
    transition: ease .3s;
    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
`