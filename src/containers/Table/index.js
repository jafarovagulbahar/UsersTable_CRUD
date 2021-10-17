
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
import { Button } from 'devextreme-react';


const allReset = () => {
  dataSource.store().clear()
  window.location.reload();
}

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterMode: 'matchOnly'
    };

    // SelectedRow
    this.treeListRef = React.createRef();

    this.selectedRowsData = [];

    this.getSelectedData = () => {
      this.selectedRowsData = this.treeList.getSelectedRowsData();
    }

    this.filterModes = ['matchOnly', 'withAncestors', 'fullBranch'];
    this.onFilterModeChange = this.onFilterModeChange.bind(this);
  }
  
  // Filtered item selected
  onFilterModeChange(args) {
    this.setState({
      filterMode: args.value
    });
  }
  render() {
    return (
      <div id="tree-list-demo">
        <span className="btn">
          <a href='/'>{`${' < Back To'}`}</a>
        </span>
        <div className='containers'>
          <div className='resetBtn'>
            <Button icon='trash' text={'All Reset'} onClick={allReset} />
          </div>
          <TreeList
            id="employees"
            autoExpandAll={true}
            dataSource={dataSource}
            showRowLines={true}
            columnAutoWidth={true}
            keyExpr="id"
            parentIdExpr="parent_id"
            ref={this.treeListRef}
            onInitNewRow={(e) => {
              e.data.id = undefined
              e.data.name = undefined

              if (!e.data.parent_id) {
                e.data.parent_id = undefined
              }
            }}
            showBorders={true}
            focusedRowEnabled={false}
            filterMode={this.state.filterMode}
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
