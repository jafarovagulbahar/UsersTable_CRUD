
import React from 'react';
import { TreeList, StateStoring, Editing, Column, RequiredRule, Lookup, Button, Scrolling, Paging, Pager } from 'devextreme-react/tree-list';

import { employees } from '../../data.js';
const allowedPageSizes = [5, 10, 20];

const expandedRowKeys = [1, 2, 3, 4, 5];

const headDataSource = {
  store: employees,
  sort: 'Full_Name'
};

class Table extends React.Component {
  render() {
    return (
      <div id="tree-list-demo">
        <TreeList
          id="employees"
          dataSource={employees}
          showRowLines={true}
          showBorders={true}
          columnAutoWidth={true}
          defaultExpandedRowKeys={expandedRowKeys}
          keyExpr="ID"
          parentIdExpr="Head_ID"
          onEditorPreparing={this.onEditorPreparing}
          onInitNewRow={this.onInitNewRow}
        >
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
          {/* <StateStoring enabled={true} type="localStorage" storageKey="treeListStorage" /> */}
          <Column
            dataField="Full_Name">
            <RequiredRule />
          </Column>
          <Column
            dataField="Head_ID"
            caption="Head">
            <Lookup
              dataSource={headDataSource}
              valueExpr="ID"
              displayExpr="Full_Name" />
            <RequiredRule />
          </Column>

          <Column type="buttons">
            <Button name="edit" />
            <Button name="delete" />
          </Column>
        </TreeList>
      </div>
    );
  }
  onEditorPreparing(e) {
    if (e.dataField === 'Head_ID' && e.row.data.ID === 1) {
      e.cancel = true;
    }
  }
  onInitNewRow(e) {
    e.data.Head_ID = 1;
  }
}

export default Table;
