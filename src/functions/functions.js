import axios from "axios";

const getPoke = async (state) =>{
    const request = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
    const results = request.data.results
    
    let i, urls=[]
    for(i=0;i<results.length;i++){
        urls[i] = results[i].url
    }
    
    let index=[]
    for(i=0;i<urls.length;i++){
        index[i] = urls[i].split('/')
        let len = index[i].length
        index[i] = index[i][len-2]
    }

    let arr=[]
    for(i=0;i<results.length;i++){
        arr[i] = {
            'name' : results[i].name,
            'index' : index[i]
        }
    }
    state(arr);
}

const getImg = async (state) =>{
    const request = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
    const results = request.data.results

    let i, arr=[]
    for(i=0; i<results.length;i++){
        arr[i] = results[i].url
    }

    let results2 = []
    for(i=0;i<arr.length;i++){
        const getImg = await axios.get(arr[i])
        results2[i] = getImg.data.sprites.front_default
    }
    state(results2)
}

const getSpecificPoke = async(id, state) => {
    const request = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    state(request.data)
}

const getStat = async(id, state) => {
    const request = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const stats = request.data.stats

    let i, arr= [];
    for(i=0;i<stats.length;i++){
        arr[i] = {
            'name' : stats[i].stat.name,
            'base_stat' : stats[i].base_stat
        }
    }
    state(arr)
}

export {
    getPoke,
    getImg,
    getSpecificPoke,
    getStat
}