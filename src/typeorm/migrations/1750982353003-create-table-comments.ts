import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableComments1750982353003 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'comments',
        columns: [
            {name: 'id', type:'varchar', isPrimary: true},
            {name: 'content', type: 'text', isNullable:false},
            {name: 'authorId', type: 'varchar'},
            {name: 'postId', type: 'varchar'},
            {name: 'created_at', type: 'datetime', default: "'CURRENT_TIMESTAMP'"}
        ],
        foreignKeys:[
            {
            columnNames: ['authorId'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            },
            {
            columnNames: ['postId'],
            referencedTableName: 'posts',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE'
            },
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('comments')
    }

}
