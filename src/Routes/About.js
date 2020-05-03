import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Content = styled.div`
  margin: calc(20px + 10vh) 15vw 0 15vw;
  @media screen and (max-width: 800px) {
    margin: calc(20px + 10vh) 5vw 0 5vw;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: 600;
  line-height: 150%;
  padding-bottom: 0.3em;
  margin-bottom: 0.7em;
  width: 100%;
  border-bottom: 1px solid #e9e9e9;
`;

const SubTitle = styled.h2`
  font-size: 2.5em;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 0.7em;
`;

const Smaller = styled.span`
  font-size: 0.8em;
  font-weight: 500;
`;

const YoutubeInner = styled.div`
  position: absolute;
  top: 0;
  left: 5%;
  width: 90%;
  height: 100%;
`;

const YoutubeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 53.325%;
  @media screen and (max-width: 800px) {
    padding-bottom: 56.25%;
    ${YoutubeInner} {
      left: 0;
      width: 100%;
    }
  }
`;

const YoutubeIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const Youtube = (url) => (
  <YoutubeContainer>
    <YoutubeInner>
      <YoutubeIframe src={url} />
    </YoutubeInner>
  </YoutubeContainer>
);

const PrizeLi = styled.li``;

const PrizeUl = styled.ul`
  padding-left: 5px;
  ${PrizeLi} {
    margin-bottom: 5px;
    &:before {
      content: "🏆";
      padding-right: 15px;
    }
  }
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
  font-weight: 600;
  animation-duration: 2s;
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

const JoinLink = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: all 0.5s;
  margin: 0 7px;
`;

const Button = styled.button`
  border-radius: 4px;
  background-color: black;
  border: none;
  color: #fcfbfb;
  text-align: center;
  padding: 5px 7px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  ${JoinLink}:after {
    content: "»";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  &:hover ${JoinLink} {
    padding-right: 14px;
    margin: 0px;
  }
  &:hover ${JoinLink}:after {
    opacity: 1;
    right: 2px;
  }
`;

const JoinButton = ({ children }) => (
  <Button
    onClick={() => window.open("https://forms.gle/uR4rX1nF4HTttaSX7", "_blank")}
  >
    <JoinLink>{children}</JoinLink>
  </Button>
);

const SLink = styled(Link)`
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
    <Title>About</Title>
    <SubTitle>
      홍보영상<Smaller>&nbsp;&nbsp;&nbsp;Don't Blink 패러디</Smaller>
    </SubTitle>
    <YoutubeContainer>
      <YoutubeInner>
        <YoutubeIframe src={"https://www.youtube.com/embed/T93levlcw1U"} />
        {/*https://www.youtube.com/embed/B8aiSA7EX70*/}
      </YoutubeInner>
    </YoutubeContainer>
    <Hr />
    <SubTitle>수상경력</SubTitle>
    <Description>
      <PrizeUl>
        <PrizeLi>메이커톤 대상 수상</PrizeLi>
        <PrizeLi>부천 로봇 판타지아 대상 수상</PrizeLi>
        <PrizeLi>국민은행 소프트웨어 경진대회 최우수상 수상</PrizeLi>
        <PrizeLi>교육부 정보보호영재교육원 정보보안 경진대회 최우수상</PrizeLi>
      </PrizeUl>
    </Description>
    <Hr />
    <SubTitle>
      Q<Smaller>&</Smaller>A
    </SubTitle>
    <Question>Maker는 무엇을 하는 동아리인가요?</Question>
    <Description>
      Maker는 아두이노, 코딩, 3D 모델링부터 프린팅까지 세상에 존재하는 다양한
      Maker적 활동을 하는 동아리입니다.
      {/*<br />
            2020 maker 부터는 외부 시설을 통해 목공을 포함한 보다 폭넓은 DIY를 할 수 있게 되었습니다.*/}
      <br />
      초심자는 원하는 분야를 마음껏 배워가고, 이미 뭔가 할 줄 아는 사람은 하고
      싶은 프로젝트를 진행할 수 있는 자유로운 분위기의 동아리입니다.
      <br />
      <br />
      초심자는 웹, 게임, 3D 모델링 중 하나를 선택하여 배울 수 있고,
      <br />
      충분히 배웠다면 개인 프로젝트를 진행, 선배들에게 조언을 구할 수도
      있습니다.
    </Description>
    <Hr />
    <Question>어떤 학생들을 위한 동아리인가요?</Question>
    <Description>
      Maker 창체동아리는 컴퓨터공학, 로봇공학, 3d 디자인, 3d 프린팅 계열에
      관심이 많은 학생들을 위한 동아리입니다.
      <br />
      코딩을 배우고 싶은 학생, 무언가 자유롭게 만들어보고 싶은 학생들에게 적합한
      동아리입니다.
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
      2020 maker 가입 신청지는 <JoinButton>이쪽</JoinButton>
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
      <Strong>
        <span role="img" arial-label="bow">
          🙇‍♂️
        </span>
        귀하게 모시겠습니다.<JoinButton>가시죠</JoinButton>
      </Strong>
    </Description>
    <Hr />
    <Question>Maker에서 어떤 기술을 배울 수 있나요?</Question>
    <Description>
      2020 Maker의 경우, HTML/CSS/JS를 포함한 프론트엔드 기초부터
      <br />
      Arduino, Unity3D, Python, Fusion360, SketchUp, 실전 3D 프린팅 심지어
      납땜까지 배워보실 수 있습니다.
      <br />
      <br />
      확정은 아닙니다만, 올해는 아날로그적인 DIY와 웹 개발 이 두가지를 중심으로
      진행할 생각입니다.
    </Description>
    <Hr />
    <Question>💥질문 있어요!💥</Question>
    <Description>
      <SLink to="/contact">Contact</SLink> 에서 연락처를 확인하실 수 있습니다.
      <br />
      <br />
      문의사항은 이성민 부장이나 김진우 차장을 통해 연락주세요.
      <br />
      전화나 카톡, 이메일도 가능합니다.
    </Description>
    <Hr />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Del>아래부터는 웹사이트 자랑</Del>
    <br />
    <br />
    <Question>이 웹사이트는 누가 만든건가요?</Question>
    <Description>
      부장, 이성민입니다.
      <br />
      해당 홈페이지는 ReactJS로 제가 100% 혼자서 5일 동안 만든 웹사이트입니다.
    </Description>
    <Hr />
    <Question>처음 들어올때 인트로 그거 또 보여주세요</Question>
    <Description>
      넵.&nbsp;&nbsp;&nbsp;&nbsp;
      <SLink to="/intro">여기를 클릭</SLink>
    </Description>
    <Hr />
    <Question>왜 취소선은 클릭하면 사라지나요?</Question>
    <Description>
      <Del>혹시 나무위키체라고 들어보셨나요?</Del>
    </Description>
    <Hr />
  </Content>
);
