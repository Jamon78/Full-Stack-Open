const Notification = ({ message, noteColor }) => {
  const notificationStyle = {
    color: noteColor,
  }
  

  if (message === null) {
    return null
  }

  return (
    <div className="message" style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification