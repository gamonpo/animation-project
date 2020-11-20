import React from 'react';
import { Animated } from 'react-native';
import { useIsFocused } from '@react-navigation/native'

import { Container, Head, RSmall, Square } from './styles';

import Back from '../../assets/back.png'
import rsmall from '../../assets/rsmall.png'

export default function Second(){

  const ScreenRend = () => {
    const lefti = new Animated.Value(0)
    const right = new Animated.Value(0)
    const mid = new Animated.Value(0)

    const isFocused = useIsFocused()

    if(isFocused === true) {
      const l = -30
      const ll = 30
      
      const m = -30
      const mm = 30
      
      const r = -30
      const rr = 30
      
      Animated.stagger(500,[
        Animated.spring(lefti, {
          toValue: l,
          useNativeDriver: false,
        }),
      
        Animated.spring(mid, {
          toValue: m,
          useNativeDriver: false,
        }),

        Animated.spring(right, {
          toValue: r,
          useNativeDriver: false,
        }),

        Animated.spring(lefti, {
          toValue: ll,
          useNativeDriver: false,
        }),

        Animated.spring(mid, {
          toValue: mm,
          useNativeDriver: false,
        }),

        Animated.spring(right, {
          toValue: rr,
          useNativeDriver: false,
        })
      ]).start()
    } else {
      lefti.stopAnimation()
      mid.stopAnimation()
      right.stopAnimation()
    }

    return (
      <Square>
        <Animated.View
          style={
            {
              top: lefti
            }
          }
        >
          <RSmall source={rsmall} />
        </Animated.View>

        <Animated.View
          style={
            {
              top: mid
            }
          }
        >
          <RSmall source={rsmall} />
        </Animated.View>

        <Animated.View
          style={
            {
              top: right
            }
          }
        >
          <RSmall source={rsmall} />

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

