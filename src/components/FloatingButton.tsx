import { Pressable } from "react-native";

import StyledFeather from "./Feather";

type FloatingButtonProps = {
    PressFunction: () => void,
    Icon: any,
}

const FloatingButton = ({ PressFunction, Icon }: FloatingButtonProps) => {
    return (
        <Pressable
            onPress={PressFunction}
            className="absolute items-center justify-center bottom-2 right-2 rounded-full bg-main shadow-lg p-3"
        >
            <StyledFeather name={Icon} size={26} className="text-darkText" />
        </Pressable>
    );
}

export default FloatingButton;