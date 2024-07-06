const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['1', { name: 'Anime', url: 'https://dash.trap.lol/hub/download/anime' }],
      ['2', { name: 'General', url: 'https://dash.trap.lol/hub/download/general' }],
      ['3', { name: 'Books', url: 'https://dash.trap.lol/hub/download/books' }],
      ['4', { name: 'Emulations', url: 'https://dash.trap.lol/hub/download/emulators' }],
      ['5', { name: 'Games', url: 'https://dash.trap.lol/hub/download/emulators' }],
      ['6', { name: 'Movie && TV', url: 'https://dash.trap.lol/hub/download/movie-tv' }],
      ['7', { name: 'Music', url: 'https://dash.trap.lol/hub/download/music' }],

      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);