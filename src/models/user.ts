import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, getManager} from "typeorm";

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

    public static createDummy(): User {
        let user = new User();
        user.name = "pon";
        user.image = "image";
        user.token = "token";

        getManager()
            .save(user)
            .then(user => {
                console.log("User has been saved. user id is", user.id);
            })
            .catch(error => {
                console.log("error = ", error);
            });
        return user;
    }
}

