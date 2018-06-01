// Page Controller: Angela
const db = require('.././db/config'),
  Manager = {},
  sql = require('psqljs');

Manager.find = () => {
  return db.query(sql.select().from('managers'))
}

Manager.findOneManager = (id) => {
  return db.one(sql.select().from('managers').where('manager_id = $1', id))
}

Manager.changeStatusOneManager = (id, active) => {
  return db.one(sql.update('managers', {active: active}).where('manager_id = $1', id).returning())
};

Manager.destroyOneManager = (id) => {
  return db.one(sql.delete('managers').where('manager_id = $1', id).returning())};


Manager.getOneRosieManager=(id)=>{
  return db.query(`select * from managers where (Select rostr_id from rosies where rosie_id=$1) =ANY (rosies)`,id)
};

Manager.createOneManager = (managerData) => {
  const {first_name, last_name, active, title, rosies} = managerData;

  return db.one(sql.insert('managers', {
    first_name: first_name,
    last_name: last_name,
    active: active,
    title: title,
    rosies: rosies
  }).returning())
};

Manager.addRosieToManager = (addData) => {
  const{rosieId,managerId}=addData;
  return db.query(`UPDATE managers SET rosies = array_cat(rosies, '{$1}') WHERE manager_id=$2 RETURNING *`, [Number(rosieId), Number(managerId)])
};

Manager.removeRosieFromManager = (addData) => {
  const{rosieId,managerId}=addData;
  return db.query(`UPDATE managers SET rosies = array_remove(rosies, '$1') WHERE manager_id=$2 RETURNING *`, [Number(rosieId), Number(managerId)])
};

Manager.updateManager=(id,managerData)=>{
  const {first_name, last_name, active, title, rosies} = managerData;
    return db.one(sql.update('managers', {first_name:first_name, last_name:last_name, active:active, title:title, rosies:rosies}).where('manager_id = $1', id).returning())
};


module.exports = Manager;
