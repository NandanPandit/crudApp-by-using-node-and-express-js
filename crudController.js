//import service file
const curdModel = require("../crud-model/crudModel");

module.exports.getForm = async (req, res) => {
  console.log("Form page loaded successfully!");
  let myData = await curdModel.showCrudData();

  console.log("Fetch all database data>>", myData.rows);

  res.render("crudApp", {
    //create a key to show data in to client side.
    userData: myData.rows,
  });
};

module.exports.insertedData = async (req, res) => {
  console.log("Crud Data>>>>>>>>", req.body);

  let insertQuery = await curdModel.insertData(req.body);

  console.log("Data>>>>>>>>>", insertQuery);
  console.log(insertQuery.rows[0].id);
  
  res.status(200).json({
    status: "done",
    insertId: insertQuery.rows[0].id
  });
};
//update data
module.exports.updateData = async(req, res)=>{
  console.log("DATA>>>>>>>>", req.body);

  let update = await curdModel.updateUserData(req.body);
  
  res.status(200).json({
    status:"done"
  })
  res.redirect("")
}
//delete data
module.exports.deleteData = async (req, res)=>{
    let deleteData = await curdModel.deleteAllData(req.body.deleteId);

    console.log("DeleteData>>>>>>>>>", deleteData);
    res.status(200).json({
    status:"done"
   })
}
