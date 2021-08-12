import * as React from 'react';
import { useState } from 'react';
import styles from './OfertaComercial.module.scss';
import {
  Stack,
  Text,
  Separator,
  Toggle,
  DatePicker,
  Checkbox,
  Label,
  IconButton,
  Depths,
  SearchBox,
  Dropdown,
  Pivot,
} from '@fluentui/react';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { Selector } from './Selector';
import { Sorting } from './Sorting';
import { Filters } from './Filters';
import { Results } from './Results';
import useGetResults from './useGetOferta';

export interface IOfertaComercialProps {
  themeVariant: IReadonlyTheme | undefined;
}

export const OfertaComercial: React.FunctionComponent<IOfertaComercialProps> = (
  props: React.PropsWithChildren<IOfertaComercialProps>
) => {
  const { semanticColors }: IReadonlyTheme = props.themeVariant;
  return (
    <Stack
      style={{ backgroundColor: semanticColors.bodyBackground }}
      horizontal
      tokens={{ childrenGap: 5 }}
    >
      <Stack
        style={{
          maxWidth: 150,
          padding: 5,
          backgroundColor: semanticColors.bodyStandoutBackground,
        }}
      >
        <Selector />
        <Sorting />
        <Filters />
      </Stack>
      <Stack
        style={{ padding: 5, backgroundColor: semanticColors.listBackground }}
      >
        <Results />
      </Stack>
    </Stack>
  );
};
