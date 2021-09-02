import * as React from 'react';
import {
  DetailsList,
  IColumn,
  Icon,
  List,
  SelectionMode,
  Spinner,
  Stack,
  Text,
} from '@fluentui/react';
import { ItemVersions } from '@pnp/sp/items';

const flags: any[] = [
  { pais: 'Argentina', flag: '../assets/Flag_of_Argentina.svg' },
  { pais: 'Paraguay', flag: '../assets/Flag_of_Paraguay.svg' },
  { pais: 'Uruguay', flag: '../assets/Flag_of_Uruguay.svg' },
];

export interface IResultsProps {
  results?: any[];
  isLoading: boolean;
  type: any;
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
      onRender: (item) => {   
        return <img src={require(`../assets/Flag_of_${item.Pais}.svg`)} width='20px' />;
      },
    },
    {
      key: 'column1',
      name: 'Nombre',
      ariaLabel: 'Archivo',
      fieldName: 'FileLeafRef',
      minWidth: 100,
      isResizable: true,
      onRender: (item) => (
        <Text aria-label={item.FileLeafRef}>
          {item.Title || item.FileLeafRef}
        </Text>
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
          <Text>
            <Icon iconName='ChevronUpMed' className='ms-fontColor-green' />
            {' ' + new Date(item.Desde).toLocaleDateString('es-Ar')}
          </Text>
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
          <Text>
            <Icon iconName='ChevronDownMed' className='ms-fontColor-red' />
            {' ' + new Date(item.Hasta).toLocaleDateString('es-Ar')}
          </Text>
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
              {props.type?.text} ({props.results?.length})
            </Text>
            <DetailsList
              items={props.results}
              compact={true}
              columns={columns}
              selectionMode={SelectionMode.none}
              // getKey={this._getKey}
              setKey='none'
              // layoutMode={DetailsListLayoutMode.fixedColumns}
              isHeaderVisible={true}
              // onItemInvoked={this._onItemInvoked}
            />
          </>
        )}
      </Stack>
    </>
  );
};
