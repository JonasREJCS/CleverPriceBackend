import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Produto } from './produto';
import { UnidadeDeMedida } from './unidade-de-medida';

@Entity({
    name: 'preco'
})
export class Preco {
    @PrimaryGeneratedColumn({
        unsigned: true
    })
    precoId?: number

    @Column({
        type: "decimal",
        scale: 2,
        precision: 8
    })
    valor: number

    @Column({
        type: "decimal",
        scale: 2,
        precision: 8
    })
    quantidade: number

    @ManyToOne(() => UnidadeDeMedida, UnidadeDeMedida => UnidadeDeMedida.precos, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        nullable: false
    })
    @JoinColumn({ name: 'unidadeDeMedidaId' })
    unidadeDeMedida: UnidadeDeMedida

    @ManyToOne(() => Produto, produto => produto.precos, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        nullable: false
    })
    @JoinColumn({ name: 'produtoId' })
    produto: Produto

    @CreateDateColumn({ type: 'timestamp' })
    created?: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated?: Date;
}
