import * as React from 'react';
import {
  DetailsList,
  IColumn,
  Icon,
  IconButton,
  Panel,
  PrimaryButton,
  SelectionMode,
  Spinner,
  Stack,
  Text,
} from '@fluentui/react';

import { useBoolean } from '@fluentui/react-hooks';
import { useState } from 'react';
import { DefaultButton, PanelType } from 'office-ui-fabric-react';
export interface IResultsProps {
  results?: any[];
  isLoading: boolean;
  type: any;
  vigencia: any;
  sortBy: any;
}

export const Results: React.FunctionComponent<IResultsProps> = (
  props: React.PropsWithChildren<IResultsProps>
) => {
  const columns: IColumn[] = [
    {
      key: 'column0',
      name: 'País',
      fieldName: 'Pais',
      minWidth: 30,
      maxWidth: 30,
      onRender: (item) =>
        item.Pais !== null ? (
          <Stack verticalAlign='center' verticalFill>
            <img
              src={require(`../assets/Flag_of_${item.Pais}.svg`)}
              width='20px'
            />
          </Stack>
        ) : null,
    },
    {
      key: 'column1',
      name: 'Nombre',
      ariaLabel: 'Archivo',
      fieldName: 'FileLeafRef',
      minWidth: 100,
      isResizable: true,
      onRender: (item) => (
        <Stack
          horizontal
          horizontalAlign='space-between'
          verticalAlign='center'
          verticalFill
        >
          <Stack style={{ maxWidth: '80%' }}>
            <Text nowrap>{item?.Title}</Text>
            <Text
              nowrap
              variant='xSmall'
              className='ms-fontColor-neutralSecondaryAlt'
            >
              {item.FileLeafRef}
            </Text>
          </Stack>
          <Stack horizontal>
            {item.FileLeafRef.includes('pdf') ? (
              <IconButton
                target='blank'
                data-interception='off'
                href={item?.FileRef}
                iconProps={{ iconName: 'View' }}
              />
            ) : null}
            <IconButton
              download
              data-interception='off'
              href={item.FileRef}
              iconProps={{ iconName: 'Download' }}
            />
          </Stack>
        </Stack>
      ),
    },
    {
      key: 'column2',
      name: 'Desde',
      fieldName: 'Desde',
      minWidth: 100,
      isResizable: true,
      onRender: (item) =>
        item.Desde !== null ? (
          <Stack verticalAlign='center' verticalFill>
            <Text>
              <Icon iconName='ChevronUpMed' className='ms-fontColor-green' />
              {' ' + item.Desde.toLocaleDateString('es-AR')}
            </Text>
          </Stack>
        ) : null,
    },
    {
      key: 'column3',
      name: 'Hasta',
      fieldName: 'Hasta',
      minWidth: 100,
      isResizable: true,
      onRender: (item) =>
        item.Hasta !== null ? (
          <Stack verticalAlign='center' verticalFill>
            <Text>
              <Icon iconName='ChevronDownMed' className='ms-fontColor-red' />
              {' ' + item.Hasta.toLocaleDateString('es-AR')}
            </Text>
          </Stack>
        ) : null,
    },
  ];

  return (
    <>
      <Stack>
        {props.isLoading ? (
          <Spinner label='Cargando...' style={{ padding: 50 }} />
        ) : (
          <>
            <Text style={{ marginTop: 10 }}>
              Resultados {props.results?.length}
            </Text>
            <DetailsList
              items={props.results}
              compact={false}
              columns={columns}
              selectionMode={SelectionMode.none}
              setKey='none'
              isHeaderVisible={true}
            />
          </>
        )}
      </Stack>
    </>
  );
};
