let arrLang = {
    en: {
        'highlights' : '>highlights',
        'about' : '>who am i?',
        'playground' : '>playground',
        'cv' : '>resume'
    },

    fr: {
        'highlights' : '>sélection',
        'about' : '>qui suis-je?',
        'playground' : '>place de jeu',
        'cv' : '>cv'
    }
}

$(function() {
let lang =localStorage.getItem('language');
changeLanguage(lang);


$('.translate').click(function(){
 lang = $(this).attr('id');
 localStorage.setItem('language', lang);
 changeLanguage(lang);
});

function changeLanguage(lang){
$('.lang').each(function(index,element){
     $(this).text(arrLang[lang][$(this).attr('key')]);
 }); 
}

})