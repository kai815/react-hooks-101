import React from 'react'
import { DELETE_EVENT } from '../actions'

const Event = ({ dispatch, event }) => {
  const id = event.id
  const handleClickDelete = () => {
    let result = window.confirm(`id=${id}の「${event.title}」イベントを本当に削除してもいいですか？`)
    if (result){
      dispatch({
        type: DELETE_EVENT,
        id
      })
    }
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button className="btn btn-danger" onClick={handleClickDelete}>削除</button></td>
    </tr>
  )
}

export default Event