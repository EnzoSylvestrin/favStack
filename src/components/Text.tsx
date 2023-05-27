import { ReactNode } from 'react';

import { styled } from 'nativewind';

import { TextProps as NativeTextProps, Text as NativeText } from "react-native";

import clsx from 'clsx';

type TextProps = {
    children: ReactNode,
    textStyles?: NativeTextProps['style']
    asHeading?: boolean,
    Colored?: boolean,
}

const Text = ({ textStyles, children, asHeading = false, Colored = false }: TextProps) => {
    return (
        <NativeText
            className={clsx(
                "text-whiteText dark:text-darkText",
                {
                    "font-body": !asHeading,
                    "font-title": asHeading,
                    "!text-main": Colored
                },
            )}
            style={textStyles}
        >
            {children}
        </NativeText>
    );
}

export default styled(Text, {
    props: {
        textStyles: true
    }
})