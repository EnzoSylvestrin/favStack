import { useState } from 'react';

import { useRouter, useSearchParams } from 'expo-router';

import { View, TextInput, GestureResponderEvent } from 'react-native';

import { SparklesIcon } from 'react-native-heroicons/solid'

import FloatingButton from '../src/components/FloatingButton';
import { Header } from '../src/components/Header';
import Text from '../src/components/Text';
import { styled } from 'nativewind';

const StyledSparkle = styled(SparklesIcon);

type Params = {
    title?: string,
    content?: string
};

const BlackBoard = () => {

    const [buttonPosition, setButtonPosition] = useState<{ x: number, y: number }>({
        x: 0,
        y: 0
    });

    const params = useSearchParams<Params>();

    const { title, content } = params;

    const router = useRouter();

    const HandleSave = () => {
        //TODO: Save the content and title
        router.push('/');
    }

    const handlePress = (e: GestureResponderEvent) => {
        const { locationX, locationY } = e.nativeEvent;
        setButtonPosition({ x: parseInt(locationX.toFixed(0)), y: parseInt(locationY.toFixed(0)) });
    };

    return (
        <View className='flex-1'>
            <Header Details title={title} />
            <View
                className='flex-1 px-2 py-3'
            >
                <TextInput
                    className="flex-1 text-zinc-900 text-lg dark:text-gray-50"
                    value={content && 'Digite algo'}
                    multiline
                    textAlignVertical="top"
                    cursorColor={'#8a2be2'}
                    onTouchEnd={handlePress}
                />
                {buttonPosition && (
                    <View
                        style={{ left: buttonPosition.x, top: buttonPosition.y }}
                        className='absolute px-2 py-3 flex-row bg-zinc-700 justify-center items-center'
                    >
                        <StyledSparkle size={19} className='text-main mr-1.5' />
                        <Text textStyles="text-white">Pergunte a IA</Text>
                    </View>
                )}
                <FloatingButton Icon='save' PressFunction={HandleSave} />
            </View>
        </View>
    );
}

export default BlackBoard;