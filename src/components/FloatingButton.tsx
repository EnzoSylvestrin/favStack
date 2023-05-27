import { Plus } from "phosphor-react-native";
import { Pressable, View } from "react-native";

const FloatingButton = ({ PressFunction }: { PressFunction: () => void }) => {
    return (
        <Pressable
            onPress={PressFunction}
            className="absolute items-center justify-center bottom-2 right-2 rounded-full bg-purple-700 p-3"
        >
            <Plus size={26} color="#fff" />
        </Pressable>
    );
}

export default FloatingButton;