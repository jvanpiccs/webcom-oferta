import * as React from 'react';
import { DetailsList, DetailsListLayoutMode, IColumn, SelectionMode } from '@fluentui/react';


export interface IOfertaListProps {
    items?: object[];
}


export const OfertaList: React.FunctionComponent<IOfertaListProps> = (props: React.PropsWithChildren<IOfertaListProps>) => {
    const columns: IColumn[] = [
        { key: 'Title', name: 'Nombre', fieldName: 'Title', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'FileRef', name: 'Nombre', fieldName: 'FileLeafRef', minWidth: 100, maxWidth: 200, isResizable: true },
        // { key: 'Pais', name: 'Pais', fieldName: 'Pais', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'Desde', name: 'Desde', fieldName: 'Desde', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'Hasta', name: 'Hasta', fieldName: 'Hasta', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'Actions', name: 'Actions', fieldName: 'Actions', minWidth: 100, maxWidth: 200, isResizable: true },
    ];

    const onItemInvoked = (item: any): void => {
        alert(`Item invoked: ${item.name}`);
    };

    return (
        <>
            <DetailsList
                selectionMode={SelectionMode.none}
                items={props.items}
                columns={columns}
                setKey="set"
                layoutMode={DetailsListLayoutMode.justified}
                // selection={onSelection}
                selectionPreservedOnEmptyClick={true}
                ariaLabelForSelectionColumn="Toggle selection"
                ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                checkButtonAriaLabel="select row"
                onItemInvoked={onItemInvoked}
            />
        </>
    );
};