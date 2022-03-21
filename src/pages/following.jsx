import React, { useContext } from 'react';
import Container from "../components/container";
import ListaSeguindo from '../components/followingContainer';
import { context } from "../context";

const Following = props => {
    const ctx = useContext(context);
    return(
        <Container>
            <ListaSeguindo name={ctx.userData?.name} following={ctx.userFollowing}/>
        </Container>
    )
}

export default Following;