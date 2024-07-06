const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: '17TB', url: 'https://mega.nz/folder/Jk8RjIBA#_dTNthUX3LL7OwSaauqIpw' }],
      ['b', { name: '17TB4K', url: 'https://mega.nz/folder/Pt8AHLAC#tAte3gNlNossthoHiSCL5w' }],
      ['c', { name: 'WCinema', url: 'https://worldscinema.org/' }],
      ['d', { name: 'LightDL', url: 'https://lightdl.xyz/' }],
      ['e', { name: 'MKV', url: 'https://mkvcinemas.cymru/' }],
      ['f', { name: 'MovieMod', url: 'https://moviesmod.space/' }],
      ['g', { name: 'Pahe', url: 'https://pahe.ink/' }],
      ['h', { name: 'RareFilm', url: 'https://rarefilmm.com/' }],
      ['i', { name: 'UHD', url: 'https://uhdmovies.tel/' }],
      ['j', { name: 'Vega', url: 'https://vegamovies.lt/' }],
      ['k', { name: 'VidNaija', url: 'https://vidnaija.com.ng/' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);