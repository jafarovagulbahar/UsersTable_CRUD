
import React from 'react';
import { TreeList, 
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

import './styles.sass'
import DevStatus from '../../components/DevStatus/index.js';
import DevButtons from '../../components/DevButtons';
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
            // dataSource={employees}
            defaultExpandedRowKeys={expandedRowKeys}
            defaultFilterValue={filterValue}
            showBorders={true}
            keyExpr="ID"
            parentIdExpr="Structures"
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

            <Column
              width='600'
              dataField="Name">
              <StringLengthRule min={3} message="Name must have at least 3 symbols" />
              <StringLengthRule max={30} message="Name must be a maximum of 30 symbols" />
              <RequiredRule message="Name is required" />
              <PatternRule message="Do not use digits in the Name"
                pattern={/^[^0-9]+$/} />
            </Column>
            {DevStatus}
            <Column
              width='400'
              dataField="Structures"
              caption="Structures">
              <Lookup
                // dataSource={headDataSource}
                valueExpr="ID"
                displayExpr="Name" />
            </Column>
           {DevButtons}
          </TreeList>
        </div>
      </div>
    );
  }
  onEditorPreparing(e) {
    if (e.dataField === 'Structures' && e.row.data.ID === 1) {
      e.cancel = true;
    }
  }
  onInitNewRow(e) {
    e.data.Structures = 1;
  }
}

export default Table;
