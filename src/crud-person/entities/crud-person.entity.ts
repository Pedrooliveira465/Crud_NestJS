import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CrudPerson {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    email: string;
}
