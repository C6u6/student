import { randomUUID } from "crypto";

export interface StudentQuestionEntity {
    id: string,
    inTime: boolean,
    studentId: string,
    questionId: string,
    secondsToAnswer: number,
    correctlyAnswered: boolean,
}

export class StudentQuestion{
    public _id: string;
    public props: Omit<StudentQuestionEntity, 'id'>;

    constructor(props: Omit<StudentQuestionEntity, 'id'>, id?: string) {
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

    public set inTime(Boolean) {
        this.props.inTime = Boolean;
    }

    public get correctlyAnswered() {
        return this.props.correctlyAnswered;
    }

    public set correctlyAnswered(Boolean) {
        this.props.correctlyAnswered = Boolean;
    }

    public get secondsToAnswer() {
        return this.props.secondsToAnswer;
    }

    public set secondsToAnswer(seconds) {
        this.props.secondsToAnswer = seconds;
    }
}