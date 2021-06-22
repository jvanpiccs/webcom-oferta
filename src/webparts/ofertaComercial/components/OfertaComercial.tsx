import * as React from 'react';
import { useState } from 'react';
import styles from './OfertaComercial.module.scss';
import { Stack, Text, Separator, Toggle, DatePicker, Checkbox, Label, IconButton, Depths, SearchBox, Dropdown, Pivot } from '@fluentui/react';
import { escape } from '@microsoft/sp-lodash-subset';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import useGetResults from './useGetOferta';
import { OfertaList } from './OfertaList';
import { PivotItem } from 'office-ui-fabric-react';
import { Oferta } from './Oferta';
import { Equipos } from './Equipos';

export interface IOfertaComercialProps {
  themeVariant: IReadonlyTheme | undefined;
}

export const OfertaComercial: React.FunctionComponent<IOfertaComercialProps> = (props: React.PropsWithChildren<IOfertaComercialProps>) => {

  const { semanticColors }: IReadonlyTheme = props.themeVariant;
  return (
    <Stack style={{ backgroundColor: semanticColors.bodyBackground }}>
      <Pivot>
        <PivotItem headerText='Oferta Comercial'>
          <Oferta />
        </PivotItem>
        <PivotItem headerText='Equipos'>
          <Equipos />
        </PivotItem>
      </Pivot>
    </Stack>
  );
};
