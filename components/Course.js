import React from "react";
import styled from "styled-components";

const Course = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} resizeMode="contain" />
      <Subtitle>{props.subtitle}</Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={require("../assets/avatar.jpg")} />
      <Wrapper>
        <Caption>{props.caption}</Caption>
        <Author>Taught by {props.author}</Author>
      </Wrapper>
    </Content>
  </Container>
);

export default Course;

const Container = styled.View`
  background: white;
  width: 335px;
  height: 335px;
  border-radius: 14px;
  margin: 10px 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end; /* pushes content to bottom */
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  top: 20px;
  position: absolute;
  left: 50%;
  margin-left: -24px;
`;

const Subtitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 15px;
  margin-left: 20px;
  text-transform: uppercase;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 170px;
`;

const Content = styled.View`
  padding-left: 62px;
  justify-content: center;
  height: 75px;
`;

const Wrapper = styled.View`
  /* background-color: yellow; */
  margin-left: 8px;
  margin-right: 20px;
  /* width: 250px; */
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 20px;
  left: 0;
`;

const Caption = styled.Text`
  color: #3c4560;
  opacity: 0.8;
  font-size: 13px;
  font-weight: 600;
`;

const Author = styled.Text`
  color: #b8bece;
  font-size: 13px;
  font-weight: 500;
  margin-top: 4px;
`;
