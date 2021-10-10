import { Column } from "devextreme-react/tree-list"
import { Template } from "devextreme-react/core/template"
import Switch from "devextreme-react/switch"

function StatusCell(options) {
  return options.data?.status ? "Active" : "Deactive"
}

function renderSwitch(cellInfo) {
  return (
    <Switch
      className="tree-list-switch"
      defaultValue={cellInfo.value}
      onValueChanged={(valueChangedEventArg) => {
        cellInfo.setValue(valueChangedEventArg.value)
      }}
    />
  )
}

export const DevStatus = [
  <Column
    dataField="status"
    cellTemplate="employeeTemplate"
    width={300}
    editCellRender={renderSwitch}
  />,
  <Template name="employeeTemplate" render={StatusCell} />,
]
export default DevStatus;
