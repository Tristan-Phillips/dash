const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['1', { name: 'Anime', url: 'https://url.trap.lol/download-anime' }],
      ['2', { name: 'General', url: 'https://url.trap.lol/download-general' }],
      ['3', { name: 'Books', url: 'https://url.trap.lol/download-books' }],
      ['4', { name: 'Emulations', url: 'https://url.trap.lol/download-emulators' }],
      ['5', { name: 'Games', url: 'https://url.trap.lol/download-games' }],
      ['6', { name: 'Movie && TV', url: 'https://url.trap.lol/download-movie-tv' }],
      [
        '0',
        {
          name: 'Home',
          url: 'https://url.trap.lol/dash',
        },
      ],
    ]);