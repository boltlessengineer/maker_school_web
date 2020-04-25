import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    margin: 20px 15vw 0 15vw;
`;

const Title = styled.h1`
    font-size: 3em;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 1em;
`;

const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
`;

const Profile = styled.div`
    float: right;
    background-color: white;
    height: auto;
    background-color: #fff;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 10px 21px #e7eeef;
    display: flex;
    justify-content: space-around;
`;

const ProfileContent = styled.div``;

const PersonName = styled.div`
    font-size: 2em;
    font-weight: 530;
    margin-bottom: 10px;
`;
const Smaller = styled.span`
    font-size: 0.8em;
    font-weight: 500;
`;

const ProfileImg = styled.div`
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center center;
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

const BlogLink = styled.a.attrs((props) => ({
    href: props.blogUrl,
    target: '_blank',
}))`
    float: right;
    color: #fcfbfb;
    text-decoration: none;
    padding: 5px 5px;
    background-color: black;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

export default () => (
    <Content>
        <Title>Members</Title>
        <ProfileContainer>
            <Profile>
                <ProfileImg img={require('../Assets/profiles/leeee.png')} />
                <ProfileContent>
                    <PersonName>이성민</PersonName>
                    <BlogLink blogUrl="https://boltlessengineer.tistory.com/">Blog</BlogLink>
                </ProfileContent>
            </Profile>
            <Profile>
                <ProfileImg img={require('../Assets/profiles/kim.png')} />
                <ProfileContent>
                    <PersonName>김진우</PersonName>
                </ProfileContent>
            </Profile>
            <Profile>
                <ProfileImg img={require('../Assets/profiles/Lee.png')} />
                <ProfileContent>
                    <PersonName>이시현</PersonName>
                    <BlogLink blogUrl="https://lektion-von-erfolglosigkeit.tistory.com/">Blog</BlogLink>
                </ProfileContent>
            </Profile>
            <Profile>
                <ProfileImg img={require('../Assets/profiles/jasper.png')} />
                <ProfileContent>
                    <PersonName>이경우</PersonName>
                </ProfileContent>
            </Profile>
            <Profile>
                <ProfileImg img={require('../Assets/profiles/jasper2.png')} />
                <ProfileContent>
                    <PersonName>
                        이경우<Smaller> v2</Smaller>
                    </PersonName>
                </ProfileContent>
            </Profile>
        </ProfileContainer>
    </Content>
);
