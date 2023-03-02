import { randomUUID } from "crypto";

export interface AlternativesEntity {
    id?: string,
    ownedById: string,
    alternatives: string[],
}

export class Alternatives {
    public _id: string;
    public props: AlternativesEntity;
    
    constructor(props: AlternativesEntity, id?: string) {
        this._id = id ?? randomUUID();
        this.props = props;
    };

    public get id() {
        return this._id;
    };

    public set alternativesSet(newAlternatives: string[]) {
        this.props.alternatives = newAlternatives;
    };

    public get alternativesSet() {
        return this.props.alternatives;
    };

    public set ownedById(questionId: string) {
        this.props.ownedById = questionId;
    };

    public get ownedById() {
        return this.props.ownedById;
    };
};