import { randomUUID } from "crypto";

export interface StudentQuestionEntity {
    id?: string,
    studentId: string,
    questionId: string,
    inTime: boolean | null
    correctlyAnswered: boolean,
}

export class StudentQuestion{
    public _id: string;
    public props: StudentQuestionEntity;

    constructor(props: StudentQuestionEntity, id?: string) {
        this._id = id ?? randomUUID();
        this.props = props;
    }

    public get id() {
        return this._id;
    }

    public get studentId() {
        return this.props.studentId;
    }

    public get questionId() {
        return this.props.questionId;
    }

    public get inTime() {
        return this.props.inTime;
    }

    public get correctlyAnswered() {
        return this.props.correctlyAnswered;
    }
}