import { FaBriefcase } from 'react-icons/fa'
import { PageTitle } from '../../components/PageTitle'
import * as SC from './style'

export function Portfolio() {
    return (
        <SC.PortfolioContainer>
            <PageTitle icon={<FaBriefcase />} title={"Portfolio"} />
        </SC.PortfolioContainer>
    )
}