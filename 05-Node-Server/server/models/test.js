//7                           //1
module.exports = function (sequelize, DataTypes) {
  //space holder --- //2     //3
  return sequelize.define("test", {
    //4
    //5         //6
    testdata: DataTypes.STRING,
  });
};
