module.exports = [
	{
		"key": "enabled",
		"name": "Module enabled (rotation trigger skill is <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/auraburn_tex.png'>)",
		"type": "bool"
	},
	{
		"key": "autoManaBoost",
		"name": "Auto cast <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/c5_strengthenmana.png'> near the boss on rotation",
		"type": "bool"
	},
	{
		"key": "autoManaBoostBossHp",
		"name": "Minimum of the boss % HP at which <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/c5_strengthenmana.png'> is cast",
		"type": "number",
		"min": 1,
		"max": 100,
		"step": 1
	},
	{
		"key": "autoImplosion",
		"name": "Auto cast <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/collapse_tex.png'> with cancel animation on rotation",
		"type": "bool"
	},
	{
		"key": "autoImplosionBossHp",
		"name": "Minimum of the boss % HP at which <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/collapse_tex.png'> is cast",
		"type": "number",
		"min": 1,
		"max": 100,
		"step": 1
	},
	{
		"key": "iceLancesOffCd",
		"name": "Auto cast <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/icespear_tex.png'> off cooldown on rotation",
		"type": "bool"
	},
	{
		"key": "autoIceLances",
		"name": "Auto cast <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/icespear_tex.png'> after cast <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/blastball_tex.png'> and <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/manaburst_tex.png'> on rotation/out of rotation",
		"type": "bool"
	},
	{
		"key": "autoLockon",
		"name": "Auto lockon and cast for <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/trackinginferno_tex.png'> and <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/mpsink_tex.png'> near the boss out of rotation",
		"type": "bool"
	},
	{
		"key": "manaBoostUseBrooch",
		"name": "Auto use <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_items/brooch_kaia_b_tex.png'> <b>Brooch</b> after cast <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/c5_strengthenmana.png'> near the boss",
		"type": "bool"
	},
	{
		"key": "manaBoostUseBroochBossHp",
		"name": "Minimum of the boss % HP at which <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_items/brooch_kaia_b_tex.png'> is use",
		"type": "number",
		"min": 1,
		"max": 100,
		"step": 1
	},
	{
		"key": "manaBoostUseItem",
		"name": "Auto use <b>item</b> after cast <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/c5_strengthenmana.png'> near the boss",
		"type": "bool"
	},
	{
		"key": "manaBoostUseItemId",
		"name": "ID of <b>item</b> for auto use (<img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_items/solventc15_tex.png'> <b>80081</b> /<img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_items/whitewine_tex.png'><b>80063</b>)",
		"type": "number",
		"min": 1,
		"max": 999999,
		"step": 1
	},
	{
		"key": "primeFlameManaBoost",
		"name": "Additional cast <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/primalfire_tex.png'> off colldown during <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/c5_strengthenmana.png'> on rotation",
		"type": "bool"
	},
	{
		"key": "primeFlameForce",
		"name": "Cast <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/primalfire_tex.png'> instead of cast <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/visionfirestorm_tex.png'> and <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/upliftedglacier_tex.png'> on rotation",
		"type": "bool"
	},
	{
		"key": "debug",
		"name": "Debug enabled",
		"type": "bool"
	}
];