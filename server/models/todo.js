'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      DataTypes.STRING, 
    allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
      Todo.hasMany(models.TodoItem, {
        foreignKey: 'todoId',
      });
      },
    },
  });
  return Todo;
};