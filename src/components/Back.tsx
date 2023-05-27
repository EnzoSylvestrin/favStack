import { useNavigation, useRouter } from "expo-router";

import { Pressable } from "react-native";

import { useColorScheme } from "nativewind";

import { ArrowLeft } from "phosphor-react-native";

type BackProps = {
    backUrl?: string,
}

const Back = ({ backUrl }: BackProps) => {

    const { colorScheme } = useColorScheme();

    const router = useRouter();

    const navigation = useNavigation();

    const HandleBackAction = () => {
        if (backUrl && navigation.isFocused()) {
            router.push(backUrl);
        }
        else if (navigation.canGoBack()) {
            router.back();
        }
    }

    return (
        <Pressable
            className=''
            onPress={HandleBackAction}
        >
            <ArrowLeft size={28} color={colorScheme === 'dark' ? '#fff' : '#000'} />
        </Pressable>
    );
}

export default Back;