import React, { useContext } from "react";
import Container from "../components/container";
import  ListaRep  from "../components/reposContainer";
import { context } from "../context";

const Repos = props => {
  const ctx = useContext(context);

  return(
      <Container>
          <ListaRep name={ctx.userData?.name} repos={ctx.userRepos}/>
      </Container>
  );
}

export default Repos;

