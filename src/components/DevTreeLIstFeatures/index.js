import {
    Editing,
    Scrolling,
    Paging,
    Pager,
    FilterPanel,
    FilterRow,
    HeaderFilter,
} from "devextreme-react/tree-list"
import './styles.sass'

const allowedPageSizes = [5, 10, 20]

export const DevTreeLIstFeatures = [

    <FilterRow visible={true} />,
    <FilterPanel visible={true} />,
    <HeaderFilter visible={true} />,
    <Scrolling
        mode="standard" />,
    <Paging
        enabled={true}
        defaultPageSize={10} />,
    <Pager
        showPageSizeSelector={true}
        allowedPageSizes={allowedPageSizes}
        showInfo={true} />,
    <Editing
        allowUpdating={true}
        allowDeleting={true}
        allowAdding={true}
        mode="row" />

]

export default DevTreeLIstFeatures