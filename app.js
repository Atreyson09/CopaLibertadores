function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    const resultadosDiv = document.getElementById("resultados-pesquisas");


    // Obtém o termo de pesquisa
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultadosHTML = "";
    let titulo ="";
    let descricao = "";
    let tags = ""

    //se campoPesquisa for uma string sem nada
if (campoPesquisa === "") {
    resultadosDiv.innerHTML = "<p>Nada foi encontrado</p>";
    return;
    }

    // Itera sobre cada time e verifica se o título contém o termo de pesquisa 
        
        times.forEach(time => {
            if (time.titulo.toLowerCase().includes(campoPesquisa) ||
                time.descricao.toLowerCase().includes(campoPesquisa) ||
                time.tags.some(tag => tag.toLowerCase().includes(campoPesquisa))) {
              resultadosHTML += `
                <div class="item-resultado">
                  <h2>
                    <a href="${time.link}" target="_blank">${time.titulo}</a>
                  </h2>
                  <p class="descricao-meta">${time.descricao}</p>
                </div>
              `;
            }
          });
        
          if(!resultadosDiv){
            resultadosDiv = "<p>nada encontrado</p>";
            return
          }


          resultadosDiv.innerHTML = resultadosHTML;
        }