// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	event.hide('mysticalagriculture:electrum_essence')
	event.hide('mysticalagriculture:invar_essence')
	event.hide('mysticalagriculture:platinum_essence')
	event.hide('mysticalagriculture:electrum_seeds')
	event.hide('mysticalagriculture:invar_seeds')
	event.hide('mysticalagriculture:platinum_seeds')
})
