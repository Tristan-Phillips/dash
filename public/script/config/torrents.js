const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['1', { name: 'Anime', url: 'https://url.trap.lol/torrents-anime' }],
      ['2', { name: 'General', url: 'https://url.trap.lol/torrents-general' }],
      ['3', { name: 'Books', url: 'https://url.trap.lol/torrents-books' }],
      ['4', { name: 'Emulations', url: 'https://url.trap.lol/torrents-emulators' }],
      ['5', { name: 'Games', url: 'https://url.trap.lol/torrents-games' }],
      [
        '0',
        {
          name: 'Home',
          url: 'https://url.trap.lol/dash',
        },
      ],
    ]);