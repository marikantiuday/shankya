import { DataTypes } from "sequelize";
import dbConnection from "../config/db.config.mjs";

const Content = dbConnection.define('Content', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    priority: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    content_type: {
        type: DataTypes.STRING,
        allowNull: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: true
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
},
    {
        sequelize: dbConnection,
        tableName: 'Content',
        timestamps: false,
    //     hooks: {
    //         afterSync: async () => {
    //             await dbConnection.query(`
    //     ALTER TABLE Content 
    // `);
    //         }
    //     }
    });
export default Content;