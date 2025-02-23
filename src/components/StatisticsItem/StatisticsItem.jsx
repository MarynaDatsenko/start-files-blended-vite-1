import style from './StatisticsItem.module.css';

const StatisticsItem = ({ statData, icon }) => {
  return (
    <>
      {icon}
      <span className={style.counter}>{statData.total}</span>
      <p className={style.text}>{statData.title}</p>
    </>
  );
};

export default StatisticsItem;
