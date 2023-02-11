import { useEffect } from 'react'
import * as SC from './style'

export function PageTitle({ icon, title}) {

  useEffect(() => {
    document.title = title + " - Teste Soluevo" 
  }, [])

  return (
    <SC.PageTitleContainer>
      <div className="icon-container">
        {icon}
      </div>
      <h1>{title}</h1>
    </SC.PageTitleContainer>
  )
}