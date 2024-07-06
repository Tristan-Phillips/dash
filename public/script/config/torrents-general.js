const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'Bit Search', url: 'https://bitsearch.to/' }],
      ['b', { name: 'BTDIG', url: 'https://btdig.com/' }],
      ['c', { name: 'EXT', url: 'https://ext.to/' }],
      ['d', { name: 'BT4G', url: 'https://bt4gprx.com/' }],
      ['e', { name: 'LimeTorrents', url: 'https://www.limetorrents.lol/' }],
      ['f', { name: 'BitMet', url: 'https://btmet.com/' }],
      ['g', { name: 'TPro', url: 'https://www.torrentdownloads.pro/' }],
      ['h', { name: '1337x', url: 'https://1337x.to' }],
      ['i', { name: 'TGalaxy', url: 'https://torrentgalaxy.to/' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);