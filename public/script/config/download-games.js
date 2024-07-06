const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'ATop', url: 'https://atopgames.com/' }],
      ['b', { name: 'GBounty', url: 'https://gamebounty.world/' }],
      ['c', { name: 'G4U', url: 'https://g4u.to/' }],
      ['d', { name: 'GDie', url: 'https://gamdie.com/' }],
      ['e', { name: 'GDrive', url: 'https://gamedrive.org/' }],
      ['f', { name: 'GsDrive', url: 'https://gamesdrive.net/' }],
      ['g', { name: 'GmzDL', url: 'https://gamezdl.cc/' }],
      ['h', { name: 'GOGg', url: 'https://gog-games.to/' }],
      ['i', { name: 'OgDownl', url: 'https://oldgamesdownload.com/' }],
      ['j', { name: 'OvAg', url: 'https://www.ovagames.com/' }],
      ['k', { name: 'RldSteam', url: 'https://reloadedsteam.com/' }],
      ['l', { name: 'SRip', url: 'https://steamrip.com/' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);