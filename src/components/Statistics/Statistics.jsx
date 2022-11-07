import PropTypes from 'prop-types';
import scss from './Statistics.module.scss';

const Statistics = ({ title = null, stat }) => (
  <section className={scss.statistics}>
    {title && <h2 className={scss.title}>{title}</h2>}

    <ul className={scss.statList}>
      {stat.map(({ id, label, percentage }) => (
        <li
          className={scss.item}
          key={id}
          style={{
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
              16
            )}`,
          }}
        >
          <span className={scss.label}>{label}</span>
          <span className={scss.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export { Statistics };
