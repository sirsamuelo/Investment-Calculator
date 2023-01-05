const dotaznik = [
	{
		id: 1,
		question: 'Have you ever invested before ?',
		moznosti: [
			{ id: 1, a: 'Yes', selected: false, value: 0 },
			{ id: 2, b: 'No', selected: false, value: 0 },
		],
		selected: false,
	},
	{
		id: 2,
		question: 'If yes, where have you invested ? ',
		moznosti: [
			{ id: 1, a: 'savings, funds', selected: false, value: 2 },
			{ id: 2, b: 'bonds, stocks', selected: false, value: 3 },
			{
				id: 3,
				c: 'Real estate, commodities, precious metals',
				selected: false,
				value: 3,
			},
			{ id: 4, d: 'Cryptocurrencies', selected: false, value: 5 },
		],
		selected: false,
	},
	{
		id: 3,
		question: 'If so, what is your experience with investments ?',
		moznosti: [
			{ id: 1, a: 'Positive', selected: false, value: 0 },
			{ id: 2, b: 'Negative', selected: false, value: 0 },
			{ id: 3, c: 'Mixed', selected: false, value: 0 },
		],
		selected: false,
	},
	{
		id: 4,
		question: 'If you invested, what kind of profit did you make ? ',
		moznosti: [
			{ id: 1, a: 'lossy', selected: false, value: 0 },
			{ id: 2, b: 'profit', selected: false, value: 0 },
		],
		selected: false,
	},
	{
		id: 5,
		question:
			'If you have not invested, are you interested in investing in the future?',
		moznosti: [
			{ id: 1, a: 'Yes', selected: false, value: 2 },
			{ id: 2, b: 'No', selected: false, value: 1 },
			{ id: 3, c: 'I am not decided', selected: false, value: 0 },
		],
		selected: false,
	},
	{
		id: 6,
		question: 'If so, what would you invest in ?',
		moznosti: [
			{ id: 1, a: 'Savings, funds', selected: false, value: 1 },
			{ id: 2, b: 'Bonds, stocks', selected: false, value: 2 },
			{
				id: 3,
				c: 'Real estate, commodities, precious metals',
				selected: false,
				value: 2,
			},
			{ id: 4, d: 'Cryptocurrencies', selected: false, value: 5 },
			{ id: 5, e: 'I dont know', selected: false, value: 0 },
		],
		selected: false,
	},
	{
		id: 7,
		question: 'If so, what type of time investment would you prefer ?',
		moznosti: [
			{ id: 1, a: 'Short term', selected: false, value: 3 },
			{ id: 2, b: 'Long term', selected: false, value: 1 },
		],
		selected: false,
	},
	{
		id: 8,
		question:
			'If so, what type of investment would you prefer in terms of risk ?',
		moznosti: [
			{
				id: 1,
				a: 'Investment with high risk (higher return)',
				selected: false,
				value: 4,
			},
			{
				id: 2,
				b: 'Investment with lower risk (lower return)',
				selected: false,
				value: 1,
			},
			{ id: 3, c: 'A combination of the two', selected: false, value: 2 },
		],
		selected: false,
	},
	{
		id: 9,
		question: 'If not, why not invest ?',
		moznosti: [
			{
				id: 1,
				a: 'I am not interested in investing',
				selected: false,
				value: 0,
			},
			{
				id: 2,
				b: 'I am worried about possible loss of my money',
				selected: false,
				value: 1,
			},
			{
				id: 3,
				c: 'My income or funds are not sufficient',
				selected: false,
				value: 0,
			},
			{ id: 4, d: 'I dont know.', selected: false, value: 0 },
		],
		selected: false,
	},
	{
		id: 10,
		question: 'Which investment method do you think is better ?',
		moznosti: [
			{
				id: 1,
				a: 'Regularly in lower amounts',
				selected: false,
				value: 1,
			},
			{ id: 2, b: 'In larger amounts at once', selected: false, value: 4 },
		],
		selected: false,
	},
];

export default dotaznik;
