import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Section = styled('section')`
    height: 90vh;
    margin: 0 15vw;
    padding-top: 10vh;
    @media screen and (max-width: 800px) {
        margin: 0 5vw;
    }
    display: flex;
    flex-direction: row;
`;

const Svgimg = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-end;
`;

const H1 = styled.h1`
    font-size: 60px;
    font-weight: 600;
    @media screen and (max-width: 800px) {
        width: 100%;
        text-align: center;
    }
`;

const Description = styled.p`
    margin: 50px 0px;
    font-size: 25px;
    line-height: 1.2em;
    width: 90%;
`;

const JoinSLink = styled.span`
    font-size: 20px;
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: all 0.5s;
    margin: 0 10px;
`;

const Button = styled.button`
    margin-right: 10px;
    border-radius: 8px;
    background-color: black;
    border: none;
    color: #fcfbfb;
    text-align: center;
    padding: 15px 20px;
    transition: all 0.5s;
    float: right;
    cursor: pointer;
    ${JoinSLink}:after {
        content: '»';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }
    &:hover ${JoinSLink} {
        padding-right: 20px;
        margin: 0px;
    }
    &:hover ${JoinSLink}:after {
        opacity: 1;
        right: 2px;
    }
`;

const SLink = styled(Link)`
    margin-right: 10px;
    display: block;
    box-sizing: border-box;
    border: 3px solid black;
    border-radius: 8px;
    background-color: white;
    color: #fcfbfb;
    text-align: center;
    padding: 15px 20px;
    transition: all 0.5s;
    cursor: pointer;
    ${JoinSLink} {
        color: black;
    }
    ${JoinSLink}:after {
        content: ' ↗';
        font-weight: 600;
        position: absolute;
        opacity: 0;
        top: 0;
        right: -30px;
        transition: 0.5s;
    }
    &:hover ${JoinSLink} {
        padding-right: 20px;
        margin: 0px;
    }
    &:hover ${JoinSLink}:after {
        opacity: 1;
        right: -5px;
    }
`;

const JoinButton = ({ children }) => (
    <Button>
        {/*onClick={() => window.open('https://forms.gle/uR4rX1nF4HTttaSX7', '_blank') } */}
        <JoinSLink>{children}</JoinSLink>
    </Button>
);

const PageButton = ({ children }) => (
    <SLink to="/about">
        <JoinSLink>{children}</JoinSLink>
    </SLink>
);

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 400px) {
        display: block;
        margin-right: -10px;
        ${SLink} {
            margin-bottom: 10px;
        }
    }
`;

const Header = styled.div`
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    @media screen and (max-width: 800px) {
        align-items: flex-end;
        margin-bottom: 0;
        ${Description} {
            width: 100%;
        }
        ${H1} {
            width: 100%;
            text-align: center;
        }
    }
`;

const GridBlock = styled.div`
    height: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const GridContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 3vw;
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        ${GridBlock} {
            &:nth-child(1) {
                order: 2;
            }
            &:nth-child(2) {
                order: 1;
            }
            ${Svgimg} {
                align-items: flex-start;
            }
        }
    }
`;

