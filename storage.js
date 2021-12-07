
class Storage{
    static addFilmToStroage(newFilm){
        let films = this.controlStorage();
        films.push(newFilm);
        localStorage.setItem('films' , JSON.stringify(films))
    }
    
    static controlStorage(){
        let films;
    
        if(localStorage.getItem('films') == null){
            films = [];
        }
        else{
            films = JSON.parse(localStorage.getItem('films'));
        }
        return films;
    }
    static DeleteFilms(e) {
    
        let films = this.controlStorage();
        films.forEach( function(film , index) {
            let textcontent = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
            if(film.title == textcontent){
                films.splice(index,1)
            }
        });
        localStorage.setItem('films' , JSON.stringify(films))
    }
}

