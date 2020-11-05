import React from 'react';
import { View } from 'react-native';
import AutoScaleText from './components/AutoScaleText';

type Props = {};

export default function ({}: Props) {
	return <AutoScaleText
		style={{width: 100}}
		maxLines={3} maxFontSize={14}>asdasda ascas asdasda asdadsa asdasdasca
		asdasdas</AutoScaleText>
}