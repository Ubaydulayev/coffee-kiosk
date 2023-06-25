import { Link } from "react-router-dom";
import back from "./back.png";
import StyleCart from "./StyleCart";
import cofe1 from "./cofe1.svg";
import cofe2 from "./cofe2.svg";
import cofe3 from "./cofe3.svg";
import { Button } from "@mantine/core";

const Cart = () => {
  return (
    <StyleCart>
      <div className="body shadow">
        <div className="head mt-3 d-flex align-items-center justify-content-between">
          <div className="left">
            <Link to={"/kiosk"}>
              <img src={back} alt="" className="me-3 w-25" />
              BACK TO MENU
            </Link>
          </div>
          <div className="right d-flex">
            <h4 className="title">ORDER STATUS</h4>
          </div>
        </div>
        <div className="proccess mt-5">
          <div className="d-flex justify-content-between">
            <h4>Ordered</h4> <p>JUST NOW</p>
          </div>
          <div className="d-flex align-items-center">
            <img src={cofe1} alt="" />
            <p>Cinnamon and Cocoa</p>
            <p className="red">2</p>
          </div>
          <div className="d-flex justify-content-between">
            <h4>Preparing</h4>
            <p>12 MINS AGO</p>
          </div>
          <div className="d-flex align-items-center">
            <img src={cofe2} alt="" />
            <p>Drizzled with Caramel</p> <p className="red">1</p>
          </div>
          <div className="d-flex align-items-center">
            <img src={cofe3} alt="" />
            <p>The green</p>
            <p className="red">1</p>
          </div>
        </div>
        <div className="check mt-5">
          <div className="d-flex justify-content-between">
            <h5>Subtotal</h5>
            <p>₹456.90</p>
          </div>
          <div className="d-flex justify-content-between">
            <h5>Discount -10%</h5>
            <p>₹45.69</p>
          </div>
          <div className="d-flex justify-content-between">
            <h3>Total</h3>
            <p>₹411.21</p>
          </div>
        </div>
        <Link to={"/thanks"}>
          <Button
            fullWidth="100"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
          >
            Pay
          </Button>
        </Link>
      </div>
    </StyleCart>
  );
};

export default Cart;
