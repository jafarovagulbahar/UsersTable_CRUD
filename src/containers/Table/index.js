
import React from 'react';
import {
  TreeList,
} from 'devextreme-react/tree-list';
import DevMain from "../../components/DevMain"
import { dataSource } from "./dataSource"
import './styles.sass'
import DevStatus from '../../components/DevStatus/index.js';
import DevButtons from '../../components/DevButtons';
import DevName from '../../components/DevName';
import DevTreeLIstFeatures from '../../components/DevTreeLIstFeatures';


class Table extends React.Component {
  render() {
    return (
      <div id="tree-list-demo">
        <span className="HeaderLogo">
          <a href='/structure'>{`${' < BACK TO'}`}</a>
        </span>
        <div className='containers'>

          <TreeList
            id="employees"
            dataSource={dataSource}
            showRowLines={true}
            columnAutoWidth={true}
            keyExpr="id"
            parentIdExpr="parent_id"
            onInitNewRow={(e) => {
              e.data.id = undefined
              e.data.name = undefined
    
              if (!e.data.parent_id) {
                e.data.parent_id = undefined
              }
            }}
            showBorders={true}
            focusedRowEnabled={false}
            columnHidingEnabled={true}
          >
  
            {DevTreeLIstFeatures}
            {DevName}
            {DevMain}
            {DevStatus}
            {DevButtons}
          </TreeList>
        </div>
      </div>
    );
  }

}

export default Table;
