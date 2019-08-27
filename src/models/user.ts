import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity({name: "users"})
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({length: 100})
    public name: string;

    @Column("text")
    public image: string;

    @Column("text")
    public token: string;

    @CreateDateColumn()
    public created_date: Date;

    @UpdateDateColumn()
    public updated_date: Date;
}
