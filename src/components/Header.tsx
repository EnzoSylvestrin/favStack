import { View } from 'react-native';

import { Theme } from "./Theme";
import Back from './Back';
import Text from './Text';

type Props = {
  back?: boolean,
  backUrl?: string,
}

export const Header = ({ back, backUrl }: Props) => {
  return (
    <View
      className='p-3 flex-row justify-between items-center border-b border-b-main bg-zinc-200 dark:bg-zinc-800'
    >
      {back && <Back backUrl={backUrl} />}
      <Text textStyles="text-2xl" asHeading>FavStack</Text>
      <Theme />
    </View>
  );
}