import React from 'react'
import injectSheet from 'react-jss'
import clsx from 'clsx'

const styles = {
	bodyText: {
		display: 'inline',
		fontSize: 16,
	},
}

const Body = ({ children, className, classes }) => (
	<div className={clsx(classes.bodyText, className)}>
		{children}
	</div>
)

export default injectSheet(styles)(Body)
