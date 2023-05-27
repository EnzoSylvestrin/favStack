import { Text, View } from 'react-native';

import { Theme } from "./Theme";
import Back from './Back';

type Props = {
  back?: boolean,
  backUrl?: string,
}

export const Header = ({ back, backUrl }: Props) => {
  return (
    <View
      className='p-3 flex-row justify-between items-center border-b border-b-purple-500 bg-zinc-200 dark:bg-zinc-800'
    >
      {back && <Back backUrl={backUrl} />}
      <Text className='font-body text-3xl text-zinc-900 dark:text-zinc-50'>FavStack</Text>
      <Theme />
    </View>
  );
}