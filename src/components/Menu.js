import React, { useState, useContext, useCallback } from 'react'
import injectSheet from 'react-jss'
import DisplayContext from 'contexts/display'

import Body from 'components/Body'
import ViewCheckbox from 'components/ViewCheckbox'
import Hamburger from 'static/icons/hamburger.svg'

import { darkBlue, gold } from 'constants/styles/colors'
import clsx from 'clsx'

const styles = {
	menuWrapper: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	menuButton: {
		backgroundColor: darkBlue,
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
		paddingBottom: 24,
		zIndex: 2,
		position: 'absolute',
		top: 0,
		left: 0,
	},
	openDropdown: {
		display: 'flex',
	},
	closeButton: {
		cursor: 'pointer',
		alignSelf: 'flex-end',
		fontSize: 20,
		color: gold,
	},
}

const Menu = ({ classes }) => {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const openMenu = useCallback(() => setMenuOpen(true))
	const closeMenu = useCallback((e) => {
		e.stopPropagation()
		setMenuOpen(false)
	})
	const {
		toggleView,
		toggleRequired,
		toggleProgressionMode,
		isSimpleView,
		isRequiredOnly,
		isProgressionMode,
	} = useContext(DisplayContext)
	return (
		<div className={classes.menuWrapper} onClick={openMenu}>

			{/* UNOPENED MENU - START */}
			<button className={classes.menuButton}>
				<img src={Hamburger} alt="Open menu" />
			</button>
			<Body>Ocarina of Time Randomizer Buddy</Body>
			{/* UNOPENED MENU - END */}

			{/* OPENED MENU - START */}
			<div
				className={clsx(
					classes.menuDropdown,
					{ [classes.openDropdown]: isMenuOpen },
				)}
			>
				<button
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
					onClick={toggleRequired}
					checkedValue={isRequiredOnly}
				/>
				<ViewCheckbox
					label="Item Progression Mode"
					onClick={toggleProgressionMode}
					checkedValue={isProgressionMode}
				/>
			</div>
			{/* OPENED MENU - END */}

		</div>
	)
}

export default injectSheet(styles)(Menu)
