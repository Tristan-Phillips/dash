const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'ATop', url: 'https://url.trap.lol/atopgames' }],
      ['b', { name: 'GBounty', url: 'https://url.trap.lol/gamebounty' }],
      ['c', { name: 'G4U', url: 'https://url.trap.lol/g4u' }],
      ['d', { name: 'GDie', url: 'https://url.trap.lol/gamdie' }],
      ['e', { name: 'GDrive', url: 'https://url.trap.lol/gamedrive' }],
      ['f', { name: 'GsDrive', url: 'https://url.trap.lol/gamesdrive' }],
      ['g', { name: 'GmzDL', url: 'https://url.trap.lol/gamezdl' }],
      ['h', { name: 'GOGg', url: 'https://url.trap.lol/gog-games' }],
      ['i', { name: 'OgDownl', url: 'https://url.trap.lol/oldgamesdownload' }],
      ['j', { name: 'OvAg', url: 'https://url.trap.lol/ovagames' }],
      ['k', { name: 'RldSteam', url: 'https://url.trap.lol/reloadedsteam' }],
      ['l', { name: 'SRip', url: 'https://url.trap.lol/steamrip' }],
      [
        '0',
        {
          name: 'Home',
          url: 'https://url.trap.lol/dash',
        },
      ],
    ]);