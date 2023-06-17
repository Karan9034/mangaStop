const MFA = require('mangadex-full-api');

module.exports = {
    homeController: async (req, res) => {
        var mangasData = []
        let mangas = await MFA.Manga.search({
                title: req.query.search ? req.query.search : '',
                limit: 6,
        });
        for(let i=0; i<mangas.length; i++){
            let cover = await MFA.Cover.get(mangas[i].mainCover.id)
            mangasData.push({title: mangas[i].title, id: mangas[i].id, coverLink: cover.image512});
        }
        res.render('home', {title: 'Home', mangasData: mangasData})
    }
}