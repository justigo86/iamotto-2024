export interface ComponentInterface {
  id: number;
  name: string;
  path: string;
  shown: boolean;
  uiOrientation: string;
  component: (() => JSX.Element) | (({ id }: { id: string }) => JSX.Element);
}
