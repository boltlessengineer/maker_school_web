import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Profile = styled.div`
    background-color: white;
    height: auto;
    background-color: #fff;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 10px 21px #e7eeef;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    &:hover {
        transition: transform 0.5s ease;
        transform: translateY(-5px);
    }
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

const Poster = ({ id, name, profileImg, blogUrl, spot }) => {
    console.log(profileImg);
    return (
        <Profile>
            <ProfileImg img={profileImg} />
            <ProfileContent>
                <PersonName>{name}</PersonName>
                {blogUrl && <BlogLink blogUrl={blogUrl}>Blog</BlogLink>}
            </ProfileContent>
        </Profile>
    );
};

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    /*profileImg: PropTypes.string,*/
    blogUrl: PropTypes.string,
    spot: PropTypes.string.isRequired,
};

export default Poster;
