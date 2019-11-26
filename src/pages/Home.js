import React, { useState, useCallback, useMemo } from 'react'
import injectSheet from 'react-jss'
import DisplayContext from 'contexts/display'

import Menu from 'components/Menu'
import ItemGrid from 'components/ItemGrid'

import { gold, darkBlue } from 'constants/styles/colors'

const styles = {
	homeWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		height: '100%',
		backgroundColor: darkBlue,
		color: gold,
	},
}

const Home = ({ classes }) => {
	const [isSimpleView, setSimpleView] = useState(true)
	const [isRequiredOnly, setRequiredOnly] = useState(true)
	const [isProgressionMode, setProgressionMode] = useState(false)
	const toggleView = useCallback(
		() => setSimpleView(!isSimpleView),
	)
	const toggleRequiredOnly = useCallback(
		() => setRequiredOnly(!isRequiredOnly),
	)
	const toggleProgressionMode = useCallback(
		() => setProgressionMode(!isProgressionMode),
	)
	const context = useMemo(() => ({
		isSimpleView,
		isProgressionMode,
		isRequiredOnly,
		toggleView,
		toggleRequiredOnly,
		toggleProgressionMode,
	}), [isSimpleView, isProgressionMode, isRequiredOnly])

	return (
		<DisplayContext.Provider value={context}>
			<div className={classes.homeWrapper}>
				<Menu />
				<ItemGrid />
			</div>
		</DisplayContext.Provider>
	)
}

export default injectSheet(styles)(Home)
