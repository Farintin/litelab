import { useEffect, useState } from 'react'

import {
  _2DStage,
  _3DStage,
  PromptStage } from "./Stage"



const Lab = () => {
  const defaultStage = PromptStage
  const [stage, setStage] = useState(defaultStage)

  useEffect(() => {}, [stage])

  return (
    <section id="lab">
      <div className="wrapper">
        {stage} 
      </div>   
    </section>
  )
}
export default Lab