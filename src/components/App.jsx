import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';


import user from '../json/user.json';
import stat from '../json/statistics.json';

console.log(stat);
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#e6e3e3',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="whatever"
        stat={stat}
      />
    </div>
  );
};
