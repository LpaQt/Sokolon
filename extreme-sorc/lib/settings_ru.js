module.exports = [
	{
		"key": "enabled",
		"name": "Включение модуля (скилл-триггер ротации <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/auraburn_tex.png'>)",
		"type": "bool"
	},
	{
		"key": "autoManaBoost",
		"name": "Авто-каст <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/c5_strengthenmana.png'> вблизи босса в ротации",
		"type": "bool"
	},
	{
		"key": "autoManaBoostBossHp",
		"name": "Минималньое кол-во % HP босса для каста <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/c5_strengthenmana.png'>",
		"type": "number",
		"min": 1,
		"max": 100,
		"step": 1
	},
	{
		"key": "autoImplosion",
		"name": "Авто-каст <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/collapse_tex.png'> с отменой анимации в ротации",
		"type": "bool"
	},
	{
		"key": "autoImplosionBossHp",
		"name": "Минималньое кол-во % HP босса для каста <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/collapse_tex.png'>",
		"type": "number",
		"min": 1,
		"max": 100,
		"step": 1
	},
	{
		"key": "iceLancesOffCd",
		"name": "Авто-каст <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/icespear_tex.png'> по откату в ротации",
		"type": "bool"
	},
	{
		"key": "autoIceLances",
		"name": "Авто-каст <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/icespear_tex.png'> после <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/blastball_tex.png'> и <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/manaburst_tex.png'> в ротации и вне ротации",
		"type": "bool"
	},
	{
		"key": "autoLockon",
		"name": "Авто-захват цели и каст <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/trackinginferno_tex.png'> и <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/mpsink_tex.png'> вблизи босса вне ротации",
		"type": "bool"
	},
	{
		"key": "manaBoostUseBrooch",
		"name": "Авто-использ. <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_items/brooch_kaia_b_tex.png'> <b>броши</b> после каста <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/c5_strengthenmana.png'> вблизи босса",
		"type": "bool"
	},
	{
		"key": "manaBoostUseBroochBossHp",
		"name": "Минималньое кол-во % HP босса для авто-использ. <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_items/brooch_kaia_b_tex.png'>",
		"type": "number",
		"min": 1,
		"max": 100,
		"step": 1
	},
	{
		"key": "manaBoostUseItem",
		"name": "Авто-использ. <b>предмета</b> после каста <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/c5_strengthenmana.png'> вблизи босса",
		"type": "bool"
	},
	{
		"key": "manaBoostUseItemId",
		"name": "ID <b>предмета</b> для авто-использования (<img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_items/solventc15_tex.png'> <b>80081</b> /<img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_items/whitewine_tex.png'><b>80063</b>)",
		"type": "number",
		"min": 1,
		"max": 999999,
		"step": 1
	},
	{
		"key": "primeFlameManaBoost",
		"name": "Доп. каст <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/primalfire_tex.png'> по откату пока работает <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/c5_strengthenmana.png'> в ротации",
		"type": "bool"
	},
	{
		"key": "primeFlameForce",
		"name": "Каст <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/primalfire_tex.png'> вместо каста <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/visionfirestorm_tex.png'> и <img width='24' height='24' valign='middle' src='https://teralore.com/items/icon_skills/upliftedglacier_tex.png'> в ротации",
		"type": "bool"
	},
	{
		"key": "debug",
		"name": "Включение режима отладки",
		"type": "bool"
	}
];