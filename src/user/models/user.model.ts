import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../interfaces/user.interface";

@Entity({ name: "tb_users" })
export class UserModel {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: "nick_name", nullable: false })
    nick_name: string;

    @Column({ name: "email", nullable: false })
    email: string;

    @Column({ name: "phone", nullable: true })
    password: string;

    @Column({ name: "cpf", nullable: false })
    phone: string;

    @Column({ name: "password", nullable: false })
    cpf: string;

    @CreateDateColumn({ name: "created_at" })
    created_at: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updated_at: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deleted_at: Date;
}