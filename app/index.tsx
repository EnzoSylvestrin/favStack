import { View } from 'react-native';

import { Header } from '../src/components/Header';

import FloatingButton from '../src/components/FloatingButton';
import Text from '../src/components/Text';

const Home = () => {

    const HandlePress = () => {
    }

    return (
        <View className='flex-1'>
            <Header />
            <FloatingButton PressFunction={HandlePress} />
        </View>
    );
}

export default Home;