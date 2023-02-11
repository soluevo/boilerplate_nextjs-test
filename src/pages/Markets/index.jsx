import { MdStore } from 'react-icons/md'
import { FilterRow } from '../../components/FilterRow'
import { PageTitle } from '../../components/PageTitle'
import * as SC from './style'

export function Markets() {
    return (
        <SC.MarketsContainer>
            <PageTitle icon={<MdStore />} title={"Market"} />
            <FilterRow />
        </SC.MarketsContainer>
    )
}