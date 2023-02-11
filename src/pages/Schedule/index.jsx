import { MdSchedule } from 'react-icons/md'
import { PageTitle } from '../../components/PageTitle'
import * as SC from './style'

export function Schedule() {
    return (
        <SC.ScheduleContainer>
            <PageTitle icon={<MdSchedule/>} title={"Schedule"} />
        </SC.ScheduleContainer>
    )
}