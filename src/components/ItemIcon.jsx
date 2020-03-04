import React, { useState, useCallback, useContext, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

import DisplayContext from 'contexts/display'
import { ALL_ITEMS } from 'constants/items'
import clsx from 'clsx'

const useStyles = createUseStyles({
	iconButton: {
		border: 'none',
		backgroundColor: 'transparent',
	},
	icon: {
		opacity: '0.2',
		filter: 'grayscale(65%)',
		height: 64,
		width: 64,
	},
	iconMissing: {
		opacity: '1',
		filter: 'grayscale(0%)',
	},
})

export default ({ initialReference }) => {
	const classes = useStyles()
	const [isMissing, setisMissing] = useState(true)
	const [progressionStep, setProgressionStep] = useState(0)
	const [item, setItem] = useState(ALL_ITEMS[initialReference])
	const {
		progression, reference, name, imgOverride,
	} = item
	const { isProgressionMode } = useContext(DisplayContext)
	const src = require(`../static/images/${imgOverride || reference}.png`)

	useEffect(() => {
		if (progression && isProgressionMode) {
			setItem(ALL_ITEMS[progression[progressionStep]])
		}
	}, [progressionStep])

	useEffect(() => {
		if (progression && !isProgressionMode) {
			setItem(ALL_ITEMS[initialReference])
		}
	}, [isProgressionMode])

	const onClick = useCallback(() => {
		if (progression && isProgressionMode) {
			if (isMissing) {
				setisMissing(false)
			} else {
				const progPlusOne = progressionStep + 1
				const nextProgressionStep = (
					progression[progPlusOne] ? progPlusOne : 0
				)
				if (nextProgressionStep === 0) { setisMissing(true) }
				setProgressionStep(nextProgressionStep)
			}
		} else {
			setisMissing(!isMissing)
		}
	}, [progressionStep, isMissing])

	return (
		<button
			onClick={onClick}
			className={classes.iconButton}
			type="button"
		>
			<img
				src={src.default}
				alt={name}
				title={name}
				className={clsx(
					classes.icon,
					{ [classes.iconMissing]: isMissing },
				)}
			/>
		</button>
	)
}
