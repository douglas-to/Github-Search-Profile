import {
    Section,
    Title,
    ListOfFollowers,
    Followers
} from './styles';

const listaSeguidores = props => {
    return(
        <Section>
        <Title>Seguidores de {(props.name)?.split(' ')[0]}</Title>
            <ListOfFollowers>
                {(props?.followers).map(seguidores => (
                    <Followers onClick={() => window.location.assign(seguidores?.followers_url)} key={seguidores?.id}>
                        <h2>{seguidores?.login}</h2>
                        <p>{seguidores?.bio}</p>
                    </Followers>
        )        )}
            </ListOfFollowers>
        </Section>
   
    )
}

export default listaSeguidores;