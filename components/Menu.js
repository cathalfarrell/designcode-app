import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { Animated, TouchableOpacity, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
  state = {
    top: new Animated.Value(screenHeight),
  };

  componentDidMount() {
    Animated.spring(this.state.top, { toValue: 0 }).start();
  }

  toggleMenu = () => {
    Animated.spring(this.state.top, { toValue: screenHeight }).start();
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover />
        <TouchableOpacity
          onPress={this.toggleMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1,
          }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={30} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content />
      </AnimatedContainer>
    );
  }
}

export default Menu;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;
