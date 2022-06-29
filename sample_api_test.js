const MFA = require('mangadex-full-api');

MFA.login('mangastop', 'karan9034', './bin/.md_cache').then(async () => {
    let manga = await MFA.Manga.search({
            title: 'Detective Conan',
            limit: 20
    });
    console.log(manga);
    // let chapters = await manga.getFeed({ translatedLanguage: ['en'] }, true); 
    // let chapter = chapters[1];
    // let pages = await chapter.getReadablePages();
    // console.log(`Here is the first page: ${pages[0]}`);
}).catch(console.error);