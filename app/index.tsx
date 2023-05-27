import { Text, View } from 'react-native';
import { Header } from '../src/components/Header';
import FloatingButton from '../src/components/FloatingButton';

const Home = () => {
    return (
        <View className='flex-1'>
            <Header />
            <FloatingButton />
        </View>
    );
}

export default Home;