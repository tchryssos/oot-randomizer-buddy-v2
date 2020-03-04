import React, { useState, useCallback, useContext } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import DisplayContext from 'contexts/display'

import Body from 'components/Body'
import ItemIcon from 'components/ItemIcon'
import Chevron from 'static/icons/chevron.svg'

import { gold } from 'constants/styles/colors'

const useStyles = createUseStyles({
	collectionLabel: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		color: gold,
	},
	collectionToggleButton: {
		border: 'none',
		backgroundColor: 'transparent',
	},
	chevron: {
		display: 'block',
		transition: '0.1s ease-in-out',
		color: gold,
		fontSize: 32,
		fontFamily: 'ReturnofGanon',
		transform: 'rotate(90deg) translateX(2px)',
	},
	chevronRotated: {
		transform: 'rotate(0) translateY(0)',
	},
	collection: {
		display: 'none',
		flexWrap: 'wrap',
	},
	collectionVisible: {
		display: 'flex',
	},
})

const Collection = ({ collection, isRequiredOnly, isProgressionMode }) => {
	let filteredCollection = collection
	filteredCollection = filteredCollection
		.filter((item) => (isRequiredOnly ? item.critical : item))
		.filter((item) => {
			if (isProgressionMode && item.progression) {
				return item.reference === item.progression[0]
			}
			return item
		})
	return (
		filteredCollection.map(
			(item) => (
				<ItemIcon key={item.reference} initialReference={item.reference} />
			),
		)
	)
}

export default ({ collection, label }) => {
	const classes = useStyles()
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
					type="button"
				>
					<span
						className={clsx(
							classes.chevron,
							{ [classes.chevronRotated]: !isCollectionVisible },
						)}
					>
						&gt;
					</span>
				</button>
				<Body>{label}</Body>
			</div>
			<div
				className={clsx(
					classes.collection,
					{ [classes.collectionVisible]: isCollectionVisible },
				)}
			>
				<Collection
					collection={collection}
					isRequiredOnly={isRequiredOnly}
					isProgressionMode={isProgressionMode}
				/>
			</div>
		</>
	)
}
