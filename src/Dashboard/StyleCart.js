import styled from "styled-components";

const StyleCart = styled.div`
.body {
    top: 10%;
    right: 35%;
    position: absolute;
    width: 30%;
    padding: 20px;
    border-radius: 30px;
    .head {
        a {
            text-decoration: none;
            color: black;
        }
    }
    .proccess {
        img {
            width: 100px;
        }
        .red {
            padding: 5px 13px;
            background: orange;
            border-radius: 50%;
        }
        p {
            margin-bottom: 0;
            margin-left: 10px;
            font-weight: bold;
        }
    }
}
`;

export default StyleCart;