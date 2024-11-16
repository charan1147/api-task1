const dogFactsApi = "https://dog-api.kinduff.com/api/facts";


function fetchRandomFact(){
    return new Promise((resolve,reject)=>{
        fetch(dogFactsApi).then((response)=>{
            return response.json()
        }).then((data)=>{
            const fact=data.facts[0];
            resolve(fact)
        }).catch((error)=>{
            reject("Error fetching Dog Facts",error)
        })

        })
    }



    function displayDogFact() {
        fetchRandomFact()
            .then(fact => {
                document.getElementById('RandomFact').innerHTML = `
                    <p>${fact}</p>
                `;
            })
            .catch(error => console.error(error));
        }