import ThemedButton from '@/presentation/shared/ThemedButton';
import {Animated, Easing, View} from 'react-native';
import ThemedView from "@/presentation/shared/ThemedView";
import {useRef} from "react";
import {useAnimation} from "@/hooks/useAnimation";

const Animation101Screen = () => {

    const {animatedTop, animatedOpacity, fadeOut, fadeIn, startMovingTopPosition} = useAnimation();


  return (
    <ThemedView margin className="justify-center items-center flex-1">
        <Animated.View
        className="bg-dark-secondary dark:bg-dark-secondary rounded-xl"
        style={{
            width:150,
            height:150,
            opacity: animatedOpacity,
            transform: [{
                translateY: animatedTop
            }]
        }}
        >

        </Animated.View>

        <ThemedButton className="my-5"
         onPress={() =>{
             fadeIn({});
             startMovingTopPosition({
                 easing: Easing.bounce,
                 duration:700
             });
         }}
        >
            FadeIn
        </ThemedButton>
        <ThemedButton className="my-5"
         onPress={()=>{
             fadeOut({});
         } }
        >
            FadeOut
        </ThemedButton>

    </ThemedView>
  );
};
export default Animation101Screen;
