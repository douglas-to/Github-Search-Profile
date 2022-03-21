import React, { useState, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';


import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

import UseFetch from '../../services/useFetch';
import { context } from '../../context';

const Header = () => {
    const ctx = useContext(context);
    const [searchValue, setSearchValue] = useState('');
    
async function getUserData(){
        try{
            const response = await UseFetch.get(`/${searchValue}`);
            const repos = await UseFetch.get(`/${searchValue}/repos`);
            const followers = await UseFetch.get(`/${searchValue}/followers`);
            const following = await UseFetch.get(`/${searchValue}/following`);
            ctx.setUserData(response.data);
            ctx.setUserRepos(repos.data);
            ctx.setUserFollowers(followers.data);
            ctx.setUserFollowing(following.data);
        }catch(err){
            console.log(err)
        }

}
    return(
        <HeaderSection>
        <HeaderTitle>Github Search Profile</HeaderTitle>
        <HeaderInputContainer>
            <HeaderInput value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
            <HeaderSearchButton onClick={getUserData}>
                <FiSearch size={15}/>
            </HeaderSearchButton>
        </HeaderInputContainer>
    </HeaderSection>
    )
};

export default Header;