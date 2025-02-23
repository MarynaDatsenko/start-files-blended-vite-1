import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const iconMap = {
  FaRegThumbsUp: FaRegThumbsUp,
  MdPeople: MdPeople,
  MdOutlineProductionQuantityLimits: MdOutlineProductionQuantityLimits,
  GiTreeDoor: GiTreeDoor,
};

const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map(stat => {
          const IconComponent = iconMap[stat.icon] || FaRegThumbsUp;
          return (
            <li className={style.item} key={stat.id}>
              <StatisticsItem
                statData={stat}
                icon={<IconComponent size={32} />}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Statistics;
