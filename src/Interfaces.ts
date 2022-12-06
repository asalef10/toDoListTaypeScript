export interface Props {
  children?: React.ReactNode;
}
export interface ITask {
  id?: number;
  taskName?: string;
  level?: string;
  status?: boolean;
  time?: string|number;
  removeIndex?: Number;

}
export interface IEditComponent {
  lastValue?: string;
  stateText?: any
  taskText?: string;
}
