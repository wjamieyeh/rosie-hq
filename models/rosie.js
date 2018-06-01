// Page Controller: Angela
const db = require('.././db/config'),
      Rosie = {},
      sql = require('psqljs');

Rosie.find = () => {
  // return db.query(`SELECT * FROM rosies;`)
  return db.query(sql.select().from('rosies'))
}

Rosie.findOneRosie = (id) => {
  // return db.oneOrNone(`SELECT * FROM rosies WHERE rosie_id = $1;`,id)
  return db.one(sql.select().from('rosies').where('rosie_id = $1', id))
}

Rosie.changeStatusOneRosie = (id,active) => {
  return db.one(sql.update('rosies',{active:active}).where('rosie_id = $1', id).returning())
}

Rosie.destroyOneRosie = (id) => {
  return db.one(sql.delete('rosies').where('rosie_id = $1', id).returning())
}

Rosie.createOneRosie = (rosieData) => {
    const{first_name, last_name, active, classof}=rosieData
    return db.one(sql.insert('rosies', { first_name:first_name, last_name:last_name, active:active, classof: classof}).returning())
}

Rosie.updateRosie=(id,rosieData)=>{
  const {first_name, last_name, active, classOf,photo_link} = rosieData;
    return db.one(sql.update('rosies', {first_name:first_name, last_name:last_name, active:active, classOf:classOf,photo_link:photo_link}).where('rosie_id = $1', id).returning())
}
Rosie.smallUpdateRosie=(id,rosieData)=>{
  const {first_name, last_name,classof} = rosieData;
    return db.one(sql.update('rosies', {first_name:first_name, last_name:last_name, classOf:classof}).where('rosie_id = $1', id).returning())
}


Rosie.rosiesForMultiselect = () => {
  return db.query(`select concat(first_name,' ',last_name) as label, rostr_id as value from rosies where active =true;`)
}

module.exports = Rosie;
