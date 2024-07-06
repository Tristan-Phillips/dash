const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['b', { name: 'Bit Search', url: 'https://bitsearch.to/' }],
      ['d', { name: 'BTDIG', url: 'https://btdig.com/' }],
      ['e', { name: 'EXT', url: 'https://ext.to/' }],
      ['g', { name: 'BT4G', url: 'https://bt4gprx.com/' }],
      ['l', { name: 'LimeTorrents', url: 'https://www.limetorrents.lol/' }],
      ['m', { name: 'BitMet', url: 'https://btmet.com/' }],
      ['t', { name: 'TPro', url: 'https://www.torrentdownloads.pro/' }],
      ['x', { name: '1337x', url: 'https://1337x.to' }],
      ['y', { name: 'TGalaxy', url: 'https://torrentgalaxy.to/' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);