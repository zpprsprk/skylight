// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    // Change recipes here
    // yellorium from uranium essence fix
    event.remove({id: 'mysticalagriculture:essence/common/uranium_ingot'})
    event.shaped(Item.of('mekanism:ingot_uranium', 2).toJson(),
        [
            'EEE',
            'E E',
            'EEE'
        ],
        {
            E: 'mysticalagriculture:uranium_essence'
        })
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})