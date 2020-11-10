import React, { useState } from 'react';
import { Text, Platform } from 'react-native';

type Props = {
	style?: any,
	maxLines?: number,
	maxFontSize?: number,
};

export default function AutoScaleText(
	{
		style = {},
		maxLines = 3,
		children = '',
		maxFontSize = 14,
	}: Props) {
	const [currentFont, setCurrentFont] = useState(maxFontSize);
	return (
		<Text
			onTextLayout={(e) => {
				const {lines} = e.nativeEvent;
				if (lines.length > maxLines) {
					setCurrentFont(currentFont - 1);
				}
			}}
			adjustsFontSizeToFit
			style={[
				{
					color: '#343434',
				},
				isIOS()
					? {}
					: {
						fontSize: currentFont,
					},
				style,
			]}
			numberOfLines={maxLines}>
			{`${children}`}
		</Text>
	);
	
	function isIOS() {
		return Platform.OS === 'ios'
	}
}
