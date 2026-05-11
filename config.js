// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Nghia',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'computer',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'http://mail.google.com',
		},
		{
			id: '3',
			name: 'Report',
			icon: 'clipboard-minus',
			link: 'https://docs.google.com/document/d/1OjSamPprdikzYXQk2CqSOXEsP1R6V5vYKCPFe6YXWPA/edit?tab=t.0',
		},
		{
			id: '4',
			name: 'Messenger',
			icon: 'message-circle-more',
			link: 'https://messenger.com',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'guitar',
			id: '1',
			links: [
				{
					name: '気に入り',
					link: 'https://open.spotify.com/user/31xrm4xo3m4pnrzmnwmarva37ohq?si=bbaba9a667df4832',
				},
				{
					name: 'ユーロビート',
					link: 'https://open.spotify.com/playlist/05AqMPMJnXvuKU9VxwQ9CP?si=62308c319d0e4747',
				},
				{
					name: 'Jロック・Jポップ',
					link: 'https://open.spotify.com/playlist/37i9dQZF1EQoowv2cDraCW?si=de1597e3ec0f47ce',
				},
			],
		},
		{
			icon: 'folder-kanban',
			id: '2',
      			links: [
			        {
			          name: 'Call Center',
			          link: 'https://docs.google.com/spreadsheets/d/1mzT7friH8XzW089XnAfqKwYebhoR9dMnlwJYtVZnhGs/edit?gid=210746765#gid=210746765',
			        },
			        {
			          name: 'LivPark',
			          link: 'https://docs.google.com/spreadsheets/d/1vQ96d7DIZr73qTqPmAf3wI8lUhLW9nDh8_FVd6qZn4Y/edit?gid=757132495#gid=757132495',
			        },
			        {
			          name: 'Scraping',
			          link: 'https://docs.google.com/spreadsheets/d/1DV7lKBwZfpjiauKZH-52mcQwIQrc0ZNHPR9T8h89v4s/edit?gid=0#gid=0',
			        },
			],
		},
	],
};
