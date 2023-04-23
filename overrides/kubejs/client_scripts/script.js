// priority: 0

console.info('Hiding things from JEI...')

JEIEvents.hideItems(event => {
	event.hide('mysticalagriculture:electrum_essence')
	event.hide('mysticalagriculture:invar_essence')
	event.hide('mysticalagriculture:platinum_essence')
	event.hide('mysticalagriculture:electrum_seeds')
	event.hide('mysticalagriculture:invar_seeds')
	event.hide('mysticalagriculture:platinum_seeds')
	event.hide('avaritia:neutronium_compressor')
	event.hide('avaritia:extreme_crafting_table')
	event.hide('avaritia:iron_singularity')
	event.hide('avaritia:golden_singularity')
	event.hide('avaritia:lapis_singularity')
	event.hide('avaritia:redstone_singularity')
	event.hide('avaritia:nether_quartz_singularity')
	event.hide('avaritia:diamond_singularity')
	event.hide('avaritia:emerald_singularity')
})
