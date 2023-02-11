import { BsGraphUp } from 'react-icons/bs'
import { PageTitle } from '../../components/PageTitle'
import * as SC from './style'

export function Curves() {
    return (
        <SC.CurvesContainer>
            <PageTitle icon={<BsGraphUp/>} title={"Curves"} />
        </SC.CurvesContainer>
    )
}