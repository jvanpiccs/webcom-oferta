import * as React from 'react';

export interface IResultsListProps {
  results: any[];
}

export const ResultsList: React.FunctionComponent<IResultsListProps> = (
  props: React.PropsWithChildren<IResultsListProps>
) => {
  const [value, setValue] = React.useState('');

  return <>
    
  </>;
};
