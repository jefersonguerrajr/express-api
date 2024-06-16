import { Sequelize, DataTypes, QueryTypes } from 'sequelize';
import { User } from '../model/User'

class UserService {
    private readonly sequelize: Sequelize;

    constructor(sequelize: Sequelize) {
        this.sequelize = sequelize;
    }

    async getAllUsers(): Promise<any> {
        const sql = "SELECT * FROM DEV.USUARIO"
        return this.sequelize.query(sql, { type: QueryTypes.SELECT });
    }

    async createUser(user: any): Promise<any> {
        User.sequelize?.query("")
        return User.create(user)
    }

    async searchUserById(user: any): Promise<any> {
       const sql = "SELECT * FROM DEV.USUARIO"
       return User.sequelize?.query(sql)
    }

}

export { UserService }

