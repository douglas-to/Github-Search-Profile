import {
    Section,
    Title,
    ListOfFollowing,
    Following
} from './styles';

const ListaSeguindo = props => {
    return(
        <Section>
        <Title>Usuários que {(props.name)?.split(' ')[0]} segue</Title>
            <ListOfFollowing>
                {(props?.following).map(seguindo => (
                    <Following onClick={() => window.location.assign(seguindo?.following_url)} key={seguindo?.id}>
                        <h2>{seguindo?.login}</h2>
                        <p>{seguindo?.bio}</p>
                    </Following>
        )        )}
            </ListOfFollowing>
        </Section>
   
    )
}

export default ListaSeguindo;