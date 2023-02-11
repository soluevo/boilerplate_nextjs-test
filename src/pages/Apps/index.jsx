import { MdApps } from 'react-icons/md'
import { PageTitle } from '../../components/PageTitle'
import * as SC from './style'

export function Apps() {
    return (
        <SC.AppsContainer>
            <PageTitle icon={<MdApps/>} title={"Apps"} />
        </SC.AppsContainer>
    )
}