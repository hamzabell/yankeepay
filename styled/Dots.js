import styled from "styled-components/native";

export default styled.View`
  height: 8px;
  width: 30px;
  margin-right: 10px;
  background-color: ${(props) =>
    props.active ? props.activeColor : "rgba(225,224,236,0.8)"};
`;
