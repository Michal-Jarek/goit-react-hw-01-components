import PropTypes from 'prop-types';
import scss from './FriendList.module.scss';

const FriendList = ({ friends }) => (
  <ul className={scss.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
    ))}
  </ul>
);

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={scss.item} id={id}>
     <span className={isOnline
            ? `${scss.status}`
            : `${scss.status__offline}`}></span>
    <img className={scss.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={scss.name}>{name}</p>
  </li>
);

export { FriendList };
