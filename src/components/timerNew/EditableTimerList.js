import React from 'react';
import EditableTimer from './EditableTimer'

function EditableTimerList({ timers,onFormSubmit }) {

  const timer = timers.map((item, idx) => (

    <EditableTimer
      key={idx}
      id={item.id}
      title={item.title}
      project={item.project}
      elapsed={item.elapsed}
      runningSince={item.runningSince}
      editFormOpen={item.editFormOpen}
      onFormSubmit={onFormSubmit}
    />

  ))

  return (
    <div>
      {timer}
    </div>
  )
}

export default EditableTimerList;
