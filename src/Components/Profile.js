import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PopUp = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    ${(props) => (props.show ? `display: block` : `display: none`)}
`;

const PopUpFilter = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #ecf0f1;
    opacity: 0.8;
    z-index: 10;
`;

const PopUpContent = styled.div`
    font-size: 2em;
    line-height: 1.5em;
    padding-left: 3vw;
    padding-top: 1vh;
`;

const PopUpName = styled.div`
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 10px;
`;

const PhoneNum = styled.div``;

const Email = styled.div`
    cursor: pointer;
`;

const IntroductionTitle = styled.h3`
    font-size: 1em;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const Introduction = styled.p`
    font-size: 0.5em;
    line-height: 1.5em;
    height: 10vh;
    width: 30vw;
`;

const Hr = styled.hr`
    background-color: #e9e9e9;
    border: none;
    height: 1px;
    margin: 1rem 0;
`;

const Topbox = styled.div`
    display: flex;
    padding-bottom: 2vh;
    @media screen and (max-width: 1100px) {
        font-size: 0.9em;
        flex-direction: column;
        align-items: center;
        text-align: center;
        ${Introduction} {
            width: 100%;
        }
    }
`;

const CloseBtn = styled.button`
    border: 0;
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    font-size: 3em;
    font-weight: 600;
    border-radius: 50%;
    background-color: white;
    color: black;
    cursor: pointer;
`;

const ManagerTag = styled.div`
    position: absolute;
    top: 15px;
    left: -80px;
    transform: rotate(-45deg);
    padding: 0.5em 100px;
    ${(props) =>
        props.spot === 'p_manager'
            ? `
        &:after {
            font-size: 1em;
            color: white;
            content: "부장"
        }
        background-color: #2980b9;
            `
            : `
        &:after {
            font-size: 1em;
            color: white;
            content: "차장"
        }
        background-color: #8e44ad;
    `}
`;

const PopUpCard = styled.div`
    position: fixed;
    top: 20vh;
    right: 20vw;
    padding: 3vw;
    width: 60vw;
    height: 60vh;
    ${ManagerTag} {
        font-size: 2em;
    }
    @media screen and (max-width: 800px) {
        font-size: 0.9em;
        top: 15vh;
        right: 6vw;
        padding: 3vw;
        width: 88vw;
        height: 70vh;
        min-height: 110vw;
        ${ManagerTag} {
            font-size: 1.5em;
        }
        ${PopUpContent} {
            font-size: 1.8em;
        }
    }
    z-index: 11;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 10px 21px #e7eeef;
    overflow: hidden;
`;

const ProfileCard = styled.div`
    height: auto;
    background-color: white;
    border-radius: 12px;
    padding: 30px;
    position: relative;
    box-shadow: 0 10px 21px #e7eeef;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    &:hover {
        transition: transform 0.5s ease;
        transform: translateY(-8px);
    }
    overflow: hidden;
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
    border-radius: 50%;
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

const SManagerTag = styled.div``;

const Profile = ({ profile, popUpFunc, hideFunc, show }) => {
    return (
        <>
            <ProfileCard id={profile.id} onClick={popUpFunc}>
                {profile.spot !== 'member' && <ManagerTag spot={profile.spot}></ManagerTag>}
                <ProfileImg img={profile.Img} />
                <ProfileContent>
                    <PersonName>{profile.name}</PersonName>
                    {profile.blogUrl && <BlogLink blogUrl={profile.blogUrl}>Blog</BlogLink>}
                </ProfileContent>
            </ProfileCard>
            <PopUp show={show}>
                <PopUpFilter />
                <PopUpCard>
                    <CloseBtn onClick={hideFunc}>×</CloseBtn>
                    {profile.spot !== 'member' && <ManagerTag spot={profile.spot}></ManagerTag>}
                    <Topbox>
                        <ProfileImg img={profile.Img} style={{ width: '20vh', height: '20vh' }} />
                        <PopUpContent>
                            <PopUpName>
                                {profile.name}
                                <Smaller>&nbsp;&nbsp;-&nbsp;&nbsp;{profile.currentSchoolID}</Smaller>
                            </PopUpName>
                            <PhoneNum>{profile.phoneNum}</PhoneNum>
                            <Email>{profile.email}</Email>
                            <IntroductionTitle>Introduction</IntroductionTitle>
                            <Hr />
                            <Introduction>{profile.introduction}</Introduction>
                        </PopUpContent>
                    </Topbox>
                </PopUpCard>
            </PopUp>
        </>
    );
};

Profile.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profileImg: PropTypes.string,
    blogUrl: PropTypes.string,
    spot: PropTypes.string,
};

export default Profile;
