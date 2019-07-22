import React from 'react';
import {
  Text, View, TextInput, StyleSheet,
} from 'react-native';

export const Input = ({
  label, value, onChangeText, placeholder,
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;


  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
      //   secureTextEntry={placeholder === 'Password'}
        keyboardType={placeholder === 'email-address'}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        secureTextEntry={placeholder === 'Password'}
        autoCorrect={false}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    flexDirection: 'row',
    height: 40,
    flex: 1,
    alignItems: 'center',
  },
});

export default Input;
