// React.ts
namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        public getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        public getAvailableTeacher(): string {
            if (this._teacher?.experienceTeachingReact !== undefined) {
                return `Available Teacher: ${this._teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}
