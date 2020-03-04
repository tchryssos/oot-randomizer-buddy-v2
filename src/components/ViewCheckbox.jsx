import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	checkboxRow: {
		display: 'flex',
		alignItems: 'center',
		fontSize: 24,
	},
	checkbox: {
		height: 24,
		width: 24,
		marginLeft: 4,
	},
})

export default ({ label, checkedValue, onClick }) => {
	const classes = useStyles()
	return (
		<div className={classes.checkboxRow}>
			{label}:
			<input
				type="checkbox"
				checked={checkedValue}
				onClick={onClick}
				className={classes.checkbox}
				readOnly
			/>
		</div>
	)
}
