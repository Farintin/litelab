import { useEffect } from 'react'
import Display from './Display'
import Prompt from './Prompt'
import projects from '../../../../../../resource/projects'



const Canvas = () => {
  useEffect(() => {
    console.log({ projects })
  }, [])

  return (
    <div className="canvas prompt">
      <div
        className="wrapper 
                    h-full
                    overflow-y-auto
                    p-4
                    grid grid-cols-1 grid-rows-2 gap-4"
      >
        <div className="col">
          <Display/>
        </div>
        <div className="col">
          <Prompt/>
        </div>
      </div>
    </div>
  )
}
export default Canvas