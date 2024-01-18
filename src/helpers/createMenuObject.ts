type activeMenu = '' | 'todos' | 'dogs' | 'cats' | 'fishes'


export const createMenuObject = (activeMenu : activeMenu )=>{
    let returnObject = {
        todos : false,
        dogs : false,
        cats : false,
        fishes: false,
    }

    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    }

     return returnObject
}