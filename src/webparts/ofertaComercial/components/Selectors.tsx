import {
  Dropdown,
  IDropdownOption,
  ISearchBoxStyles,
  SearchBox,
  Stack,
} from '@fluentui/react';
import * as React from 'react';

export const optionsType: IDropdownOption[] = [
  {
    key: 'Oferta',
    text: 'Oferta Comercial',
    data: 'a3455e80-17b6-4f81-a529-538d6fd49955',
  },
  {
    key: 'Equipos',
    text: 'Tarifario de Equipos',
    data: 'cc766dc7-d2ed-4a55-8f61-233805dfe6d2',
  },
];
export const optionsSortBy: IDropdownOption[] = [
  {
    key: 'sortAscDesde',
    text: 'De más antiguo a más nuevo',
    data: { field: 'Desde', value: true },
  },
  {
    key: 'sortDescDesde',
    text: 'De más nuevo a más antiguo',
    data: { field: 'Desde', value: false },
  }
];
export const optionsVigencia: IDropdownOption[] = [
  { key: 'vigenciaTrue', text: 'Vigente' },
  { key: 'vigenciaFalse', text: 'No vigente' },
];

export interface ISelectorsProps {
  queryText: string;
  setQueryText: any;
  type: IDropdownOption;
  setType: any;
  vigencia: IDropdownOption;
  setVigencia: any;
  sortBy: IDropdownOption;
  setSortBy: any;
}

export const Selectors: React.FunctionComponent<ISelectorsProps> = (
  props: React.PropsWithChildren<ISelectorsProps>
) => {
  return (
    <>
      <Stack
        wrap
        horizontal
        tokens={{ childrenGap: 10, maxWidth: '100%' }}
      >
        <Dropdown
          options={optionsType}
          defaultSelectedKey={props.type.key}
          onChange={(ev, option) => props.setType(option)}
        />
        <Dropdown
          options={optionsVigencia}
          defaultSelectedKey={'vigenciaTrue'}
          onChange={(ev, option) => props.setVigencia(option)}
        />
        <Stack style={{width:200}}>
          <SearchBox
            style={{width:'100%', flexGrow:2}}
            placeholder='Buscar'
            onChange={(_, newValue) => props.setQueryText(newValue)}
          />
        </Stack>
        <Dropdown
          options={optionsSortBy}
          defaultSelectedKey={props.sortBy.key}
          onChange={(ev, option) => props.setSortBy(option)}
        />
      </Stack>
    </>
  );
};
