const titleElement = document.getElementById('director');
const filmElement = document.getElementById('film_name');
const urlElement = document.getElementById('url');

evenetlisteners();

function evenetlisteners(){
    document.addEventListener('DOMContentLoaded' , () => {
        let films  = storage.controlStorage();
        ui.LoadFilms(films);
    })
}
const ui = new UI();
const storage = new Storage();
function addFilm(){
    const title = titleElement.value;
    const film = filmElement.value;
    const url = urlElement.value;
    if(title == "" || film == "" || url == ""){
        //Hata
        ui.alert("Liste Eklenemedi" , "alert");
    }
    else{
        const newFilm = new Film(title , film , url )

        ui.addFilm(newFilm);
        storage.addFilmToStroage(newFilm);
        ui.alert("Liste Basariyla Eklendi" , "success");
        
    }
    ui.clearinputs(titleElement , filmElement , urlElement);
}

const films_table = document.getElementById('films_table');
films_table.addEventListener('click' , (e) => {
    ui.DeleteFilms(e)
    storage.DeleteFilms(e);
    
})
