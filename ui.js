class UI {
    static addFilm(newFilm){
        const films_table = document.getElementById('films_table');
        films_table.innerHTML += `
        <tr>
                            
            <td><img src="${newFilm.url}" alt=""></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><button id="delete_film" class="delete_film" >Sil</button></td>
    
        </tr>
        `
    }
    
    static clearinputs(title , director , url){
        title.value = "";
        director.value = ""
        url.value = "";
    }
    
    static alert(text , kind){
        const alert_col = document.querySelector('.alert-col');
    
        alert_col.innerHTML = `
            <div class="alert alert-${kind}" role="alert">
                ${text}
            </div>
        `
    
        setTimeout((e) => {
            alert_col.innerHTML = "";
        } ,2000)
    }
    
    static LoadFilms(films){
        films.forEach(film => {
            const films_table = document.getElementById('films_table');
            films_table.innerHTML += `
            <tr>
                                
                <td><img src="${film.url}" alt=""></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><button id="delete_film" class="delete_film" >Sil</button></td>
        
            </tr>
            `
        });
    }
    
    static DeleteFilms(element){
        if (element.target.className == "delete_film"){
            element.target.parentElement.parentElement.remove();
        }
    }
}

