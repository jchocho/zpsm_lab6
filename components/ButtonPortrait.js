import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';

export default ({onPress, text, size, theme}) => {
  const [screen, setScreen] = useState(Dimensions.get('screen'));
  const [buttonWidth, setButtonWidth] = useState(screen.width / 4);
  const [buttonHeight, setButtonHeight] = useState(screen.height / 7);
  const calculateDimensions = () => {
    setScreen(Dimensions.get('screen'));
    setButtonWidth(screen.width / 4);
    setButtonHeight(screen.height / 7);
  };
  Dimensions.addEventListener('change', () => calculateDimensions());
  if (buttonWidth < buttonHeight) {
    let styles = StyleSheet.create({
      text: {
        color: '#FFFFFF',
        fontSize: 40,
      },
      button: {
        backgroundColor: '#7C7D7E',
        flex: 1,
        height: Math.floor(buttonHeight),
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
        borderRadius: 50,
      },
      buttonDouble: {
        width: buttonWidth * 2 - 2,
        flex: 0,
        alignItems: 'flex-start',
        paddingLeft: 40,
      },
      buttonSecondary: {
        backgroundColor: '#646466',
      },
      buttonAccent: {
        backgroundColor: '#F98643',
      },
    });
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if (size === 'double') {
      buttonStyles.push(styles.buttonDouble);
    }

    if (theme === 'secondary') {
      buttonStyles.push(styles.buttonSecondary);
    } else if (theme === 'accent') {
      buttonStyles.push(styles.buttonAccent);
    }

    return (
      <TouchableOpacity onPress={onPress} style={buttonStyles}>
        <Text style={textStyles}>{text}</Text>
      </TouchableOpacity>
    );
  }
  return null;
};