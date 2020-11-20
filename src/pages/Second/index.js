import React from 'react';
import { Animated } from 'react-native';
import { useIsFocused } from '@react-navigation/native'

import { 
  Container, 
  Head, 
  RLarge, 
  RSmallLeft, 
  RSmallRight, 
  Square 
} from './styles';

import Back from '../../assets/back.png'
import rlarge from '../../assets/rlarge.png'
import rsmall from '../../assets/rsmall.png'

export default function Second() {

  const ScreenRend = () => {
    const lefti = new Animated.Value(100)
    const righti = new Animated.Value(100)

    const l = -72
    const r = -17

    const isFocused = useIsFocused()

    if(isFocused === true) {
      Animated.timing(lefti, {
        duration: 1200,
        toValue: l,
        useNativeDriver: false,
      }).start(),
  
      Animated.timing(righti, {
        duration: 1200,
        toValue: r,
        useNativeDriver: false,
      }).start()
    }

    return (
      <Square>

        <Animated.View
          style={
            { 
              bottom: righti,
            }
          }
        >
          <RSmallRight source={rsmall} /> 

        </Animated.View>

        <RLarge source={rlarge} />

        <Animated.View
          style={
            { 
              top: lefti,
            }
          }
        >
          <RSmallLeft source={rsmall} />
        </Animated.View>
      </Square>  
    )
  }

  return (
    <Container source={Back}>

      <Head />

      <ScreenRend />
    </Container>
  );
};

