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

const Smaller = styled.span`
    font-size: 0.8em;
    font-weight: 500;
`;

const Question = styled.h2`
    font-size: 2em;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 1em;
`;

const Description = styled.p`
    line-height: 150%;
`;

const Hr = styled.hr`
    background-color: #e9e9e9;
    border: none;
    height: 1px;
    margin: 3rem 0;
`;
const Del = styled.del`
    color: grey;
    &:hover {
        text-decoration-line: none;
    }
`;

const Rainbow = styled.span`
    animation-duration: 3s;
    animation-name: rainbowLink;
    animation-iteration-count: infinite;
    @keyframes rainbowLink {
        0% {
            color: #ff2a2a;
        }
        15% {
            color: #ff7a2a;
        }
        30% {
            color: #ffc52a;
        }
        45% {
            color: #43ff2a;
        }
        60% {
            color: #2a89ff;
        }
        75% {
            color: #202082;
        }
        90% {
            color: #6b2aff;
        }
        100% {
            color: #e82aff;
        }
    }
`;
const Strong = styled.span`
    font-weight: 600;
`;

const Hide = styled.span`
    color: transparent;
`;

const JoinLink = styled.a.attrs((props) => ({
    href: 'https://forms.gle/uR4rX1nF4HTttaSX7',
}))`
    color: #fcfbfb;
    text-decoration: none;
    padding: 3px 5px;
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
        <Title>
            Q<Smaller>&</Smaller>A
        </Title>
        <Question>Maker는 무엇을 하는 동아리인가요?</Question>
        <Description>
            Maker는 아두이노, 코딩, 3D 모델링부터 프린팅까지 세상에 존재하는 다양한 Maker적 활동을 하는 동아리입니다.
            {/*<br />
            2020 maker 부터는 외부 시설을 통해 목공을 포함한 보다 폭넓은 DIY를 할 수 있게 되었습니다.*/}
            <br />
            초심자는 원하는 분야를 마음껏 배워가고, 이미 뭔가 할 줄 아는 사람은 하고 싶은 프로젝트를 진행할 수 있는 자유로운 분위기의
            동아리입니다.
            <br />
            <br />
            초심자는 웹, 게임, 3D 모델링 중 하나를 선택하여 배울 수 있고,
            <br />
            충분히 배웠다면 개인 프로젝트를 진행, 선배들에게 조언을 구할 수도 있습니다.
        </Description>
        <Hr />
        <Question>Maker 동아리 부실은 어디인가요?</Question>
        <Description>
            보평고 3층 뉴턴랩. 우리가 점령중입니다.
            {/*
            <br />
            안쓰는 부품들 정리할 <Del>노에</Del> 부원이 필요합니다. 빨리 오세요!!*/}
        </Description>
        <Hr />
        <Question>어떻게 가입할 수 있나요?</Question>
        <Description>
            2020 maker 가입 신청지는 <JoinLink>이쪽</JoinLink>
        </Description>
        <Hr />
        <Question>혹시 요구 수준 같은 게 있나요?</Question>
        <Description>
            관심만 <Rainbow>제대로</Rainbow> 있다면 어느 수준이던간에 상관 없습니다.
            <br />
            잘 모르는 사람은 원하는 만큼 배워갈 수 있도록 최대한 서포트해드리겠습니다.
            <br />
            <Del>근데 아무래도 코딩 경험 한두번 쯤은 있는 편이...</Del>
        </Description>
        <Hr />
        <Question>
            스크래치<Smaller>(블록코딩)</Smaller> 해봤어요!
        </Question>
        <Description>
            <Strong>🙇‍♂️귀하게 모시겠습니다.</Strong> <JoinLink>가시죠</JoinLink>
        </Description>
        <Hr />
        <Question>Maker에서 어떤 기술을 배울 수 있나요?</Question>
        <Description>
            2020 Maker의 경우, HTML/CSS/JS를 포함한 프론트엔드 기초부터
            <br />
            Arduino, Unity3D, Python, Fusion360, SketchUp, 실전 3D 프린팅 심지어 납땜까지 배워보실 수 있습니다.
        </Description>
        <Hr />
    </Content>
);
