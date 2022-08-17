import './tools-display.css'

export default function ToolsDisplay() {
  return(
    <div className='tools-display'>
      <div className='d-flex justify-content-center align-items-center fw-900 bubble'>
        <p className='m-0'><span>MAJOR</span></p>
      </div>
      <div className='d-flex justify-content-center align-items-center fw-900 bubble'>
        <p className='m-0'><span>MINOR</span></p>
      </div>
    </div>
  )
}