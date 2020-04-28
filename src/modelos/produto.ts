import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { Preco } from './preco'

@Entity({
    name: 'produto'
})
export class Produto {
    @PrimaryGeneratedColumn({
        unsigned: true
    })
    produtoId?: number
  
    @Column()
    nomeProduto: string

    @OneToMany(() => Preco, (preco: Preco) => preco.produto)
    precos?: Preco[]
  
    @CreateDateColumn({ type: 'timestamp' })
    created?: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated?: Date;
}
