const dotaznik = [
	{
		id: 1,
		question: 'Investujes alebo investoval si uz niekedy ?',
		moznosti: [
			{ id: 1, a: 'yes', selected: false, value: 0 },
			{ id: 2, b: 'no', selected: false, value: 0 },
		],
		selected: false,
	},
	{
		id: 2,
		question: 'Ak ano do coho ?',
		moznosti: [
			{ id: 1, a: 'sporenie, fondy', selected: false, value: 2 },
			{ id: 2, b: 'dlhopisy, akcie', selected: false, value: 3 },
			{
				id: 3,
				c: 'Nehnutelnosti, komodity, drahe kovy',
				selected: false,
				value: 3,
			},
			{ id: 4, d: 'Kryptomeny', selected: false, value: 5 },
		],
		selected: false,
	},
	{
		id: 3,
		question: 'Ak ano ake su tvohe skusenosti s investiciami ?',
		moznosti: [
			{ id: 1, a: 'kladne', selected: false, value: 0 },
			{ id: 2, b: 'zaporne', selected: false, value: 0 },
			{ id: 3, c: 'zmiesane', selected: false, value: 0 },
		],
		selected: false,
	},
	{
		id: 4,
		question: 'Ak si investoval, aka bola tvoja investicia',
		moznosti: [
			{ id: 1, a: 'stratova', selected: false, value: 0 },
			{ id: 2, b: 'ziskova', selected: false, value: 0 },
		],
		selected: false,
	},
	{
		id: 5,
		question: 'Ak si neivestoval, mas zaujem v buducnosti investovat ?',
		moznosti: [
			{ id: 1, a: 'ano', selected: false, value: 2 },
			{ id: 2, b: 'nie', selected: false, value: 1 },
			{ id: 3, c: 'neviem', selected: false, value: 0 },
		],
		selected: false,
	},
	{
		id: 6,
		question: 'Ak áno, do čoho by si investoval?',
		moznosti: [
			{ id: 1, a: 'Sporenie, fondy', selected: false, value: 1 },
			{ id: 2, b: 'Dlhopisy, akcie', selected: false, value: 2 },
			{
				id: 3,
				c: 'Nehnutelnosti, komodity, drahe kovy',
				selected: false,
				value: 2,
			},
			{ id: 4, d: 'Kryptomeny', selected: false, value: 5 },
			{ id: 5, e: 'neviem', selected: false, value: 0 },
		],
		selected: false,
	},
	{
		id: 7,
		question: 'Ak áno, aký typ investície z hľadiska času by si uprednostnil? ',
		moznosti: [
			{ id: 1, a: 'Kratkodoba', selected: false, value: 3 },
			{ id: 2, b: 'dlhodoba', selected: false, value: 1 },
		],
		selected: false,
	},
	{
		id: 8,
		question:
			'Ak áno, aký typ investície z hľadiska rizika by si uprednostnil?',
		moznosti: [
			{
				id: 1,
				a: 'Investícia s vysokým rizikom (vyšší výnos).',
				selected: false,
				value: 4,
			},
			{
				id: 2,
				b: 'Investícia s nižším rizikom (nižší výnos).',
				selected: false,
				value: 1,
			},
			{ id: 3, c: 'Kombinácia týchto dvoch.', selected: false, value: 2 },
		],
		selected: false,
	},
	{
		id: 9,
		question: 'Ak nie, prečo by ste neinvestovali?',
		moznosti: [
			{ id: 1, a: 'Nemám záujem o investovanie.', selected: false, value: 0 },
			{
				id: 2,
				b: 'Mám obavy o možnej strate svojich peňazí.',
				selected: false,
				value: 1,
			},
			{
				id: 3,
				c: 'Môj príjem resp. finančné prostriedky nie sú dostatočné.',
				selected: false,
				value: 0,
			},
			{ id: 4, d: 'Neviem.', selected: false, value: 0 },
		],
		selected: false,
	},
	{
		id: 10,
		question: 'Aký spôsob investovania je podľa Vás lepší?',
		moznosti: [
			{
				id: 1,
				a: 'Pravidelne v nižších čiastkach.',
				selected: false,
				value: 1,
			},
			{ id: 2, b: 'Naraz vo väčších čiastkach.', selected: false, value: 4 },
		],
		selected: false,
	},
];

export default dotaznik;
