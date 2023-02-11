import { AiFillFolderOpen } from 'react-icons/ai'
import { MdStore } from 'react-icons/md'
import { PageTitle } from '../../components/PageTitle'
import * as SC from './style'

export function Recipients() {
    return (
        <SC.RecipientsContainer>
            <PageTitle icon={<AiFillFolderOpen />} title={"Recipients"} />
        </SC.RecipientsContainer>
    )
}