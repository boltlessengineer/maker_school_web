import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../../Components/Profile';
import { useLockScroll } from '../../Components/functions/useLockScroll';

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
    padding-bottom: 0.3em;
    margin-bottom: 0.7em;
    width: 100%;
    border-bottom: 1px solid #e9e9e9;
`;

const ProfilesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
`;

export default () => {
    const [isLocked, { lockScroll, unlockScroll }] = useLockScroll();
    const profiles = [
        {
            id: 201910518,
            name: '이성민',
            currentSchoolID: 20416,
            Img: require('Assets/profiles/leeee.png'),
            phoneNum: '010-3809-8452',
            email: 'seongmin0801@gmail.com',
            blogUrl: 'https://boltlessengineer.tistory.com/',
            introduction:
                '2020 Maker의 부장, 아두이노부터 시작해서 C, Python, JavaScript, HTML/CSS, SQL, ReactJS등의 프로그래밍과 SketchUp, Fusion360등의 3d 모델링을 넘어 목공, 금속공예, 용접까지 설렵한 메이커',
            spot: 'p_manager',
        },
        {
            id: 201910508,
            name: '김진우',
            currentSchoolID: 20408,
            Img: require('Assets/profiles/kim.png'),
            phoneNum: '010-3454-6245',
            email: 'mond07211010@gmail.com',
            blogUrl: '',
            introduction: '2020 Maker의 차장, 봄방학 내내 모스크바에서 오는 해킹으로 고생했다고... 정보보안 전문가',
            spot: 's_manager',
        },
        {
            id: 201910216,
            name: '이시현',
            currentSchoolID: 20417,
            Img: require('Assets/profiles/Lee.png'),
            phoneNum: '010-5279-5819',
            email: 'richardl22245@gmail.com',
            blogUrl: 'https://lektion-von-erfolglosigkeit.tistory.com/',
            introduction:
                '동아리에서 가장 열일하는 사람 중 하나, 1학년 때 자율동아리에서 배우던 Unity3D에 만족하지 못하고 스스로 독학, 여러가지 게임을 만들고 있음',
            spot: 'member',
        },
        {
            id: 201910700,
            name: '이경우',
            currentSchoolID: 20515,
            Img: require('Assets/profiles/jasper.png'),
            phoneNum: '010-4268-1815',
            email: 'kyungwoolee64@gmail.com',
            blogUrl: '',
            introduction: '"Jasper"',
            spot: 'member',
        },
    ];
    const [showCardID, setShowCard] = useState(0);
    function HandlePopUp(event) {
        const cardID = parseInt(event.currentTarget.id);
        setShowCard(cardID);
        lockScroll();
    }
    function HandleHide() {
        setShowCard(0);
        unlockScroll();
    }
    return (
        <Content>
            <Title>Members</Title>
            <ProfilesContainer>
                {profiles.map((profile) => (
                    <Profile
                        key={profile.id}
                        profile={profile}
                        popUpFunc={HandlePopUp}
                        hideFunc={HandleHide}
                        show={parseInt(profile.id) === showCardID}
                    />
                ))}
            </ProfilesContainer>
        </Content>
    );
};
