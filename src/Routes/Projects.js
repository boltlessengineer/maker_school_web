import React from 'react';
import styled from 'styled-components';

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
    margin-bottom: 0.7em;
    width: 100%;
    padding-bottom: 0.3em;
    border-bottom: 1px solid #e9e9e9;
`;

const Note = styled.span`
    font-size: 0.5em;
    font-weight: 500;
    color: #95a5a6;
`;

const ProjectContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
`;

const Project = styled.div`
    background-color: white;
    height: 150px;
    border-radius: 12px;
    box-shadow: 0 10px 21px #e7eeef;
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;
    z-index: 1;
    background-image: url(${(props) => props.bgUrl});
    background-size: cover;
    background-position: center center;
    overflow: hidden;
    &:hover {
        transition: transform 0.5s ease;
        transform: translateY(-8px);
    }
`;

const ProjectName = styled.div`
    position: absolute;
    bottom: 0;
    font-size: 1.2em;
    font-weight: 600;
    z-index: 9999;
    width: 100%;
    text-align: center;
    padding: 10px;
    color: white;
    background-color: ${(props) => props.bgColor};
`;

export default () => (
    <Content>
        <Title>Projects{/*<Note>&nbsp;&nbsp;아직 준비중인 페이지 입니다.</Note> */}</Title>
        <ProjectContainer>
            <Project bgUrl={require('Assets/projects/cover/Code.png')}>
                <ProjectName bgColor="#111111">동아리 홈페이지 만들기</ProjectName>
            </Project>
            <Project bgUrl={require('Assets/projects/cover/Cyber_Truck.png')}>
                <ProjectName bgColor="#111111">1/3 사이버 트럭 만들기</ProjectName>
            </Project>
            <Project bgUrl={require('Assets/projects/cover/VR-icon.png')}>
                <ProjectName bgColor="#111111">VR 만들기</ProjectName>
            </Project>
        </ProjectContainer>
    </Content>
);
