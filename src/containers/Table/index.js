
import React from 'react';
import {
  TreeList,
  StateStoring,
  FilterRow,
  FilterPanel,
  HeaderFilter,
  Editing,
  Column,
  RequiredRule,
  PatternRule,
  Lookup,
  Button,
  Scrolling,
  Paging,
  Pager,
  StringLengthRule
} from 'devextreme-react/tree-list';
import DevMain from "../../components/DevMain"
import { dataSource } from "./dataSource"
import './styles.sass'
import DevStatus from '../../components/DevStatus/index.js';
import DevButtons from '../../components/DevButtons';
import DevName from '../../components/DevName';
const allowedPageSizes = [5, 10, 20];

const filterValue = ['Name'];

const expandedRowKeys = [1, 2, 3, 4, 5];


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
            showBorders={true}
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
          >
            <StateStoring enabled={true} type="localStorage" storageKey="treeListStorage" />
            <FilterRow visible={true} />
            <FilterPanel visible={true} />
            <HeaderFilter visible={true} />
            <Scrolling
              mode="standard" />
            <Paging
              enabled={true}
              defaultPageSize={10} />
            <Pager
              showPageSizeSelector={true}
              allowedPageSizes={allowedPageSizes}
              showInfo={true} />
            <Editing
              allowUpdating={true}
              allowDeleting={true}
              allowAdding={true}
              mode="row" />
        
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
