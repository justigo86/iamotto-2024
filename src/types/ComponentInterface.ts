export interface ComponentInterface {
  id: number;
  path: string;
  shown: boolean;
  uiOrientation: string;
  component: () => JSX.Element;
}
