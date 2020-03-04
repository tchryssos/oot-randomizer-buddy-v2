import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	checkboxRow: {
		display: 'flex',
		alignItems: 'center',
	},
	checkbox: {
		height: 16,
		width: 16,
		marginLeft: 8,
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
				className="viewCheckbox"
				readOnly
			/>
		</div>
	)
}