export default () => (
    <Section>
        <Helmet>
            <title>MAKER</title>
        </Helmet>
        <GridContainer>
            <GridBlock>
                <Svgimg>
                    <svg width="250" height="340" viewBox="0 0 250 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Head/Front">
                            <g id="Head">
                                <path
                                    id="Head 2"
                                    d="M97.7781 56.3578C104.314 60.2735 110.736 62.1653 113.75 61.393C121.309 59.4564 122.004 31.971 116.155 21.1353C110.307 10.2998 80.2399 5.57694 78.725 27.0457C78.1992 34.4968 81.3461 41.1465 85.9968 46.5725L77.6582 85.2053H101.881L97.7781 56.3578Z"
                                    fill="white"
                                    stroke="#111111"
                                    stroke-width="4"
                                />
                            </g>
                            <path
                                id="Hair"
                                d="M84.1357 51.4052C81.0958 37.9615 72.4352 28.7972 73.7574 22.7884C75.0805 16.7796 80.8082 15.315 80.8082 15.315C80.8082 15.315 83.7714 3.40223 99.9188 5.18109C116.066 6.95994 125.921 13.6253 121.665 28.2921C117.753 28.2921 113.029 26.8857 106.499 29.2953C103.391 30.4421 102.052 36.408 102.052 36.408H99.1013C99.1013 36.408 94.8048 29.3281 90.6284 31.2047C86.452 33.0812 88.73 40.3211 88.73 40.3211L87.2756 51.4052H84.1357Z"
                                fill="black"
                            />
                        </g>
                        <g id="Bottom/Sitting/Skinny Jeans 1">
                            <g id="Seat">
                                <g id="Seat 2">
                                    <path
                                        id="Seat Stuff"
                                        d="M33.8788 210.604H111.85L122.067 335H6L33.8788 210.604Z"
                                        fill="white"
                                        stroke="#111111"
                                        stroke-width="4"
                                    />
                                </g>
                            </g>
                            <path
                                id="Skin"
                                d="M154.689 235.249C145.928 253.719 132.237 298.556 132.237 298.556L143.86 303.835C143.86 303.835 173.352 256.703 191.376 224.484C190.536 231.737 189.681 239.903 188.889 248.488C187.01 268.822 188.888 312.756 189.898 325.447C190.533 333.423 201.436 331.752 202.453 325.427C202.626 324.355 203.328 320.593 204.377 314.981C209.517 287.462 222.97 215.438 222.994 197.802C223.003 190.706 209.056 184.331 200.743 189.292C195.032 183.236 184.226 179.746 178.017 189.75C174.07 196.11 164.691 214.166 154.689 235.249Z"
                                fill="white"
                                stroke="#111111"
                                stroke-width="4"
                            />
                            <path
                                id="LegLower"
                                d="M133.068 281.956L172.961 188.019C182.519 172.739 209.314 191.129 206.055 199.993C198.655 220.114 161.025 285.256 158.819 291.251L133.068 281.956Z"
                                fill="white"
                                stroke="#111111"
                                stroke-width="4"
                            />
                            <g id="Right Shoe">
                                <path
                                    id="shoe"
                                    d="M133.839 293.052C133.139 292.105 131.786 291.88 130.882 292.636C129.231 294.016 126.859 296.14 126.002 297.615C124.637 299.965 122.806 304.925 122.806 304.925C125.549 306.499 172.104 333.216 172.104 333.216C172.104 333.216 177.694 328.005 173.846 325.126C169.998 322.245 167.496 320.268 167.496 320.268L150.48 296.966C150.146 296.509 149.498 296.415 149.048 296.76L145.512 299.466C145.512 299.466 140.646 299.045 138.25 297.669C136.791 296.832 135.01 294.639 133.839 293.052Z"
                                    fill="white"
                                    stroke="#111111"
                                    stroke-width="4"
                                />
                            </g>
                            <g id="Right Shoe 2">
                                <path
                                    id="shoe 2"
                                    d="M190.142 319.234C189.06 318.761 187.774 319.24 187.372 320.344C186.637 322.358 185.651 325.378 185.651 327.081C185.651 329.794 186.56 335 186.56 335C189.727 335 243.485 335 243.485 335C243.485 335 245.705 327.709 240.924 327.127C236.143 326.546 232.981 326.078 232.981 326.078L206.523 314.353C206.003 314.123 205.395 314.364 205.178 314.887L203.478 318.988C203.478 318.988 199.052 321.041 196.286 321.041C194.601 321.041 191.955 320.026 190.142 319.234Z"
                                    fill="white"
                                    stroke="#111111"
                                    stroke-width="4"
                                />
                            </g>
                            <path
                                id="Leg and Butt"
                                d="M225.79 205.019C225.79 231.671 213.057 293.839 213.049 299.708L185.651 299.729C185.651 299.729 191.666 216.521 189.917 215.624C188.167 214.728 118.207 222.567 97.2245 222.567C66.9684 222.567 54.4514 203.602 53.436 168.47H113.373C125.577 169.768 189.233 182.53 212.873 186.917C222.994 188.796 225.79 197.678 225.79 205.019Z"
                                fill="white"
                                stroke="#111111"
                                stroke-width="4"
                            />
                        </g>
                        <g id="left arm">
                            <g id="Hand">
                                <path
                                    d="M122.711 105.971L157.743 86.9007C163.568 80.0243 169.308 74.684 174.962 70.8795C176.69 70.1626 179.711 69.7287 176.886 74.7134C174.06 79.6982 171.313 85.0679 172.753 86.6037C174.193 88.1386 177.782 85.9938 179.499 88.5449C180.644 90.2463 174.512 92.9339 161.103 96.6066L135.648 111.69"
                                    fill="white"
                                />
                                <path
                                    d="M122.711 105.971L157.743 86.9007C163.568 80.0243 169.308 74.684 174.962 70.8795C176.69 70.1626 179.711 69.7287 176.886 74.7134C174.06 79.6982 171.313 85.0679 172.753 86.6037C174.193 88.1386 177.782 85.9938 179.499 88.5449C180.644 90.2463 174.512 92.9339 161.103 96.6066L135.648 111.69"
                                    stroke="#111111"
                                    stroke-width="4"
                                />
                            </g>
                            <path
                                id="Sleeve"
                                d="M105.65 101.723C117.921 101.594 134.283 99.0182 151.741 88.0032L158.598 103.202C146.556 115.08 129.622 124.841 114.816 124.428C103.148 124.102 97.185 110.073 105.65 101.723Z"
                                fill="white"
                                stroke="#111111"
                                stroke-width="4"
                            />
                        </g>
                        <path
                            id="Clothes Jacket"
                            d="M43.8204 204.19C62.06 200.62 116.309 218.754 125.573 199.174C143.897 160.445 109.89 106.847 106.467 63.1351H78.4628C75.3916 63.1351 54.5207 102.904 54.5016 128.741C54.4834 152.333 32.3978 167.318 43.8204 204.19Z"
                            fill="white"
                            stroke="black"
                            stroke-width="4"
                        />
                        <g id="right arm">
                            <path
                                id="Hand 2"
                                d="M177.577 122.063L192.965 113.66C192.965 113.66 196.203 101.411 200.707 101.334C203.014 100.267 198.998 110.586 203.37 109.691C207.743 108.796 218.416 100.906 220.255 102.508C222.976 104.878 220.55 112.155 217.691 115.776C212.349 122.542 207.927 124.855 196.993 127.885C188.419 130.262 178.453 137.411 178.453 137.411L177.577 122.063Z"
                                fill="white"
                                stroke="#111111"
                                stroke-width="4"
                            />
                            <path
                                id="Sleeve 2"
                                d="M102.386 79.1861C102.386 79.1861 100.878 118.938 119.901 125.432C138.925 131.926 187.706 114.672 187.706 114.672C187.706 114.672 199.115 138.132 198.254 148.122C89.9081 204.376 44.0456 148.281 78.0491 79.1861C84.8041 67.9443 98.1135 60.1855 102.386 79.1861Z"
                                fill="white"
                                stroke="#111111"
                                stroke-width="4"
                            />
                        </g>
                    </svg>
                </Svgimg>
            </GridBlock>
            <GridBlock>
                <Header>
                    <H1>MAKER</H1>
                    <Description>메이커 동아리는 코딩, 모델링, 3d 프린팅을 포함한 복합적인 maker 활동을 하는 동아리입니다.</Description>
                    <ButtonContainer>
                        <PageButton>자세히 알아보기</PageButton>
                        <JoinButton>가입하기</JoinButton>
                    </ButtonContainer>
                </Header>
            </GridBlock>
        </GridContainer>
    </Section>
);
