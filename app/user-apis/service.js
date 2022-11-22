


// var {query} = require('../helper/dbpool')

// const { initializeApp, database } = require('firebase-admin')
var pool = require('../config/globalDb');
const md5 = require('md5')

// var utf = require('utf8')

const query = async (query) => {
	return new Promise((resolve, reject) => {
		pool.query(query, (error, results) => {
			if (error) { return reject(error) };
			return resolve(results)
		})
	})
}
exports.getUser_data = async (req_body, req_query) => {
	const {id}  = req_body
	let response= {}
	let qury = ""
	try {
		if(id) 
		{ qury = `select * from user where id = '${id}'`}
		else
		{
			qury = `select * from user`
		}
		
		
		 let result = await query(qury)

		if (result.length>0) {
			response['type'] = 1
			response['data'] = result;
			return response
		}

		else {

			response['type'] = 0;
			response['data'] = result.insertId;
			response['message'] = "No Record to Display";

			return response;
		}

	} catch (error) {
		console.log(error)
		return 0
	}
}

exports.addUser_data = async (req_body, rq_query) => {

	const { language,name, email, cell, age } = req_body
	// const name = rq_query.name;
	// const email = rq_query.email;

	// const cell = rq_query.cell;

	// const age = rq_query.age;

	// console.log(rq_query)
	let response={}
	try {




		let sql = `select email from user where email='${email}'`
		console.log(sql)
		let rsl = await query(sql);

		if (rsl.length===0) {

			let qury = `INSERT IGNORE INTO user  (name,email,cell,age,language) VALUES ('${name}', '${email}', '${cell}', '${age}' ,'${language}')`
			let result = await query(qury)

			if (result.insertId === 0) {
				response['type'] = 0
				response['message'] = "Unable to insert Data";
				return response
			}

			else {

				response['type'] = 1;
				response['data'] = result.insertId;
				response['message'] = "successfully inserted  Data";

				return response;
			}


		}
		else {
			response['type'] = 0;
				response['data'] = rsl;
				response['message'] = "User Already exist"
			return response
		}








	} catch (error) {
		console.log(error)
		return 0
	}
}
