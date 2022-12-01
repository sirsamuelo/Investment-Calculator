const dotaznik = [
	{
		id: 1,
		question: 'Investujes alebo investoval si uz niekedy ?',
		moznosti: [
			{ id: 1, a: 'yes', selected: false },
			{ id: 2, b: 'no', selected: false },
		],
		selected: false,
	},
	{
		id: 2,
		question: 'Ak ano do coho ?',
		moznosti: [
			{ id: 1, a: 'sporenie, fondy', selected: false },
			{ id: 2, b: 'dlhopisy, akcie', selected: false },
			{
				id: 3,
				c: 'Nehnutelnosti, komodity, drahe kovy',
				selected: false,
			},
			{ id: 4, d: 'Kryptomeny', selected: false },
		],
		selected: false,
	},
	{
		id: 3,
		question: 'Ak ano ake su tvohe skusenosti s investiciami ?',
		moznosti: [
			{ id: 1, a: 'kladne', selected: false },
			{ id: 2, b: 'zaporne', selected: false },
			{ id: 3, c: 'zmiesane', selected: false },
		],
		selected: false,
	},
	{
		id: 4,
		question: 'Ak si investoval, aka bola tvoja investicia',
		moznosti: [
			{ id: 1, a: 'stratova', selected: false },
			{ id: 2, b: 'ziskova', selected: false },
		],
		selected: false,
	},
	{
		id: 5,
		question: 'Ak si neivestoval, mas zaujem v buducnosti investovat ?',
		moznosti: [
			{ id: 1, a: 'ano', selected: false },
			{ id: 2, b: 'nie', selected: false },
			{ id: 3, c: 'neviem', selected: false },
		],
		selected: false,
	},
	{
		id: 6,
		question: 'Ak áno, do čoho by si investoval?',
		moznosti: [
			{ id: 1, a: 'Sporenie, fondy', selected: false },
			{ id: 2, b: 'Dlhopisy, akcie', selected: false },
			{ id: 3, c: 'Nehnutelnosti, komodity, drahe kovy', selected: false },
			{ id: 4, d: 'Kryptomeny', selected: false },
			{ id: 5, e: 'neviem', selected: false },
		],
		selected: false,
	},
	{
		id: 7,
		question: 'Ak áno, aký typ investície z hľadiska času by si uprednostnil? ',
		moznosti: [
			{ id: 1, a: 'Kratkodoba', selected: false },
			{ id: 2, b: 'dlhodoba', selected: false },
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
			},
			{
				id: 2,
				b: 'Investícia s nižším rizikom (nižší výnos).',
				selected: false,
			},
			{ id: 3, c: 'Kombinácia týchto dvoch.', selected: false },
		],
		selected: false,
	},
	{
		id: 9,
		question: 'Ak nie, prečo by ste neinvestovali?',
		moznosti: [
			{ id: 1, a: 'Nemám záujem o investovanie.', selected: false },
			{
				id: 2,
				b: 'Mám obavy o možnej strate svojich peňazí.',
				selected: false,
			},
			{
				id: 3,
				c: 'Môj príjem resp. finančné prostriedky nie sú dostatočné.',
				selected: false,
			},
			{ id: 4, d: 'Neviem.', selected: false },
		],
		selected: false,
	},
	{
		id: 10,
		question: 'Aký spôsob investovania je podľa Vás lepší?',
		moznosti: [
			{ id: 1, a: 'Pravidelne v nižších čiastkach.', selected: false },
			{ id: 2, b: 'Naraz vo väčších čiastkach.', selected: false },
		],
		selected: false,
	},
];

export default dotaznik;
