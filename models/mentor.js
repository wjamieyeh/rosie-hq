// Page Controller: Angela
const db = require('.././db/config'),
  Mentor = {},
  sql = require('psqljs');

Mentor.find = () => {
  return db.query(sql.select().from('mentors'))
}

Mentor.findOneMentor = (id) => {
  return db.one(sql.select().from('mentors').where('mentor_id = $1', id))
}

Mentor.changeStatusOneMentor = (id, active) => {
  return db.one(sql.update('mentors', {active: active}).where('mentor_id = $1', id).returning())
};

Mentor.destroyOneMentor = (id) => {
  return db.one(sql.delete('mentors').where('mentor_id = $1', id).returning())};


Mentor.getOneRosieMentor=(id)=>{
  return db.query(`select * from mentors where (Select rostr_id from rosies where rosie_id=$1) =ANY (rosies)`,id)
};

Mentor.createOneMentor = (mentorData) => {
  const {first_name, last_name, active, title, rosies} = mentorData
  return db.one(sql.insert('mentors', {
    first_name: first_name,
    last_name: last_name,
    active: active,
    title: title,
    rosies: rosies
  }).returning())
};

Mentor.addRosieToMentor = (addData) => {
  const{rosieId,mentorId}=addData;
  return db.one(`UPDATE mentors SET rosies = array_cat(rosies, '{$1}') WHERE mentor_id=$2 RETURNING *`, [Number(rosieId), Number(mentorId)])
};

Mentor.removeRosieFromMentor = (addData) => {
  const{rosieId,mentorId}=addData;
  return db.one(`UPDATE mentors SET rosies = array_remove(rosies, '$1') WHERE mentor_id=$2 RETURNING *`, [Number(rosieId), Number(mentorId)])
};

Mentor.updateMentor=(id,mentorData)=>{
  const {first_name, last_name, active, title, rosies} = mentorData;
    return db.one(sql.update('mentors', {first_name:first_name, last_name:last_name, active:active, title:title, rosies:rosies}).where('mentor_id = $1', id).returning())


};



module.exports = Mentor;
