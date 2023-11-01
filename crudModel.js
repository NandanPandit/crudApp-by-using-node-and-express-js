const { pgPool } = require("../../db_config/database");
//Retrive data
module.exports.showCrudData = () => {
  return pgPool.query(`SELECT * FROM crud_data;`);
};

//Insert data

module.exports.insertData = (curdData) => {
  const sql = {
    text: "INSERT INTO crud_data(first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING id;",
    values: [
      curdData.firstname,
      curdData.lastname,
      curdData.useremail,
      curdData.userpassword,
    ],
  };
  console.log("curdData>>>>>>>>>>>", curdData);
  return pgPool.query(sql);
};
module.exports.updateUserData = (update) => {
  const updateData = {
    text: "UPDATE crud_data SET first_name = $1, last_name = $2, email = $3, password = $4 WHERE id = $5 ;",
    values:[
        update.editFirstName,
        update.editLastName,
        update.editEmail,
        update.editPassword,
        update.updatedId
    ]
  }

  return pgPool.query(updateData)
};

//Delete query
module.exports.deleteAllData = (deleteData) => {
  console.log("Delete data>>>>>>", deleteData);
  return pgPool.query("DELETE FROM crud_data where id = $1", [deleteData]);
};
