import { AiFillBook } from 'react-icons/ai'
import { PageTitle } from '../../components/PageTitle'
import * as SC from './style'

export function Journal() {
    return (
        <SC.JournalContainer>
            <PageTitle icon={<AiFillBook />} title={"Journal"} />
        </SC.JournalContainer>
    )
}