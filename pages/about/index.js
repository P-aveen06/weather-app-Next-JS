import styles from './about.module.css'
import {Text} from "@nextui-org/react";

const Index = () => {
    return (
        <div className={styles.about}>
            <Text className="text"
                  size={60}
                  css={{
                      textGradient: "45deg, $yellow500 -20%, $yellow800 100%",
                      fontWeight: "900",
                      display: "inline"}}> AboutUs </Text>
                      <p className={styles.aboutPara}>Software is our craft and passion. We, at The Cloud Company, develop innovative solutions to solve your
                      business problems.</p>
                      </div>
                      )
                  };
                      export default Index
