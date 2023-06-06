import { useRouter, useSearchParams } from 'expo-router';

import { View, TextInput } from 'react-native';

import { Header } from '../src/components/Header';
import FloatingButton from '../src/components/FloatingButton';
import StyledFeather from '../src/components/Feather';

type Params = {
    title?: string,
    content?: string
};

const BlackBoard = () => {

    const params = useSearchParams<Params>();

    const { title, content } = params;

    const router = useRouter();

    const HandleSave = () => {
        //TODO: Save the content and title
        router.push('/');
    }

    return (
        <View className='flex-1'>
            <Header Details title={title} />
            <View className='flex-1 px-2 py-3'>
                <TextInput
                    className="flex-1 text-zinc-900 text-lg dark:text-gray-50"
                    value={content && 'Digite algo'}
                    multiline
                    textAlignVertical="top"
                    cursorColor={'#8a2be2'}
                />
                <FloatingButton Icon='save' PressFunction={HandleSave} />
            </View>
        </View>
    );
}

export default BlackBoard;