import React from 'react'
import injectSheet from 'react-jss'

const styles = {
	checkboxRow: {
		display: 'flex',
		alignItems: 'center',
	},
	checkbox: {
		height: 16,
		width: 16,
		marginLeft: 8,
	},
}

const ViewCheckbox = ({ label, checkedValue, onClick, classes }) => (
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

export default injectSheet(styles)(ViewCheckbox)
