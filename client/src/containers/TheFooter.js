import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">Bio Systems Diagnostics</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
