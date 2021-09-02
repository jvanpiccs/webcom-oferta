import {
  Dropdown,
  IconButton,
  IDropdownOption,
  ISearchBoxStyles,
  MotionAnimations,
  SearchBox,
  Stack,
  Panel,
} from '@fluentui/react';
import * as React from 'react';
import { useState } from 'react';
import { useBoolean } from '@fluentui/react-hooks';

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
  },
  {
    key: 'sortAscTitle',
    text: 'De la A a la Z',
    data: { field: 'Title', value: true },
  },
  {
    key: 'sortDescTitle',
    text: 'De la Z a la A',
    data: { field: 'Title', value: false },
  },
];
export const optionsVigencia: IDropdownOption[] = [
  { key: 'vigenciaTrue', text: 'Vigente' },
  { key: 'vigenciaFalse', text: 'No vigente' },
];

const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 300 } };

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
  const [settingsExpanded, setSettingsExpanded] = useState<boolean>(false);
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
    useBoolean(false);

  return (
    <>
      <Stack
        horizontal
        tokens={{ childrenGap: 10 }}
        className='ms-bgColor-gray30'
      >
        <SearchBox
          styles={searchBoxStyles}
          placeholder='Buscar'
          onChange={(_, newValue) => props.setQueryText(newValue)}
        />
        <IconButton
          iconProps={{ iconName: 'CollapseMenu' }}
          onClick={() => openPanel()}
        />
      </Stack>
      <Panel
        isLightDismiss
        isOpen={isOpen}
        onDismiss={dismissPanel}
        closeButtonAriaLabel='Cerrar'
        headerText='Configuración'
      >
        <Dropdown
          label='Tipo'
          options={optionsType}
          defaultSelectedKey={props.type.key}
          onChange={(ev, option) => props.setType(option)}
        />
        <Dropdown
          label='Vigencia'
          options={optionsVigencia}
          defaultSelectedKey={'vigenciaTrue'}
          onChange={(ev, option) => props.setVigencia(option)}
        />
        <Dropdown
          label='Ordenar'
          options={optionsSortBy}
          defaultSelectedKey={props.sortBy.key}
          onChange={(ev, option) => props.setSortBy(option)}
        />
      </Panel>
    </>
  );
};
