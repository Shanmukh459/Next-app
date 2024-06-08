import React from 'react'

interface Props {
  params: {id: number , photoId: number}
}

const UserPhotoDetail = ({ params: {id, photoId}} : Props) => {
  return (
    <div>User {id} PhotoDetail {photoId}</div>
  )
}

export default UserPhotoDetail