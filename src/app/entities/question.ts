import { randomUUID } from "crypto";

export interface QuestionEntity {
    id: string,
    year: number,
    title: string,
    topic: string,
    subject: string,
    imagepath: string,
    institution: string,
};

export class Question {
    public _id: string;
    public props: Omit<QuestionEntity, 'id'>;

    constructor(props: Omit<QuestionEntity, 'id'>, id?: string) {
        
        this._id = id ?? randomUUID();
        this.props = props;
    };

    public get id() {
        return this._id;
    }

    public get title() {
        return this.props.title;
    }

    public set title(newQuestionTitle) {
        this.props.title = newQuestionTitle;
    }

    public get topic() {
        return this.props.topic;
    }

    public set topic(newQuestionTopic) {
        this.props.topic = newQuestionTopic;
    }

    public get subject() {
        return this.props.subject;
    }

    public set subject(newQuestionSubject) {
        this.props.subject = newQuestionSubject;
    }

    public get year() {
        return this.props.year;
    }

    public set year(newYear) {
        this.props.year = newYear;
    }

    public get institution() {
        return this.props.institution;
    }

    public set institution(newInstitution) {
        this.props.institution = newInstitution;
    }

    public get imagepath() {
        return this.props.imagepath;
    }

    public set imagepath(newImage) {
        this.props.imagepath = newImage;
    }
};