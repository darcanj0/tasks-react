export enum ApiPaths {
  SIGNUP = "user",
  SIGNIN = "auth",
  GET_MY_TASKS = "task",
  GET_MY_TAGS = "tag",
  CREATE_TAG = "tag",
  CREATE_TASK = "task",
  DELETE_TASK = "task",
  DELETE_TAG = "tag",
}

export enum ApiFeedbacks {
  SIGNUP = "Welcome to My Tasks App!",
  SIGNIN = "Welcome back!",
  GET_MY_TASKS_ERROR = "Sorry, we couldn't load your tasks",
  GET_MY_TAGS_ERROR = "Sorry, we couldn't load your tags",
  CREATE_TAG = "Tag successfully created",
  CREATE_TASK = "Task successfully created",
  DELETE_TASK = "Task successfully deleted",
  DELETE_TAG = "Tag successfully deleted",
}
