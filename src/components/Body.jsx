import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

const useStyles = createUseStyles({
	bodyText: {
		display: 'inline',
		fontSize: 32,
	},
})

export default ({ children, className }) => {
	const classes = useStyles()
	return (
		<div className={clsx(classes.bodyText, className)}>
			{children}
		</div>
	)
}
