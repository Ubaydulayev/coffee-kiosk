import styled from "styled-components";

const StyleProduct = styled.div`
    .head {
      padding: 50px;
      .left {
        a {
          text-decoration: none;
          color: black;
        }
      }
      .right {
        position: relative;
        .victor {
          background-color: #ac8f64;
          padding: 25px;
          border-radius: 50%;
        }
        .title {
          color: #483431 !important;
          width: 100%;
          margin-top: 25px;
        }
      }
    }
    .content {
      margin-left: 100px;
      .mainTitle {
        font-family: "Rosarivo", sans-serif;
        font-size: 68px;
        margin: 0;
      }
      .title {
        width: 84%;
      }
      .size {
        .cup {
          width: 120px;
          height: 120px;
          border-radius: 30px;
          margin-right: 30px;
          transition: 0.1s;
          .cups {
            margin: 20px 0px 10px 38px;
          }
          h5 {
            text-align: center;
          }
        }
        .cup:hover {
          transition: 0.1s;
          border: 2px solid black;
          color: AC8F64;
        }
      }
      .extra {
        .taste {
          padding: 15px 50px;
          margin-right: 20px;
          border-radius: 30px;
          transition: 0.1s;
          h5 {
            margin: 0;
          }
        }
        .taste:hover {
          transition: 0.1s;
          background: #ac8f64;
          border: 2px solid black;
        }
      }
    }
  
`;

export default StyleProduct;
