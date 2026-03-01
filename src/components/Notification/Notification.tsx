interface Props {
  notification: string;
}

export const Notification = ({ notification }: Props) => {
  return (
    <div className="userNotification">
      <p>{notification}</p>
    </div>
  );
};
