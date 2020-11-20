import React, { useRef, useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native'
import { Container, Balls, Ball, Texti } from './styles';
import { 
  Animated, 
  PanResponder, 
} from 'react-native';

import colors from '../../style/colors'

export default function App() {

  const [numberX, setNumberX] = useState(0)
  const [numberY, setNumberY] = useState(0)

  const value = useRef(new Animated.ValueXY(
    {
      x: numberX, 
      y: numberY 
    })).current

  const ScreenRend = () => {
    const black = new Animated.Value(0)
    const gray = new Animated.Value(0)

    const purple = new Animated.Value(0)
    const blue = new Animated.Value(0)
    const green = new Animated.Value(0)

    const panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => true,

      onPanResponderGrant: (e, gestureState) => {
        value.setOffset({
          x: value.x._value,
          y: value.y._value,
        });

        value.setValue({ x: 0, y: 0 })
      },
      
      onPanResponderMove: Animated.event(
        [
          null, 
          {
            dx: value.x,
            dy: value.y,
          }
        ],
        {
          useNativeDriver: false
        }
      ),

      onPanResponderRelease: () => {
        value.flattenOffset();
      }
    })

    const bla_value = 150
    const blu_value = -30
    const gre_value = 100
    const gra_value = -150

    const dur = 1000
    const boun = 30
    const velo = -0.3

    const IsFocused = useIsFocused()


    useEffect(() => {
      console.log("SETA 2")
      black.setValue(0)
      purple.setValue(0)
      blue.setValue(0)
      green.setValue(0)
      gray.setValue(0)

      if(IsFocused === true) {
        
        Animated.stagger(3000,[
          Animated.timing(black, {
            duration: dur,
            toValue: bla_value,
            useNativeDriver: false,
          }),

          Animated.decay(purple, {
            velocity: velo,
            useNativeDriver: false,
          }),
      
          Animated.timing(blue, {
            duration: dur,
            toValue: blu_value,
            useNativeDriver: false,
          }),
      
          Animated.timing(green, {
            duration: dur,
            toValue: gre_value,
            useNativeDriver: false,
          }),

          Animated.spring(gray, {
            toValue: gra_value,
            bounciness: boun,
            useNativeDriver: false,
          }),
        ]).start()
      }
    })
    
    return (
      <Balls>
          <Animated.View 
            style={
              { 
                top: black,
                opacity: black.interpolate({
                  inputRange: [0, 100, 130],
                  outputRange: [1, 0.8, 0.2],
                  extrapolate: 'clamp',
                })
              }
            }
          >

            <Ball backgroundColor={colors.black}>
              <Texti>opacity</Texti>
            </Ball>

          </Animated.View>

        <Animated.View 
          style={[
            { 
              top: purple, 
              right: purple, 
            }
          ]}
        >
          <Ball  backgroundColor={colors.purple}>
           <Texti>Decay</Texti>
          </Ball>

        </Animated.View>

        <Animated.View
          {...panResponder.panHandlers}
          style={[
            {
              transform: [
                { translateX:  value.x},
                { translateY:  value.y},
              ] 
            }
          ]}
        >

          <Ball backgroundColor={colors.red}>

           <Texti>Move</Texti>

          </Ball>

        </Animated.View>

        <Animated.View 
          style={[
            { 
              top: blue, 
            }
          ]}
        >

          <Ball backgroundColor={colors.blue}>

           <Texti>Timing</Texti>

          </Ball>

        </Animated.View>

        <Animated.View 
          style={[
            { 
              top: green, 
            }
          ]}
        >
          <Ball backgroundColor={colors.green}>

           <Texti>Timing</Texti>

          </Ball>

        </Animated.View>

        <Animated.View 
          style={{ top: gray}}
        >
          <Ball backgroundColor={colors.gray}>

           <Texti>Spring</Texti>

          </Ball>

        </Animated.View>

      </Balls>
    )
  }

  return (
    <Container>

      <ScreenRend />

    </Container>
  );
}



