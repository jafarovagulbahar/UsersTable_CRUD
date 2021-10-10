import { Column, Button } from "devextreme-react/tree-list"
import './styles.sass'

export const DevButtons = (
  <Column type="buttons" width='400'>
    <Button name="add" icon="add" />
    <Button
      name="edit"
      icon="edit"
      title='Edit'
    />
    <Button
      name="delete"
      icon="trash"
      title="Delete"
    />
    <Button
      name="save"
      icon="save"
      title="Save"
    />
    <Button
      name="cancel"
      icon="undo"
      title="Cancel"
    />
  </Column>
)
export default DevButtons