import { createUseStyles } from 'react-jss'

import { darkBlue } from 'constants/styles/colors'
import ReturnofGanon from 'static/fonts/ReturnofGanon.ttf'

export default createUseStyles(() => {
	const marPadZero = {
		margin: 0,
		padding: 0,
	}
	const baseStyle = {
		height: '100%',
		width: '100%',
		...marPadZero,
	}

	return {
		'@import': [
			// Import fonts here
		],
		'@font-face': {
			fontFamily: 'ReturnofGanon',
			src: `url(${ReturnofGanon})`,
		},
		'@global': {
			html: {
				...baseStyle,
				backgroundColor: darkBlue,
			},
			body: {
				...baseStyle,
				position: 'relative',
				fontFamily: 'ReturnofGanon',
			},
			'#app': baseStyle,
			div: {
				boxSizing: 'border-box',
			},
			p: marPadZero,
			h1: marPadZero,
			h2: marPadZero,
			h3: marPadZero,
		},
	}
})
