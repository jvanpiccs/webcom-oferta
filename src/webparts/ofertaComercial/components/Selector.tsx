import * as React from "react";
import { Dropdown } from "@fluentui/react";

export interface ISelectorProps {}
const options: any[] = [
  {
    key: "Oferta",
    text: "Oferta comercial",
    listGUID: "a3455e80-17b6-4f81-a529-538d6fd49955",
  },
  {
    key: "Equipos",
    text: "Equipos",
    listGUID: "a3455e80-17b6-4f81-a529-538d6fd49955",
  },
];

export const Selector: React.FunctionComponent<ISelectorProps> = (
  props: React.PropsWithChildren<ISelectorProps>
) => {
  return (
    <>
      <Dropdown label='Tipo' options={options} defaultSelectedKey={options[0].key} />
    </>
  );
};
