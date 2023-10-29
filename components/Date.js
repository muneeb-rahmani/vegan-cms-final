import React from 'react'
import {parseISO, format} from 'date-fns'

const Date = ({dateString}) => {
    const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>{format(date, 'd LLL yyyy')}</time>
  )
}

export default Date