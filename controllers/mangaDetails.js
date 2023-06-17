const MFA = require('mangadex-full-api');

module.exports = {
    mangaDetailsController: async (req, res) => {
        if(req.params.id){
            let manga = await MFA.Manga.get(req.params.id);
            let cover = await MFA.Cover.get(manga.mainCover.id)
            let volumes = await MFA.Manga.getAggregate(req.params.id);
            console.log(volumes['1'].chapters['1']);
            let chaptersData = []
            for(let i=0; i<chapters.length; i++){
                chaptersData.push({title: chapters[i].title, id: chapters[i].id});
            }
            console.log(chaptersData.length);
            res.render('mangaDetails', {title: manga.title, coverLink: cover.image512, chaptersData: chaptersData})
        }else{
            res.status(404).render('error', {title: '404', msg: "Page not found"})
        }
    }
}