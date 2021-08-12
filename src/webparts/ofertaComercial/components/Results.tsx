import { Text, Label, Stack } from '@fluentui/react';
import * as React from 'react';
import { useState } from 'react';
import { FilterBox } from './FilterBox';
import { ResultsList } from './ResultList';

export interface IResultsProps {}

export const Results: React.FunctionComponent<IResultsProps> = (
  props: React.PropsWithChildren<IResultsProps>
) => {
  const [results, setResults] = useState<any[]>([]);

  return (
    <>
      <Stack
        horizontal
        verticalAlign='center'
        horizontalAlign='end'
        tokens={{ childrenGap: 5 }}
      >
        <FilterBox />
        <Text>{results.length} items</Text>
      </Stack>
      {/* <ResultsList {...results} /> */}
    </>
  );
};
