const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: '17TB', url: 'https://url.trap.lol/17tb' }],
      ['b', { name: '17TB4K', url: 'https://url.trap.lol/17tb4k' }],
      ['c', { name: 'WCinema', url: 'https://url.trap.lol/worldscinema' }],
      ['d', { name: 'LightDL', url: 'https://url.trap.lol/lightdl' }],
      ['e', { name: 'MKV', url: 'https://url.trap.lol/mkvcinemas' }],
      ['f', { name: 'MovieMod', url: 'https://url.trap.lol/moviesmod' }],
      ['g', { name: 'Pahe', url: 'https://url.trap.lol/pahe' }],
      ['h', { name: 'RareFilm', url: 'https://url.trap.lol/rarefilmm' }],
      ['i', { name: 'UHD', url: 'https://url.trap.lol/uhdmovies' }],
      ['j', { name: 'Vega', url: 'https://url.trap.lol/vegamovies' }],
      ['k', { name: 'VidNaija', url: 'https://url.trap.lol/vidnaija' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);