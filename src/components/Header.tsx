import { View, TextInput } from 'react-native';

import { Theme } from "./Theme";
import Back from './Back';
import Text from './Text';
import React from 'react';

type Props = {
  back?: boolean,
  backUrl?: string,
  Details?: boolean,
  title?: string,
}

export const Header = ({ back, backUrl, Details = false, title }: Props) => {
  return (
    <View
      className='p-3 flex-row justify-between items-center border-b border-b-main bg-zinc-200 dark:bg-zinc-800'
    >
      {
        !Details
          ?
          <>
            {back && <Back backUrl={backUrl} />}
            <Text textStyles="text-2xl" asHeading>FavStack</Text>
          </>
          :
          <TextInput
            className='flex-1 text-xl mr-4 font-bold text-zinc-900 dark:text-gray-50 focus:border focus:border-main'
            placeholder={title && 'Titulo'}
            placeholderTextColor='#56565a'
            textAlignVertical="top"
            cursorColor={'#8a2be2'}
            autoFocus
          />
      }
      <Theme />
    </View>
  );
}