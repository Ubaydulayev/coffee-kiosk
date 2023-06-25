import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import cofe1 from "./cofe1.png";
import cofe2 from "./cofe2.png";
import cofe3 from "./cofe3.png";
import victor from "./img.png";
import logo from "./logo.png";
import StyleDash from "./StyleDash";
import { Rating } from '@mantine/core';
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <StyleDash>
      <section>
        <div className="dash">
          <div className="logo">
            <img src={logo} alt="" className="p-5" />
          </div>
          <div className="dashboard shadow">
            <div className="Cappuccino mt-4">
              <a href="/kiosk"><h2>Cappuccino</h2></a>
            </div>
            <div className="Latte">
              <a href="/kiosk"><h2>Latte</h2></a>
            </div>
            <div className="Americano">
              <a href="/kiosk">
                <h2>Americano</h2>
              </a>
            </div>
            <div className="Expresso">
              <a href="/kiosk"><h2>Expresso</h2></a>
            </div>
            <div className="Flat White">
              <a href="/kiosk"><h2>Flat White</h2></a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="head d-flex">
          <input
            className="form-control ps-5"
            placeholder="Browse your favourite coffee here.."
          ></input>
          <div className="right d-flex">
            <div className="victor">
              <img src={victor} alt="foto" />
            </div>
            <h4 className="title">ORDER STATUS</h4>
          </div>
        </div>
        <div className="body">
          <div className="row">
            <div className="col-4">
              <Card shadow="sm" className="card shadow">
              
                <Link component="a" to={"/product"}>
                  <Image src={cofe1} alt="Norway" />
                </Link>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Cinnamon and Cocoa</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group><Rating defaultValue={2} />
                <Text className="price">
                  ₹99
                  <Button
                    variant="light"
                    color="blue"
                    radius="md"
                    className="ms-1"
                  >
                    +
                  </Button>
                </Text>
              </Card>
            </div>
            <div className="col-4">
              <Card shadow="sm" className="card shadow">
                <Link component="a" to={"/product"}>
                  <Image src={cofe2} alt="Norway" />
                </Link>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Drizzled with Caramel</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group><Rating defaultValue={3} />
                <Text className="price">
                  ₹199
                  <Button
                    variant="light"
                    color="blue"
                    radius="md"
                    className="ms-1"
                  >
                    +
                  </Button>
                </Text>
              </Card>
            </div>
            <div className="col-4">
              <Card shadow="sm" className="card shadow">
                <Link component="a" to={"/product"}>
                  <Image src={cofe3} alt="Norway" />
                </Link>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Bursting Blueberry</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group><Rating defaultValue={2} />
                <Text className="price">
                  ₹120
                  <Button
                    variant="light"
                    color="blue"
                    radius="md"
                    className="ms-1"
                  >
                    +
                  </Button>
                </Text>
              </Card>
            </div>
            <div className="col-4">
              <Card shadow="sm" className="card shadow">
                <Link component="a" to={"/product"}>
                  <Image src={cofe1} alt="Norway" />
                </Link>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Dalgona  Macha</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group><Rating defaultValue={4} />
                <Text className="price">
                  ₹150
                  <Button
                    variant="light"
                    color="blue"
                    radius="md"
                    className="ms-1"
                  >
                    +
                  </Button>
                </Text>
              </Card>
            </div>
            <div className="col-4">
              <Card shadow="sm" className="card shadow">
                <Link component="a" to={"/product"}>
                  <Image src={cofe2} alt="Norway" />
                </Link>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Whipped chocolate</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group><Rating defaultValue={2} />
                <Text className="price">
                  ₹99
                  <Button
                    variant="light"
                    color="blue"
                    radius="md"
                    className="ms-1"
                  >
                    +
                  </Button>
                </Text>
              </Card>
            </div>
            <div className="col-4">
              <Card shadow="sm" className="card shadow">
                <Link component="a" to={"/product"}>
                  <Image src={cofe3} alt="Norway" />
                </Link>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Coco & Vanilla Cream  </Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group><Rating defaultValue={3} />
                <Text className="price">
                  ₹199
                  <Button
                    variant="light"
                    color="blue"
                    radius="md"
                    className="ms-1"
                  >
                    +
                  </Button>
                </Text>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </StyleDash>
  );
};

export default Dashboard;
