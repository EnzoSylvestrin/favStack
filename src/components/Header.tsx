import React, { useState } from 'react';

import { View, TextInput } from 'react-native';

import { Theme } from "./Theme";
import Back from './Back';
import Text from './Text';

type Props = {
  back?: boolean,
  backUrl?: string,
  Details?: boolean,
  title?: string,
}

export const Header = ({ back, backUrl, Details = false, title: Title }: Props) => {

  const [title, setTitle] = useState(Title);

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
          <View className='flex-1'>
            <TextInput
              className='h-[44px] pl-2 text-xl mr-4 font-bold text-zinc-900 dark:text-gray-50'
              value={title}
              placeholder='Título'
              placeholderTextColor='#56565a'
              cursorColor={'#8a2be2'}
              autoFocus
              onChangeText={setTitle}
              multiline={false}
            />
          </View>
      }
      <Theme />
    </View>
  );
}