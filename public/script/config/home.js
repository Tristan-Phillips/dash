const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
        // ['b', { name: 'B3Storage', url: 'https://url.trap.lol/storage' }],
            
        // ['d', { name: 'Domains', url: 'https://url.trap.lol/domainprovider' }],
        // ['e', { name: 'Elest', url: 'https://url.trap.lol/elest' }],
            
        // ['m', { name: 'Mail', url: 'https://url.trap.lol/mail' }],
        // ['n', { name: 'NS', url: 'https://url.trap.lol/cloudflare' }],
            
        // ['s', { name: 'Message', url: 'https://url.trap.lol/message' }],
        // ['y', { name: 'DNS', url: 'https://url.trap.lol/dns' }],
        // ['z', { name: 'VPS', url: 'https://url.trap.lol/vps' }],
      [
        '0',
        {
          name: 'Index',
          url: 'https://url.trap.lol/index',
        },
      ],
      [
        '1',
        {
          name: 'Passwords',
          url: 'https://url.trap.lol/rec-pass',
        },
      ],
      [
        '2',
        {
          name: 'VPN',
          url: 'https://url.trap.lol/rec-vpn',
        },
      ],
      [
        '3',
        {
          name: 'Message',
          url: 'https://url.trap.lol/rec-message',
        },
      ],
      [
        '9',
        {
          name: 'Tools',
          url: 'https://url.trap.lol/tools',
        },
      ],
    ]);