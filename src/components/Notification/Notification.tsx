import { UserNotification } from "./Notification.styled";

interface Props {
  notification: string;
}

export const Notification = ({ notification }: Props) => {
  return (
    <UserNotification>
      <p>{notification}</p>
    </UserNotification>
  );
};
