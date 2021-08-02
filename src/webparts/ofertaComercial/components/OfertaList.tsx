import * as React from "react";
import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  Icon,
  IconButton,
  SelectionMode,
} from "@fluentui/react";

export interface IOfertaListProps {
  items?: object[];
}

export const OfertaList: React.FunctionComponent<IOfertaListProps> = (
  props: React.PropsWithChildren<IOfertaListProps>
) => {
  const columns: IColumn[] = [
    {
      key: "Title",
      name: "Nombre",
      fieldName: "Title",
      minWidth: 150,
      isResizable: true,
      onRender: (item) => (
        <a href={item.FileLeafRef}>
          {item.Title !== null ? item.Title : item.FileLeafRef}
        </a>
      ),
    },
    {
      key: "Pais",
      name: "Pais",
      fieldName: "País",
      minWidth: 30,
      isResizable: true,
      onRender: (item) => (
        <span>
          {item.Pais === "Paraguay"
            ? "PGY"
            : item.Pais === "Argentina"
            ? "ARG"
            : item.Pais === "Uruguay"
            ? "UGY"
            : ""}
        </span>
      ),
    },
    {
      key: "Desde",
      name: "Desde",
      fieldName: "Desde",
      minWidth: 80,
      isResizable: true,
      onRender: (item) => (
        <span style={{ color: "green" }}>
          <Icon iconName="Up" />
          {item.Desde !== null
            ? new Date(item.Desde).toLocaleDateString("es-es")
            : "Sin Fecha"}
        </span>
      ),
    },
    {
      key: "Hasta",
      name: "Hasta",
      fieldName: "Hasta",
      minWidth: 80,
      isResizable: true,
      onRender: (item) => (
        <span style={{ color: "red" }}>
          <Icon iconName="Down" />
          {item.Hasta !== null
            ? new Date(item.Hasta).toLocaleDateString("es-es")
            : "Sin fecha"}
        </span>
      ),
    },
    {
      key: "Actions",
      name: "Actions",
      fieldName: "Actions",
      minWidth: 100,
      isResizable: true,
      onRender: (item) => (
        <>
          <IconButton iconProps={{ iconName: "View" }} ariaLabel="Ver" />
          <IconButton
            iconProps={{ iconName: "Download" }}
            ariaLabel="Descargar"
          />
        </>
      ),
    },
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
