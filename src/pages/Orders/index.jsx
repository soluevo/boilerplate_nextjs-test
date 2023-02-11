import { BsBookHalf } from 'react-icons/bs'
import { PageTitle } from '../../components/PageTitle'
import * as SC from './style'

export function Orders() {
    return (
        <SC.OrdersContainer>
            <PageTitle icon={<BsBookHalf />} title={"Orders"} />
        </SC.OrdersContainer>
    )
}