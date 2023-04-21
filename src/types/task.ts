export interface Task {
  id: string;
  title: string;
  ownerId: string;
  tags: string[];
  dueDate: Date;
}
