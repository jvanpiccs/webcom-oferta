import { SearchBox } from '@fluentui/react';
import * as React from 'react';
import { useState } from 'react';

export interface IFilterBoxProps {}

export const FilterBox: React.FunctionComponent<IFilterBoxProps> = (
  props: React.PropsWithChildren<IFilterBoxProps>
) => {
  const [filterText, setFilterText] = useState<string>('');

  return (
    <>
      <SearchBox
        placeholder='Filtrar resultados'
        underlined={true}
        iconProps={{ iconName: 'Filter' }}
        onChange={(_, newValue) => setFilterText(newValue)}
      />
    </>
  );
};
