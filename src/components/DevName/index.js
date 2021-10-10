import {
    Column,
    RequiredRule,
    StringLengthRule,
    PatternRule,
    AsyncRule,
} from "devextreme-react/tree-list"
import { dataSource } from "../../containers/Table/dataSource"

function validateNameUniqueness({ value, data }) {
    return dataSource
        .store()
        .load()
        .then((items) => {
            const found = items.find((item) => item.name === value)
            return !(found && found.id !== data.id)
        })
}

export const DevName = (
    <Column
        width='600'
        dataField="name">
        <StringLengthRule min={3} message="Name must have at least 3 symbols" />
        <StringLengthRule max={30} message="Name must be a maximum of 30 symbols" />
        <RequiredRule message="Name is required" />
        <PatternRule message="Do not use digits in the Name"
            pattern={/^[^0-9]+$/} />
        <AsyncRule validationCallback={validateNameUniqueness}   />
    </Column>
)
export default DevName;