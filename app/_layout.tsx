import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useColorScheme } from 'nativewind';

import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
    useFonts,
    Rubik_400Regular,
    Rubik_700Bold,
} from '@expo-google-fonts/rubik';


const RootLayout = () => {

    const { bottom, top } = useSafeAreaInsets();

    const { setColorScheme } = useColorScheme();

    setColorScheme('dark');

    const [hasloadedFonts] = useFonts({
        Rubik_400Regular,
        Rubik_700Bold,
    })

    if (!hasloadedFonts) {
        return <SplashScreen />
    }

    return (
        <View
            className='flex-1 bg-zinc-100 dark:bg-zinc-900'
            style={{ paddingBottom: bottom, paddingTop: top }}
        >
            <StatusBar style="light" />
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: 'transparent' },
                    animation: 'fade',
                }}
            >
                <Stack.Screen name="index" />
            </Stack>
        </View>
    )
}

export default RootLayout;