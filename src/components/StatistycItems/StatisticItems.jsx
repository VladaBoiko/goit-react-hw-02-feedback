import React from 'react';
import { Item, Box } from './StatisticItems.styled';

export const StatisticItems = ({ state, total, feedback }) => {
  return (
    <Box>
      <Item>
        good:<span>{state.good}</span>
      </Item>
      <Item>
        neutral:<span>{state.neutral}</span>
      </Item>
      <Item>
        bad:<span>{state.bad}</span>
      </Item>
      <Item>
        Total:<span>{total()}</span>
      </Item>
      <Item>
        Positive feedback:
        <span>{feedback()}%</span>
      </Item>
    </Box>
  );
};
