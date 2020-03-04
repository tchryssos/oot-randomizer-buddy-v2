import React, { useState, useContext, useCallback } from 'react'
import { createUseStyles } from 'react-jss'
import DisplayContext from 'contexts/display'

import Body from 'components/Body'
import ViewCheckbox from 'components/ViewCheckbox'
import Hamburger from 'static/icons/hamburger.svg'

import { darkBlue, gold } from 'constants/styles/colors'
import clsx from 'clsx'

const useStyles = createUseStyles({
	menuWrapper: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		marginRight: 10,
	},
	menuButton: {
		backgroundColor: 'transparent',
		border: 'none',
	},
	menuDropdown: {
		display: 'none',
		flexDirection: 'column',
		backgroundColor: darkBlue,
		border: [['solid', 1, gold]],
		boxShadow: [[2, 2, 'rgba(0,0,0,0.5)']],
		margin: 8,
		padding: 8,
		zIndex: 2,
		position: 'absolute',
		top: 0,
		left: 0,
	},
	dropdownContent: {
		position: 'relative',
		width: '100%',
		height: '100%',
	},
	openDropdown: {
		display: 'flex',
	},
	closeButton: {
		position: 'absolute',
		top: 0,
		right: 0,
		cursor: 'pointer',
		fontSize: 20,
		color: gold,
		fontFamily: 'ReturnofGanon',
	},
})

export default () => {
	const classes = useStyles()
	const [isMenuOpen, setMenuOpen] = useState(false)
	const openMenu = useCallback(() => setMenuOpen(true))
	const closeMenu = useCallback((e) => {
		e.stopPropagation()
		setMenuOpen(false)
	})
	const {
		toggleView,
		toggleRequiredOnly,
		toggleProgressionMode,
		isSimpleView,
		isRequiredOnly,
		isProgressionMode,
	} = useContext(DisplayContext)
	return (
		<div className={classes.menuWrapper} onClick={openMenu}>

			{/* UNOPENED MENU - START */}
			<button type="button" className={classes.menuButton}>
				<img src={Hamburger} alt="Open menu" />
			</button>
			<Body className={classes.title}>Ocarina of Time Randomizer Buddy</Body>
			{/* UNOPENED MENU - END */}

			{/* OPENED MENU - START */}
			<div
				className={clsx(
					classes.menuDropdown,
					{ [classes.openDropdown]: isMenuOpen },
				)}
			>
				<div className={classes.dropdownContent}>
					<button
						type="button"
						className={clsx(
							classes.menuButton,
							classes.closeButton,
						)}
						onClick={closeMenu}
					>
						X
					</button>
					<ViewCheckbox
						label="Simple View"
						onClick={toggleView}
						checkedValue={isSimpleView}
					/>
					<ViewCheckbox
						label="Required Items Only"
						onClick={toggleRequiredOnly}
						checkedValue={isRequiredOnly}
					/>
					<ViewCheckbox
						label="Item Progression Mode"
						onClick={toggleProgressionMode}
						checkedValue={isProgressionMode}
					/>
				</div>
			</div>
			{/* OPENED MENU - END */}

		</div>
	)
}
