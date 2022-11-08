import PropTypes from 'prop-types';
import scss from './FriendList.module.scss';

const FriendList = ({ friends }) => (
  <ul className={scss.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
      />
    ))}
  </ul>
);

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={scss.item}>
    <span
      className={isOnline ? `${scss.status}` : `${scss.status__offline}`}
    ></span>
    <img className={scss.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={scss.name}>{name}</p>
  </li>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

export { FriendList };
