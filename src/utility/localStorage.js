
const getDataFromStorage=()=>{
    const storedData=localStorage.getItem('recipe');
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}

const saveCardToStorage=item=>{
   const remainData=getDataFromStorage();
   const exists=remainData.find(items=>items==item);
   if(!exists){
    remainData.push(item);
   }
   localStorage.setItem('recipe',JSON.stringify(remainData));
}

export {getDataFromStorage,saveCardToStorage};



  