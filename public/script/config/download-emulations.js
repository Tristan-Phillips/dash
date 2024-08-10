const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'ConsoleRom', url: 'https://url.trap.lol/consoleroms' }],  
      ['b', { name: 'CD', url: 'https://url.trap.lol/cdromance' }],
      ['c', { name: 'EmuLand', url: 'https://url.trap.lol/emu-land' }],
      ['d', { name: 'Myrient', url: 'https://url.trap.lol/myrient' }],
      ['e', { name: 'EGames', url: 'https://url.trap.lol/emugames' }],
      ['f', { name: 'RomHustler', url: 'https://url.trap.lol/romhustler' }],
      ['g', { name: 'Nintendo', url: 'https://url.trap.lol/nxbrew' }],
      ['h', { name: 'Retrostic', url: 'https://url.trap.lol/retrostic' }],
      ['i', { name: 'Romsever', url: 'https://url.trap.lol/romsever' }],
      ['j', { name: 'RomHacking', url: 'https://url.trap.lol/romhacking' }],
      ['k', { name: 'RHeaven', url: 'https://url.trap.lol/romheaven' }],
      ['l', { name: 'HappyRoms', url: 'https://url.trap.lol/happyroms' }],
      [
        '0',
        {
          name: 'Home',
          url: 'https://url.trap.lol/dash',
        },
      ],
    ]);