import { View } from 'react-native';

type ListCardProps = {
    items: string[],
}

const ListCard = ({ items }: ListCardProps) => {

    if (items.length === 0) {
        return null;
    }

    return (
        <View className='px-1'>
            {/* header */}
            <View>

            </View>
            {/* items */}
            <View>

            </View>
        </View>
    );

}

export default ListCard;