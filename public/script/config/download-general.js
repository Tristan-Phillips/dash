const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'FileP', url: 'https://url.trap.lol/filepursuit' }],
      ['b', { name: 'Aorg', url: 'https://url.trap.lol/archiveorg' }],
      ['c', { name: 'Scnlog', url: 'https://url.trap.lol/scnlog' }],
      ['d', { name: 'SA', url: 'https://url.trap.lol/softarchive' }],
      [
        '0',
        {
          name: 'Home',
          url: 'https://url.trap.lol/dash',
        },
      ],
    ]);