import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db/connection';

interface UserAttributes {
  id: number;
  name: string;
  money: number;
}

interface UserCreationAttibutes extends Optional<UserAttributes, 'id'> {}

class User
  extends Model<UserAttributes, UserCreationAttibutes>
  implements UserAttributes
{
  public id!: number;
  public name!: string;
  public money!: number;

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
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    money: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Users',
  }
);

export default User;
