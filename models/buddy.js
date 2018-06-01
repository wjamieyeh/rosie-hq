// Page Controller: Angela
const db = require('.././db/config'),
  Buddy = {},
  sql = require('psqljs');

Buddy.find = () => {
  return db.query(sql.select().from('buddies'))
}

Buddy.findOneBuddy = (id) => {
  return db.one(sql.select().from('buddies').where('buddy_id = $1', id))
}

Buddy.changeStatusOneBuddy = (id, active) => {
  return db.one(sql.update('buddies', {active: active}).where('buddy_id = $1', id).returning())
};

Buddy.destroyOneBuddy = (id) => {
  return db.one(sql.delete('buddies').where('buddy_id = $1', id).returning())
};

Buddy.getOneRosieBuddy = (id) => {
  return db.query(`select * from buddies where (Select rostr_id from rosies where rosie_id=$1) =ANY (rosies)`, id)
};

Buddy.createOneBuddy = (buddyData) => {
  const {first_name, last_name, active, title, rosies} = buddyData;
  return db.one(sql.insert('buddies', {
    first_name: first_name,
    last_name: last_name,
    active: active,
    title: title,
    rosies: rosies
  }).returning())
};

Buddy.addRosieToBuddy = (addData) => {
  const{rosieId,buddyId}=addData;
  return db.query(`UPDATE buddies SET rosies = array_cat(rosies, '{$1}') WHERE buddy_id=$2 RETURNING *`, [Number(rosieId), Number(buddyId)])
};

Buddy.removeRosieFromBuddy = (addData) => {
  const{rosieId,buddyId}=addData;
  return db.query(`UPDATE buddies SET rosies = array_remove(rosies, '$1') WHERE buddy_id=$2 RETURNING *`, [Number(rosieId), Number(buddyId)])
};

Buddy.updateBuddy=(id,buddyData)=>{
  const {first_name, last_name, active, title, rosies} = buddyData;
    return db.one(sql.update('buddies', {first_name:first_name, last_name:last_name, active:active, title:title, rosies:rosies}).where('buddy_id = $1', id).returning())


};

module.exports = Buddy;
