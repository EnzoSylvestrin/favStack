import { View } from 'react-native';

import { Header } from '../src/components/Header';

import FloatingButton from '../src/components/FloatingButton';
import ListCard from '../src/components/ListCard';
import { useRouter } from 'expo-router';

type ItemsProps = {
    title: string,
    values: string[],
}

const Home = () => {

    const router = useRouter();

    const HandleNew = () => {
        router.push('/blackboard');
    }

    const HandlePressDetails = (item: ItemsProps, i: number) => {
        router.push({ pathname: '/blackboard', params: { title: item.values[i] } })
    }

    const items: ItemsProps[] = [
        {
            title: 'List 1',
            values: [
                "item1",
                "item2",
                "item3",
                "item4",
                "item5",
            ]
        },
        {
            title: 'TODOs',
            values: [
                "Lavar a louça",
                "Andar com o cachorro"
            ]
        }
    ]

    return (
        <View className='flex-1'>
            <Header />
            <FloatingButton Icon='plus' PressFunction={HandleNew} />
            {
                items.map((item, i) => {
                    return (
                        <ListCard key={i} title={item.title} onPress={() => HandlePressDetails(item, i)} items={item.values} />
                    )
                })
            }
        </View>
    );
}

export default Home;