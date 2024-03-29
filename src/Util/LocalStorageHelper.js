const LocalStorageHelper ={
  set: (key, obj)=>{
    localStorage.setItem(key, JSON.stringify(obj));
  },
  get: (key)=>{
    return JSON.parse(localStorage.getItem(key));
  }
}


export default LocalStorageHelper;