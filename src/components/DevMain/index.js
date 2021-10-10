import { Column, Lookup } from "devextreme-react/tree-list"
import { dataSource } from "../../containers/Table/dataSource"

function Filters(ids) {
  const filters = ids.reduce((acc, id, index) => {
    if (index !== 0) {
      acc.push("and")
    }
    acc.push(["id", "<>", id])
    return acc
  }, [])

  return filters
}

function structureId(children = []) {
  const invalidStructureIds = []

  function traverse(nodes) {
    nodes.forEach((item) => {
      invalidStructureIds.push(item.key)

      if (item.hasChildren) {
        traverse(item.children)
      }
    })
  }

  traverse(children)

  return invalidStructureIds
}


function getFilteredData(options) {
  const { data, key } = options
  const store = dataSource.store()

  if (data) {
    const invalidStructureIds = structureId(options.node?.children)

    const filters = Filters([...invalidStructureIds, key])

    return {
      store,
      filter: filters.length > 0 ? filters : null,
    }
  }

  return {
    store,
    filter: null,
  }
}

export const DevMain = (
  <Column dataField="parent_id" >
    <Lookup
      dataSource={getFilteredData}
      valueExpr="id"
      displayExpr={"name"}
      allowClearing
    />
  </Column>
)

export default DevMain
