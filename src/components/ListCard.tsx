import { useState } from 'react';

import { View, TouchableOpacity } from 'react-native';

import Text from './Text';
import StyledFeather from './Feather';

type ListCardProps = {
    title: string,
    items: string[],
    onPress: () => void;
}

const ListCard = ({ title, items, onPress }: ListCardProps) => {

    const [toggled, setToggled] = useState(false);

    if (items.length === 0) {
        return null;
    }

    return (
        <TouchableOpacity activeOpacity={1} className='px-2 gap-1 w-full mt-2' onPress={onPress}>
            <TouchableOpacity activeOpacity={1} className='flex-row justify-between items-center' onPress={() => setToggled(prevValue => !prevValue)}>
                <Text textStyles="!text-gray-500 text-xl" asHeading>{title}</Text>
                <View className='flex-row gap-3 items-center'>
                    <StyledFeather name={toggled ? 'arrow-down' : 'arrow-up'} className='text-gray-500' size={22} />
                </View>
            </TouchableOpacity>
            {
                !toggled &&
                <View className='border-l border-l-gray-500 pl-1'>
                    {
                        items.map((item, i) => {
                            return (
                                <View key={i} className='w-full p-3'>
                                    <Text>{item}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            }
        </TouchableOpacity>
    );

}

export default ListCard;