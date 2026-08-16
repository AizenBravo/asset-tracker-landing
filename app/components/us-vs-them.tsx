import React from 'react';
import ComparisonRing from './comparison-ring';
import { comparisonPayload } from '../constants/comparison-payload';

const UsVsThem = () => {
  return <ComparisonRing items={comparisonPayload} />;
};

export default UsVsThem;
