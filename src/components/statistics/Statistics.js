import { StartList, StatWrapper, Title } from "./Statistics.styled";
import { StatisticsItem } from "./StatisticsItem";


export const Statistics = ({ title, stats}) => { 
    return (
      <StatWrapper>
       
        {title &&  <Title>{title}</Title>}
        
        <StartList>
          {stats.map(stat => (
            <StatisticsItem key={stat.id} stats={stat} />
          ))}
          
        </StartList>
      </StatWrapper>
    );
};