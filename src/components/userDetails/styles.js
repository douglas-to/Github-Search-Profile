import styled from 'styled-components';

export const Container = styled.div`

    width:100%;
    height:100px;
    display:flex;
    align-items:center;
    flex-direction:column;
`

export const Name = styled.h1`

    width:100%;
    text-align:center;
    font-size:20px;
    font-weight:800;
    color:#333;
`
export const UserName = styled.h2`

    width:100%;
    text-align:center;
    font-size:13px;
    font-weight:500px;
    color:#777;
    padding:5px;
`
export const Description = styled.p`
    width:300px;
    height:30px;
    margin:10xp 0;
    font-size:13px;
    text-align:center;
    color#777;
    line-height:1.3;
    overflow:hidden;

    @media (max-width: 430px){
        width:250px;
    }

`