# react-native-multiple-choice-picker

A cross-platform (iOS / Android) auto scale text component for React Native.


## Getting Started

### Installing

`npm i react-native-auto-scale-text`

Or

`yarn add react-native-auto-scale-text`

![example](https://i.ibb.co/YPwMPd7/7a45c1d36643981dc152.jpg)

### Basic Usage

![example](https://i.ibb.co/YPwMPd7/7a45c1d36643981dc152.jpg)
```js
<AutoScaleText
		style={{width: 100}}
		maxLines={3} 
		maxFontSize={14}>
		This is example text
	</AutoScaleText>
```

![example](https://i.ibb.co/xKbbDcH/6db2d02477b489ead0a5.jpg)

### Props

| Name                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Details                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `maxLines`                                 | Maximum number of lines before rescaling                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **required**<br>array: [] |
| `maxFontSize`                                         | Maximum font size                                                                                                                                                            | number: 0  |
| `style`                                   | (Optional) text style                                                                                                                                                                                                                                                                                                    | function: () => {}                   |
|                |
