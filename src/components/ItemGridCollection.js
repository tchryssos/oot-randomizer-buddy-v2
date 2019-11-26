import React, { useState, useCallback, useContext, useMemo } from 'react'
import injectSheet from 'react-jss'
import clsx from 'clsx'

import DisplayContext from 'contexts/display'

import Chevron from 'static/icons/chevron.svg'

import { darkBlue } from 'constants/styles/colors'

const styles = {
	collectionLabel: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
	},
	collectionToggleButton: {
		border: 'none',
		backgroundColor: darkBlue,
	},
	chevron: {
		transition: '0.1s ease-in-out',
	},
	chevronRotated: {
		transform: 'rotate(-90deg)',
	},
}

const Collection = ({ collection, isRequiredOnly, isProgressionMode }) => {
	let filteredCollection = collection
	filteredCollection = filteredCollection
		.filter(item => (isRequiredOnly ? item.critical : item))
		.filter((item) => {
			if (isProgressionMode && item.progression) {
				return item.reference === item.progression[0]
			}
			return item
		})
	return (
		filteredCollection.map(
			item => (
				<div key={item.reference}>
					{item.name}
				</div>
			),
		)
	)
}

const ItemGridCollection = ({ collection, label, classes }) => {
	const [isCollectionVisible, setCollectionVisible] = useState(true)
	const toggleCollectionVisible = useCallback(
		() => setCollectionVisible(!isCollectionVisible),
	)
	const {
		isRequiredOnly,
		isProgressionMode,
	} = useContext(DisplayContext)
	return (
		<>
			<div className={classes.collectionLabel}>
				<button
					onClick={toggleCollectionVisible}
					className={classes.collectionToggleButton}
				>
					<img
						src={Chevron}
						className={clsx(
							classes.chevron,
							{ [classes.chevronRotated]: !isCollectionVisible },
						)}
						alt="collection visibility chevron"
					/>
					{label}
				</button>
			</div>
			<Collection
				collection={collection}
				isRequiredOnly={isRequiredOnly}
				isProgressionMode={isProgressionMode}
			/>
		</>
	)
}

export default injectSheet(styles)(ItemGridCollection)