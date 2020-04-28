import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { Preco } from './preco';

@Entity({
    name: 'unidade_de_medida'
})
export class UnidadeDeMedida {
    @PrimaryGeneratedColumn({
        unsigned: true
    })
    unidadeDeMedidaId?: number

    @Column()
    nomeUnidadeDeMedida: string

    @OneToMany(() => Preco, (preco: Preco) => preco.unidadeDeMedida)
    precos: Preco[]

    @CreateDateColumn({ type: 'timestamp' })
    created?: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated?: Date;
}
