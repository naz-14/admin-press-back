import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db/connection';

interface UserAttributes {
  id: number;
  userName: string;
  password: string;
  email: string;
}

interface UserCreationAttibutes extends Optional<UserAttributes, 'id'> {}

class User
  extends Model<UserAttributes, UserCreationAttibutes>
  implements UserAttributes
{
  public id!: number;
  public userName!: string;
  public password!: string;
  public email!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'Users',
  }
);

export default User;
