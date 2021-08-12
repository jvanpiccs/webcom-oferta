import { Dropdown, IDropdownOption } from "@fluentui/react/lib/Dropdown";
import * as React from "react";
import { useState } from "react";

export interface ISortingProps {}

const options: any[] = [
  { key: "Recent", text: "Más recientes" },
  { key: "Older", text: "Más antiguos" },
  { key: "Alph", text: "A a Z" },
  { key: "AlphInv", text: "Z a A" },
];
export const Sorting: React.FunctionComponent<ISortingProps> = (
  props: React.PropsWithChildren<ISortingProps>
) => {
  const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>(options[0]);
  const onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    setSelectedItem(item);
  };
  return (
    <>
      <Dropdown
        label='Ordenar por'
        placeholder="Ordenar por"
        options={options}
        selectedKey={selectedItem ? selectedItem.key : undefined}
        onChange={onChange}
      />
    </>
  );
};
