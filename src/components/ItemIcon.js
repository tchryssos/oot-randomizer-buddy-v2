import React, { useState, useCallback, useContext, useEffect } from 'react'
import injectSheet from 'react-jss'

import DisplayContext from 'contexts/display'
import { ALL_ITEMS } from 'constants/items'
import clsx from 'clsx'

const styles = {
	iconButton: {
		border: 'none',
		backgroundColor: 'transparent',
	},
	icon: {
		opacity: '0.5',
		filter: 'grayscale(65%)',
		height: 64,
		width: 64,
	},
	iconFound: {
		opacity: '1',
		filter: 'grayscale(0%)',
	},
}

const ItemIcon = ({ initialReference, classes }) => {
	const [isFound, setIsFound] = useState(false)
	const [progressionStep, setProgressionStep] = useState(0)
	const [item, setItem] = useState(ALL_ITEMS[initialReference])
	const { progression, reference, name } = item
	const { isProgressionMode } = useContext(DisplayContext)

	useEffect(() => {
		if (progression && isProgressionMode) {
			setItem(ALL_ITEMS[progression[progressionStep]])
		}
	}, [progressionStep])

	const onClick = useCallback(() => {
		if (progression && isProgressionMode) {
			if (!isFound) {
				setIsFound(true)
			} else {
				const progPlusOne = progressionStep + 1
				const nextProgressionStep = (
					progression[progPlusOne] ? progPlusOne : 0
				)
				if (nextProgressionStep === 0) { setIsFound(false) }
				setProgressionStep(nextProgressionStep)
			}
		} else {
			setIsFound(!isFound)
		}
	}, [progressionStep, isFound])

	return (
		<button
			onClick={onClick}
			className={classes.iconButton}
		>
			<img
				src={require(`../static/images/${reference}.png`)}
				alt={name}
				title={name}
				className={clsx(
					classes.icon,
					{ [classes.iconFound]: isFound },
				)}
			/>
		</button>
	)
}

export default injectSheet(styles)(ItemIcon)
