import React, { useContext } from "react";
import Container from "../components/container";
import ListaSeguidores from "../components/followersContainer";
import { context } from "../context";
const Followers = props => {
    const ctx = useContext(context);
    
    return(
        <Container>
            <ListaSeguidores name={ctx.userData?.name} followers={ctx.userFollowers}/>
        </Container>
    )
}

export default Followers; 

