import LocalStore from "devextreme/data/local_store"
import DataSource from "devextreme/data/data_source"


const store = new LocalStore({
  key: "id" ,
  name: "tree-list-local-data",
  immediate: true,
  onInserted: (value, key)=>{
    if( window.localStorage )
    {
      if( !localStorage.getItem('firstLoad') )
      {
        localStorage['firstLoad'] = true;
        window.location.reload();
      }  
      else
        localStorage.removeItem('firstLoad');
    }
  },
  onRemoving: function (key) {
  
      dataSource.store()._array.forEach(element => {
       if(element.parent_id===key){
          
        // remove of removed parent element from localStorage
        // not completed(

       }
       else{ 
        console.log('no') 
       }
      
      });
    
 

   
    
},

})

export const dataSource = new DataSource({
  store,
})


