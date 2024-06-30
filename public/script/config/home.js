const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      //['a', { name: 'AI', url: 'https://dash.trap.lol/hub/a' }],
      ['b', { name: 'Blogs', url: 'https://blog.trap.lol' }],
      ['c', { name: 'Cyberchef', url: 'https://cyberchef.trap.lol' }],
      ['d', { name: 'Database', url: 'https://db.trap.lol' }],
      //['e', { name: 'Entertainment', url: 'https://dash.trap.lol/hub/e' }],
      ['f', { name: 'RSS Feed', url: 'https://rss.trap.lol' }],
      //['g', { name: 'Gaming', url: 'https://dash.trap.lol/hub/g' }],
      //['h', { name: 'Health', url: 'https://dash.trap.lol/hub/h' }],
      ['i', { name: 'IT-Tools', url: 'https://it-tools.trap.lol' }],
      //['j', { name: 'Jobs', url: 'https://dash.trap.lol/hub/j' }],
      ['k', { name: 'Knowledge', url: 'https://knowledge.trap.lol' }],
      //['l', { name: 'Legal', url: 'https://dash.trap.lol/hub/l' }],
      ['m', { name: 'Memos', url: 'https://memo.trap.lol/' }],
      //['n', { name: 'News', url: 'https://dash.trap.lol/hub/n' }],
      //['o', { name: 'OPSEC', url: 'https://dash.trap.lol/hub/o' }],
      ['p', { name: 'PDF Tools', url: 'https://pdf.trap.lol' }],
      //['q', { name: 'Quirks', url: 'https://dash.trap.lol/hub/q' }],
      ['r', { name: 'Recipes', url: 'https://recipe.trap.lol' }],
      //['s', { name: 'Social', url: 'https://dash.trap.lol/hub/s' }],
      //['t', { name: 'Tools', url: 'https://dash.trap.lol/hub/t' }],
      //['u', { name: 'Upload', url: 'https://dash.trap.lol/hub/u' }],
      //['v', { name: 'Virtual', url: 'https://dash.trap.lol/hub/v' }],
      ['w', { name: 'Web Check', url: 'https://webcheck.trap.lol/' }],
      //['x', { name: 'Seven Seas', url: 'https://dash.trap.lol/hub/x' }],
      ['y', { name: 'YT Download', url: 'https://ytdlp.trap.lol/' }],
      //['z', { name: 'Proxies', url: 'https://dash.trap.lol/hub/s' }],
      [
        '0',
        {
          name: 'localhost',
          searchTemplate: ':{}',
          suggestions: ['0 54323', '0 54324'],
          url: 'http://localhost:8080',
        },
      ],
    ]);