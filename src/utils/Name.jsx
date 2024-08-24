import React from 'react'

function Name({firstName,secondName,space1,space2}) {
  return (
    <>
    {firstName ? <div className='firstname' style={{letterSpacing: space1}}>{firstName}</div> : null}
    {secondName ? <div className='secondname' style={{letterSpacing: space2}}>{secondName}</div> : null }
    </>
  )
}

export default Name;
