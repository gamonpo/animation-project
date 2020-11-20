import styled from 'styled-components/native';
import colors from '../../style/colors'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Balls = styled.View`
    flex-direction: row;
`;

export const Ball = styled.View`
    width: 55px;
    height: 55px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;

export const Texti = styled.Text`
    font-size: 14px;
    color: ${colors.white}
`;
