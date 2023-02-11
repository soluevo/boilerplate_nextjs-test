import { Input } from 'antd'
import { useState } from 'react'
import { MdSearch, MdViewModule } from 'react-icons/md'
import { HiViewList } from 'react-icons/hi'
import * as SC from './style'

const selectedStyle = {background: 'linear-gradient(110deg, #4E9C89, #4910CE)', color: 'white'}
const normalStyle = {background: 'white', color: '#2A409C'}
export function FilterRow() {
  const [searchString, setSearchString] = useState('')
  const [currentMode, setCurrentMode] = useState('grid') // ['grid', 'list']
  return (
    <SC.FilterRowContainer>
      <div className='filters-and-pagination'></div>
      <div className='search-and-mode'>
        <Input
            value={searchString}
            onChange={e => setSearchString(e.target.value)} 
            placeholder="Search"
            suffix={<MdSearch />}
          />
          <div className='mode'>
            <MdViewModule
              className='left'
              onClick={() => setCurrentMode('grid')} 
              style={currentMode === 'grid' ? selectedStyle : normalStyle} 
            />
            <div className='divider'></div>
            <HiViewList
              className='right' 
              onClick={() => setCurrentMode('list')} 
              style={currentMode === 'list' ? selectedStyle : normalStyle}
            />
          </div>
      </div>
        
    </SC.FilterRowContainer>
  )
}