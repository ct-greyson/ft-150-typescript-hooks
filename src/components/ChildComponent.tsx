import React from 'react'

interface ChildProps {
    buttonClick: (message: string) => void
}

const ChildComponent = ({ buttonClick }: ChildProps) => {
    const handleClick = () => {
        buttonClick("Child Component clicked!")
    }
  return (
    <>
        <h3>CHILD COMPONENT</h3>
            <button onClick={handleClick}>Click Me!</button>
        <h3>CHILD COMPONENT</h3>
    </>
  )
}

export default ChildComponent