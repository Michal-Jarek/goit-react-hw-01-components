import PropTypes from 'prop-types';
import scss from './Profile.module.scss';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={scss.profile}>
    <div className={scss.description}>
      <img src={avatar} alt="User avatar" className={scss.avatar} />
      <p className={scss.name}>{username}</p>
      <p className={scss.tag}>@{tag}</p>
      <p className={scss.location}>{location}</p>
    </div>

    <ul className={scss.stats}>
      {[
        ['k-1', 'Followers', stats.followers],
        ['k-2', 'Views', stats.views],
        ['k-3', 'Likes', stats.likes],
      ].map(([id, text, value]) => (
        <li className={scss.item} key={id}>
          <span className={scss.label}>{text} </span>
          <span className={scss.quantity}>{value.toLocaleString('en-GB')}</span>
        </li>
      ))}
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export { Profile };
