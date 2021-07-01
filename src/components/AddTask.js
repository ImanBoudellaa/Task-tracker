import { useState } from "react"

const AddTask = ({onAdd, display}) => {

  const[text,setText] = useState('')
  const[day,setDay] = useState('')

  const onSubmit=(e)=>{
    e.preventDefault()

    if(!text){
      alert('Add Task')
      return
    }

    onAdd({text,day,reminder})

    setText('')
    setDay('')
    setReminder(false)
  }
  const[reminder,setReminder] = useState(false)
  return (
    <form className='add-form' onSubmit={onSubmit} style={{display: display}}>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add task' value={text} onChange={(e)=>setText(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' value={day} onChange={(e)=>setDay(e.target.value)}/>
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />

    </form>
  )
}


// AddTask.defaultProps = {
//   display: 'none'
// }

export default AddTask