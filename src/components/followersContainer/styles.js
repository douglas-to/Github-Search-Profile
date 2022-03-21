import styled from 'styled-components';

export const Section = styled.section`
    width:400px;
    height:400px;
    background-color:rgba(245, 245, 245, .95);
    border-radius:10px;
    border-bottom:10px solid #4078c0;
    margin-top:15px;

    @media (max-width:430px){
        width:300px;
    }
`

export const Title = styled.h1`
    font-size:20px;
    font-weight:700;
    margin-top:10px;
    color:#333;
    width:100%;
    text-align:center;
    height:30px;
`

export const ListOfFollowers = styled.h1`
    height:350px;
    width:100%;
    padding:10px;
    overflow-y:scroll;
`
export const Followers = styled.h2`
    width:100%;
    height:80px;
    background-color:rgba(0,0,0,.05);
    border-radius:5px;
    padding:10px;
    margin-bottom:10px;
    h2{
        font-size:15px;
        font-weight:bold;
        width:100%;
        overflow:hidden;
        color:#333;
        cursor:pointer;
    }

    p{
        font-size:12px;
        color:#777;
        width:100%;
        height:30px;
        overflow:hidden;
        line-height:1.3;
        margin-top:10px;
    }
`