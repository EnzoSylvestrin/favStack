import { useColorScheme } from 'nativewind';

import { Sun, MoonStars } from 'phosphor-react-native';

import { Pressable } from 'react-native';

export const Theme = () => {

    const { colorScheme, toggleColorScheme } = useColorScheme();

    const Icon = colorScheme === 'dark' ? Sun : MoonStars;

    return (
        <Pressable
            className=''
            onPress={toggleColorScheme}
        >
            <Icon size={28} color={colorScheme === 'dark' ? '#fff' : '#000'} />
        </Pressable>
    );
}