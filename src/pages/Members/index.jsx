import { MdPeople } from 'react-icons/md'
import { PageTitle } from '../../components/PageTitle'
import * as SC from './style'

export function Members() {
    return (
        <SC.MembersContainer>
            <PageTitle icon={<MdPeople />} title={"Members"} />
        </SC.MembersContainer>
    )
}