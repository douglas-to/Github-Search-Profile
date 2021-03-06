import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:80px;
    padding:0 16px;
    display:flex;
    align-items:center;
    justify-content: space-between;
`

export const NumberContainer = styled.div`
    width:100px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;


    h1{
       font-size:20px;
       text-align:center;
       color:#333; 
    }

    h2{
        font-size:12px;
        text-align:center;
        color:#333;
    }

    &:hover{
        cursor:pointer;
        background-color:#4078c0;
        transition:.4s ease;
        border-radius:10px;
    }
`