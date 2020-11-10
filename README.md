# react-native-auto-scale-text

A cross-platform (iOS / Android) auto scale text component for React Native.


## Getting Started

### Installing

`npm i react-native-auto-scale-text`

Or

`yarn add react-native-auto-scale-text`


### Basic Usage

![example](https://i.ibb.co/k00fsrt/7a45c1d36643981dc152.jpg)
```js
<AutoScaleText
		style={{width: 100}}
		maxLines={3} 
		maxFontSize={14}>
		This is example text
	</AutoScaleText>
```

![example](https://i.ibb.co/nb101f6/6db2d02477b489ead0a5.jpg)

### Props

| Name                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Details                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `maxLines`                                 | (Optional) Maximum number of lines before rescaling                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **required**<br>array: [] |
| `maxFontSize`                                         | (Optional) Maximum font size                                                                                                                                                            | number: 0  |
| `style`                                   | (Optional) Text style                                                                                                                                                                                                                                                                                                    | function: () => {}                   |
|                |
