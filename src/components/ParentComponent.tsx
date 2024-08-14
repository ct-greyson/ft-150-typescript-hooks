import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const handleChildClick = (message: string) => {
        console.log("MESSAGE FROM CHILD COMPONENT: ")
        console.log(message)
    }
  return (
    <>
        <h2>PARENT COMPONENT</h2>
            <ChildComponent buttonClick={handleChildClick} />
        <h2>PARENT COMPONENT</h2>
    </>
  )
}

export default ParentComponent