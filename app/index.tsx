import { View } from 'react-native';

import { Header } from '../src/components/Header';

import FloatingButton from '../src/components/FloatingButton';

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