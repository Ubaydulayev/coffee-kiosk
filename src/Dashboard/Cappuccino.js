import StyleProduct from "./StyleProduct";
import back from "./back.png";
import victor from "./img.png";
import img from "./Imgcofe.png";
import cup from "./cup.png";
import { Link } from "react-router-dom";
import { Button, Group, Text, Radio } from "@mantine/core";
import { useCounter } from "@mantine/hooks";

const Cappuccino = () => {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });
  return (
    <StyleProduct>
      <section>
        <div className="head d-flex align-items-center justify-content-between">
          <div className="left">
            <Link to={"/"}>
              <img src={back} alt="" className="me-3" />
              BACK TO MENU
            </Link>
          </div>
          <div className="right d-flex">
            <div className="victor">
              <img src={victor} alt="foto" />
            </div>
            <h4 className="title">ORDER STATUS</h4>
          </div>
        </div>
      </section>
      <section className="d-flex">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="content">
          <div className="title">
            <p className="mainTitle">Cinnamon and Cocoa</p>
            <p className="title">
              A single espresso shot poured into hot foamy milk, with the
              surface topped with mildly sweetened cocoa powder and drizzled
              with scrumptious caramel syrup.
            </p>
          </div>
          <div className="size">
            <p>SIZE</p>{" "}
            <div className="d-flex">
              <div className="shadow cup">
                <img src={cup} alt="" className="cups" />
                <h5>SHORT</h5>
              </div>
              <div className="shadow cup">
                <img src={cup} alt="" className="cups" />
                <h5>TALL</h5>
              </div>
              <div className="shadow cup">
                <img src={cup} alt="" className="cups" />
                <h5>GRANDE</h5>
              </div>
              <div className="shadow cup">
                <img src={cup} alt="" className="cups" />
                <h5>VENTI</h5>
              </div>
            </div>
          </div>
          <div className="extra mt-4">
            <p>EXTRA</p>
            <Radio.Group>
              <Group mt="xs">
                <Radio value="react" label="SUGAR" />
                <Radio value="svelte" label="MILK" />
              </Group>
            </Radio.Group>
          </div>
          <div className="extra mt-4">
            <p>MILK TYPE</p>
            <Radio.Group>
              <Group mt="xs">
                <Radio value="react" label="OAT MILK" />
                <Radio value="svelte" label="SOY MILK" />
                <Radio value="ng" label="ALMOND MILK" />
              </Group>
            </Radio.Group>
          </div>
          <div className="price mb-4">
            <div className="d-flex align-items-center">
              <h1 className="me-3">₹99</h1>
              <Text>Count: {count}</Text>
            </div>
            <Group position="">
              <Button onClick={handlers.decrement}>-</Button>
              <Button onClick={handlers.increment}>+</Button>
            </Group>
          </div>
          <Link to={"/cart"}>
            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
            >
              PLACE ORDER
            </Button>
          </Link>
        </div>
      </section>
    </StyleProduct>
  );
};

export default Cappuccino;
