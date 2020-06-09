import React, { useContext } from 'react'
import {
  DELETE_EVENT,
  ADD_OPERATION_LOG
} from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext)
  const id = event.id
  const title = event.title
  const handleClickDelete = () => {
    let result = window.confirm(`id=${id}の「${title}」イベントを本当に削除してもいいですか？`)
    if (result){
      dispatch({
        type: DELETE_EVENT,
        id
      })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `「${title}」イベント(id=${id})を削除しました`,
        operatedAt: timeCurrentIso8601()
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