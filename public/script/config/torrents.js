const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['1', { name: 'Anime', url: 'https://dash.trap.lol/hub/torrents/anime' }],
      ['2', { name: 'General', url: 'https://dash.trap.lol/hub/torrents/general' }],
      ['3', { name: 'Books', url: 'https://dash.trap.lol/hub/torrents/books' }],
      ['4', { name: 'Emulations', url: 'https://dash.trap.lol/hub/torrents/emulators' }],
      ['5', { name: 'Games', url: 'https://dash.trap.lol/hub/torrents/games' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);