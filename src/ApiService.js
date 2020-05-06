

 let wrong = "Something went wrong, please try again later"
const apiService = {
    searchFetch(city){
    return fetch(`https://api.teleport.org/api/cities/?search=${city}&limit=2`)
        .then(response => {
            if(!response.ok) {
                throw new Error(wrong)
            }
            return response.json()
        })
},
    cityDataFetch(citySearchUrl){
       return fetch(citySearchUrl)
            .then(response => {
                if(!response.ok){
                    throw new Error(wrong)
                }
                return response.json()
            })
    },
    urbanAreaFetch(urbanAreaUrl){
        return fetch(urbanAreaUrl)
            .then(response => {
                if(!response.ok){
                    throw new Error(wrong)
                }
                return response.json()
            })
    },
    scoreDataFetch(scoreDataUrl){
        return fetch(scoreDataUrl)
        .then(response => {
            if(!response.ok){
                throw new Error(wrong)
            }
            return response.json()
        })
    },
    imageLinkFetch(imageLinkurl){
        return fetch(imageLinkurl)
        .then(response => {
            if(!response.ok){
                throw new Error(wrong)
            }
            return response.json()
        })
    },
    salaryDataFetch(salaryDataUrl){
        return fetch(salaryDataUrl)
        .then(response => {
            if(!response.ok){
                throw new Error(wrong)
            }
            return response.json()
        })
    }
}
export default apiService;
