import React from 'react';
import {View, Text, ViewProps} from 'react-native';


interface Props extends ViewProps {
    className?: string;
}

const ThemedCard = ({className,children, ...rest}:Props) => {
  return (
    <View
    className={`bg-white dark:bg-black/10 rounded-xl shadow shadow-black/5 ${className}`}
    {...rest}
    >
        {children}

    </View>
  );
};

export default ThemedCard;
