import React from 'react';
import styled from 'styled-components';
import Profile from '../Components/Profile';

const Content = styled.div`
    padding-top: calc(20px + 10vh);
    margin: 0 15vw;
    @media screen and (max-width: 800px) {
        margin: 0 5vw;
    }
`;

const Title = styled.h1`
    font-size: 3em;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 1em;
`;

const ProfilesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
`;

export default () => {
    const Profiles = [
        {
            id: 201910518,
            name: '이성민',
            profileImg: require('../Assets/profiles/leeee.png'),
            blogUrl: 'https://boltlessengineer.tistory.com/',
            Spot: 'p_manager',
        },
        {
            id: 201910508,
            name: '김진우',
            profileImg: require('Assets/profiles/kim.png'),
            blogUrl: '',
            Spot: 's_manager',
        },
        {
            id: 201910216,
            name: '이시현',
            profileImg: require('Assets/profiles/Lee.png'),
            blogUrl: 'https://lektion-von-erfolglosigkeit.tistory.com/',
            Spot: 'member',
        },
        {
            id: 201910700,
            name: '이경우',
            profileImg: require('Assets/profiles/jasper.png'),
            blogUrl: '',
            Spot: 'member',
        },
    ];
    const HandleProfile = (e) => {
        console.log('you click');
        console.log(e.currentTarget);
    };
    return (
        <Content>
            <Title>Contact</Title>
            <ProfilesContainer>
                {Profiles.map((profile) => (
                    <Profile
                        key={profile.id}
                        id={profile.id}
                        name={profile.name}
                        profileImg={profile.profileImg}
                        blogUrl={profile.blogUrl}
                        spot={profile.spot}
                    />
                ))}
            </ProfilesContainer>
        </Content>
    );
};
