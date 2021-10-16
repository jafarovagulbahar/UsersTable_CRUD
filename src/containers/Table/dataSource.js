import LocalStore from "devextreme/data/local_store"
import DataSource from "devextreme/data/data_source"


const store = new LocalStore({
  key: "id" ,
  name: "tree-list-local-data",
  immediate: true,
  onInserted: (value, key)=>{
    if( window.localStorage )
    {
      if(!localStorage.getItem('firstLoad'))
      {
        localStorage['firstLoad'] = true;
        window.location.reload();
      }  
      else
        localStorage.removeItem('firstLoad');
    }
  },
})

export const dataSource = new DataSource({
  store,
})

