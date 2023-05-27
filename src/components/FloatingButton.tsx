import { Pressable } from "react-native";

import { styled } from "nativewind";

import { Feather } from '@expo/vector-icons'

const StyledFeather = styled(Feather);

const FloatingButton = ({ PressFunction }: { PressFunction: () => void }) => {
    return (
        <Pressable
            onPress={PressFunction}
            className="absolute items-center justify-center bottom-2 right-2 rounded-full bg-main shadow-lg p-3"
        >
            <StyledFeather name="plus" size={26} className="text-darkText" />
        </Pressable>
    );
}

export default FloatingButton;