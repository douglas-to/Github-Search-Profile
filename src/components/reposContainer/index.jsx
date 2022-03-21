import {
    Section,
    Title,
    ListOfRepos,
    Repo
} from './styles';

const ListaRep = props => {
    return (
        <Section>
            <Title>Repositórios de {(props.name)?.split(' ')[0]}</Title>
                <ListOfRepos>
                    {(props?.repos).map(repo => (
                        <Repo onClick={() => window.location.assign(repo?.html_url)} key={repo?.id}>
                            <h2>{repo?.name}</h2>
                            <p>{repo?.description}</p>
                        </Repo>
            )        )}
                    </ListOfRepos>
        </Section>
    );
}

export default ListaRep;

