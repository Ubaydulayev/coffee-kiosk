import styled from "styled-components";

const Style = styled.div`
  .body {
    top: 10%;
    position: absolute;
    right: 25%;
    padding: 20px;
    border-radius: 30px;
    .video {
        border-radius: 30px;
        padding: 20px;
        .vid {
            border-radius: 30px;
        }
    }
    .title {
        font-weight: bold;
        color: black;
        text-align: center;
        margin-top: 50px;
        font-size: 36px;
        text-decoration: none;
    }
  }
  .thanks {
    color: green;
    font-weight: bold;
    font-size: 86px;
    p {
      font-size: 44px;
      color: gray;
    }
    a {
      text-decoration: none;
      color: orange;
      font-size: 55px;
    }
  }
`;

export default Style;
