import css from "./Notification.module.css";

interface Props {
  notification: string;
}

export const Notification = ({ notification }: Props) => {
  return (
    <div className={css.userNotification}>
      <p>{notification}</p>
    </div>
  );
};
