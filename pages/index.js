import { Fragment, useState } from "react";
import Header from "../Components/shared/Header";
import { Text, Input, Button } from "@nextui-org/react";
const Home = () => {
  const [city, setCity] = useState("");
  return (
    <Fragment>
      <div className="App">
        <Header />
        <div
          className=" mt-2 mb-2 text-center width-600 m-auto"
          style={{ alignItems: "center", padding: "4rem 0rem" }}
        >
          <div className="mt-3 mb-1">
            <span><Input
              labelPlaceholder="City Name"
              value={city}
              style={{ color: "black", fontWeight: "400", display: "inline" }}
              onChange={(e) => setCity(e.target.value)}
            /></span>
            <span><Button color="warning" auto ghost style={{ display: "inline", margin: "0rem 1rem" }}
              onPress={() => { console.log(city) }}>
              Get
            </Button></span>
          </div>
          <p className="text-2 m-0" style={{ color: "black" }}>
            The
          </p>
          <span>
            <span>
              <Text
                className="m-0 text-4"
                size={60}
                css={{
                  textGradient: "45deg, $yellow500 -20%, $yellow700 100%",
                  fontWeight: "900",
                  display: "inline",
                }}
              >
                Weather
              </Text>
                <span>
                  <Text
                    className="m-0 text-4"
                    size={60}
                    css={{
                      textGradient: "45deg, $gray50 -20%, $gray200 100%",
                      fontWeight: "200",
                      display: "inline",
                    }}
                  >
                    Application
                  </Text>
                </span>
            </span>
          </span>
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
