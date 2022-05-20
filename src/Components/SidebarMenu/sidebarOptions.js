export const FirstLevel = {
	main: [
		{
			id: 1,
			title: 'Company',
			link: '/company',
			extend: true,
		},
		{
			id: 2,
			title: 'Careers',
			link: '/careers',
			extend: true,
		},
		{
			id: 3,
			title: 'Technology',
			link: '/technology',
			extend: true,
		},
		{
			id: 4,
			title: 'Products',
			link: '/products',
			extend: false,
		},
		{
			id: 5,
			title: 'News',
			link: '/news',
			extend: false,
		},
		{
			id: 6,
			title: 'Investors',
			link: '/investors',
			extend: false,
		},
	],

	secondary: [
		{
			id: 8,
			title: 'CustomerNet',
			link: '/products/customernet',
			extend: false,
		},
		{
			id: 9,
			title: 'ASML Foundation',
			link: '/company/asml-foundation',
			extend: false,
		},
	],
};

export const SecondLevel = [
	{
		parent: 1,
		list: [
			{
				id: 11,
				title: 'About ASML',
				link: '/company/about-asml',
				extend: true,
			},
		],
		extra: {
			description:
				'Get to know ASML and learn about our vision and mission, our history, and how we operate.',
			parentTitle: 'Company',
			parentPath: '/company',
		},
	},
	{
		parent: 2,
		list: [
			{
				id: 21,
				title: 'Search jobs',
				link: '/careers/find-your-job',
				extend: false,
			},
			{
				id: 22,
				title: 'Working at ASML',
				link: '/careers/working-at-asml',
				extend: false,
			},
		],
		extra: {
			description:
				'Explore careers at ASML and join the high-tech semiconductor industry, where you can work on technology that can change the world.',
			parentTitle: 'Careers',
			parentPath: '/careers',
		},
	},
	{
		parent: 3,
		list: [
			{
				id: 31,
				title: 'All about chips',
				link: '/technology/all-about-microchips',
				extend: true,
			},
			{
				id: 32,
				title: 'Software',
				link: '/technology/software',
				extend: false,
			},
		],
		extra: {
			description:
				'Learn about the technology behind our lithography, metrology and inspection, and software solutions.',
			parentTitle: 'Technology',
			parentPath: '/technology',
		},
	},
];
export const ThirdLevel = [
	{
		parent: 11,
		list: [
			{
				title: 'History',
				link: '/company/about-asml/history',
				extent: false,
			},
		],
		extra: {
			description:
				'ASML is an innovation leader in the semiconductor industry. Find out what we do and why we do it.',
			parentTitle: 'About ASML',
			parentPath: '/company/about-asml',
		},
	},
	{
		parent: 31,
		list: [
			{
				title: 'The basics',
				link: '/technology/all-about-microchips/microchip-basics',
				extend: false,
			},
		],
		extra: {
			description:
				'Microchips may be small, but their impact is tremendous. Discover more.',
			parentTitle: 'All about chips',
			parentPath: '/technology/all-about-microchips',
		},
	},
];
