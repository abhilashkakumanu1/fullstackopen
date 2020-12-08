const Notification = ({ type, message }) => {
  if (message === null) {
    return null;
  } else if (type === "success") {
    return <div className="success notification">{message}</div>;
  }
  return <div className="error notification">{message}</div>;
};

export default Notification;
