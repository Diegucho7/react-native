import React, {useRef} from 'react';
import {Animated, Easing} from "react-native";

export const useAnimation = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({
                        duration = 300,
                        toValue = 1,
                        useNativeDiver = true,
                        easing = Easing.linear,
                        callback = () => {}
                    }) =>{
        Animated.timing(animatedOpacity, {
            toValue:toValue,
            duration:duration,
            useNativeDriver: useNativeDiver,
            easing : easing,

        }).start(callback);

    }
    const fadeOut = ({

                         duration = 300,
                         toValue = 0,
                         useNativeDiver = true,
                         easing = Easing.ease,
                         callback = () => {}}) =>{
        Animated.timing(animatedOpacity, {
            toValue:toValue,
            duration:duration,
            useNativeDriver: useNativeDiver,
            easing : easing,
        }).start(callback);

    };

    const startMovingTopPosition = ({
                                        initialPosition = -100,
                                        duration = 300,
                                        toValue = 1,
                                        useNativeDiver = true,
                                        easing = Easing.ease,
                                        callback = () => {}
                                    }) => {
        animatedTop.setValue(initialPosition);
        Animated.timing(animatedTop, {

            toValue:toValue,
            duration:duration,
            easing: easing,
            useNativeDriver: useNativeDiver
        }).start();
    }

  return {
      animatedTop,
      animatedOpacity,

      // Method
      fadeIn,
      fadeOut,
      startMovingTopPosition,
  }
};