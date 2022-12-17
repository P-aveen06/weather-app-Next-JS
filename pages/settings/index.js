import React, {useState,useMemo} from "react";
import styles from "./settings.module.css"
import {Dropdown,Button} from "@nextui-org/react";

const Settings = () => {
    const [primary, setPrimary] = useState(new Set(["Primary color"]));
    const [secondary, setSecondary] = useState(new Set(["Secondary color"]));
    const [accent, setAccent] = useState(new Set(["Accent color"]));
    const Primary = useMemo(
        () => Array.from(primary).join(", ").replaceAll("_", " "),
        [primary]
    );
    const Secondary = useMemo(
        () => Array.from(secondary).join(", ").replaceAll("_", " "),
        [secondary]
    );
    const Accent = useMemo(
        () => Array.from(accent).join(", ").replaceAll("_", " "),
        [accent]
    );
    const colors = [
        {key: "#FFA3E5", name: "Pink"},
        {key: "#7EE7FC", name: "Blue"},
        {key: "#F31260", name: "Red"}
    ];
    return (
        <div className={styles.settings}>
            <div className={styles.text}>
                <span style={{color:Primary}}>The.</span>
                <span style={{color:Secondary}}>cloud.</span>
                <span style={{color:Accent}}>company</span></div>
            <div className={styles.colorSelect}>
                <div><Dropdown>
                    <Dropdown.Button flat color="warning" css={{tt: "capitalize"}}>
                        {Primary}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        aria-label="Single selection actions"
                        color="warning"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={primary}
                        onSelectionChange={setPrimary}
                        items={colors}
                    >

                        {(item) => (
                            <Dropdown.Item
                                key={item.key}
                                color={item.key === "delete" ? "error" : "default"}
                            >
                                {item.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown></div>
                <div>
                    <Dropdown>
                        <Dropdown.Button flat color="warning" css={{tt: "capitalize"}}>
                            {Secondary}
                        </Dropdown.Button>
                        <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="warning"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={secondary}
                            onSelectionChange={setSecondary}
                            items={colors}
                        >

                            {(item) => (
                                <Dropdown.Item
                                    key={item.key}
                                    color={item.key === "delete" ? "error" : "default"}
                                >
                                    {item.name}
                                </Dropdown.Item>
                            )}

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <Dropdown>
                        <Dropdown.Button flat color="warning" css={{tt: "capitalize"}}>
                            {Accent}
                        </Dropdown.Button>
                        <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="warning"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={accent}
                            onSelectionChange={setAccent}
                            items={colors}
                        >
                            {(item) => (
                                <Dropdown.Item
                                    key={item.key}
                                    color={item.key === "delete" ? "error" : "default"}
                                >
                                    {item.name}
                                </Dropdown.Item>
                            )}

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className={styles.button}>
               <Button  color="warning" auto>
                Set Colors
            </Button></div>
        </div>
    )
}
export default Settings;