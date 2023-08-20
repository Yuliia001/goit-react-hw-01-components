import { StatisticsItem } from "./StatisticsItem";


export const Statistics = ({ title, stats}) => { 
    return (
      <section class="statistics">
        <h2 class="title">{title}</h2>
        
        <ul class="stat-list">
          {stats.map(stat => (
            <StatisticsItem key={stat.id} stats={stat} />
          ))}
          
        </ul>
      </section>
    );
};