import styled from "styled-components";

const StyleDash = styled.div`
  display: flex;
  padding: 10px 50px;
  .head {
    color: white;
    margin: 50px 130px;
    .victor {
      background-color: #ac8f64;
      padding: 25px;
      border-radius: 50%;
      margin-left: 90px;
    }
    .form-control {
      margin-left: 150px;
      width: 60% !important;
      border-radius: 30px !important;
    }
    .title {
      color: #483431 !important;
      position: absolute;
      margin-top: 25px;
      margin-left: 165px;
    }
  }
  .dash {
    position: fixed;
    z-index: 1000;
    .logo {
      background-color: #ac8f64;
      border-radius: 50%;
      margin: 10px 50px;
    }
    .dashboard {
      height: 650px;
      border-radius: 30px;
      padding: 30px 50px;
      background: white;
      color: #665050;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      a {
        text-decoration: none;
        color: #483431;
        h2 {
          margin-bottom: 85px;
          transition: 1s;
        }
      }

      h2:hover {
        background: #ac8f64;
        transition: 1s;
        border: 1px solid #483431;
        color: #483431;
        padding: 10px 0px;
        border-radius: 10px;
      }
    }
  }

  .body {
    padding: 10px 0px 10px 280px;
    .col-4 {
      margin-bottom: 30px;
    }
    .card {
      width: 100%;
      border-radius: 30px;
      transition: 1s;

      .price {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .card:hover {
      border: 5px solid #ac8f64;
      transition: 1s;
    }
  }
`;

export default StyleDash;
