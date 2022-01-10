import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: (name) =>
      dispatch({
        type: "UPDATE_NAME",
        name: name,
      }),
  };
}

class Avatar extends React.Component {
  state = {
    photo:
      "https://p40.f3.n0.cdn.getcloudapp.com/items/yAukvE71/af02ba3e-45ad-4cd8-a4c2-48a6f5448cbb.jpg?v=4aadcdbdffe209bbd523530a75351afd",
  };

  componentDidMount() {
    fetch("https://uifaces.co/api?limit=1&random&gender[]=male", {
      headers: new Headers({
        "X-API-KEY": "dbfa0e3e2ec8eaa41fbc4d65d0a7c9",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          photo: response[0].photo,
        });
        this.props.updateName(response[0].name);
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
