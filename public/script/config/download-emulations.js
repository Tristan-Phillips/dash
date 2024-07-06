const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'ConsoleRom', url: 'https://www.consoleroms.com/' }],  
      ['b', { name: 'CD', url: 'https://cdromance.org/' }],
      ['c', { name: 'EmuLand', url: 'https://www.emu-land.net/en' }],
      ['d', { name: 'Myrient', url: 'https://myrient.erista.me/' }],
      ['e', { name: 'EGames', url: 'https://www.emugames.net/' }],
      ['f', { name: 'RomHustler', url: 'https://romhustler.org/' }],
      ['g', { name: 'Nintendo', url: 'https://nxbrew.com/' }],
      ['h', { name: 'Retrostic', url: 'https://www.retrostic.com/' }],
      ['i', { name: 'Romsever', url: 'https://romsever.com/' }],
      ['j', { name: 'RomHacking', url: 'https://www.romhacking.net/' }],
      ['k', { name: 'RHeaven', url: 'https://romheaven.com/' }],
      ['l', { name: 'HappyRoms', url: 'https://happyroms.com/' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);