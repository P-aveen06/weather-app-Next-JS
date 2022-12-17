import {Text} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
const Header = () => {
  return (
    <div>
      <div className="m-auto header flex  justify-between">
        <div>
        <Text
                className="m-0 text-2"
                // size={60}
                css={{
                  textGradient: "45deg, $gray900 -20%, $gray800 100%",
                  fontWeight: "200",
                  display: "inline",
                }}
              >
                The Cloud Company
              </Text>
        </div>
        <div className="flex width-400 justify-around align-center">
        <Button color="warning" auto shadow  style={{display:"inline",margin:"0rem 1rem"}}>
            Home
          </Button>
          <Button color="warning" auto shadow  style={{display:"inline",margin:"0rem 1rem"}}>
            Settings
          </Button>
          <Button color="warning" auto shadow  style={{display:"inline",margin:"0rem 1rem"}}>
            About
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Header;
