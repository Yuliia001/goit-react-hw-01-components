import { Item, Label, Percentage } from "./StatisticsItem.styled"

export const StatisticsItem = ({ stats: { label, percentage } }) => {
    return (
        <Item>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </Item>
    );   
 };