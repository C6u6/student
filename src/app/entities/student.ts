import { randomUUID } from "crypto";

export interface StudentEntity {
    id: string;
    name: string;
    email: string;
    password: string;
}

export class Student {
    public _id: string;
    public props: Omit<StudentEntity, 'id'>;

    constructor(props: Omit<StudentEntity, 'id'>, id?: string) {
        this._id = id ?? randomUUID();
        this.props = props;        
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this.props.name;
    }

    public set name(nuevo) {
        this.props.name = nuevo; 
    }
    
    public get email() {
        return this.props.email;
    }

    public set email(nuevo) {
        this.props.email = nuevo; 
    }

    public get password() {
        return this.props.password;
    }

    public set password(nuevo) {
        this.props.password = nuevo; 
    }
}