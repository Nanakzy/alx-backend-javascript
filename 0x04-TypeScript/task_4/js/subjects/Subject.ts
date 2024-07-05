namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Subject {
    protected _teacher: Teacher | null = null;

    setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }
  }
}
