/*
	CREATES if not present a sqlite "db"
	IN the users app settings dir
*/

import path from 'path';
import { remote } from 'electron';
/*
	...A batteries-included, multi-dialect
	 (MSSQL, MySQL, PostgreSQL, SQLite3,
	 Oracle (including Oracle Wallet Authentication))
	 query builder for Node.js
*/
import knex from 'knex';
import sqLite from 'sqlite3';

const { app } = remote;

const userDataPath = app.getPath('userData');
const dbFilePath = path.join(userDataPath, 'clipboard-clone.sqlite')

const dbConfig = ({
  client: 'sqlite3',
  connection: {
    filename: dbFilePath,
  },
  useNullAsDefault: true,
});


let database = knex(dbConfig)

// check if table exists
database.schema.hasTable('clippings').then((t) => {
  console.log('t');
  console.log(t);
  console.log('// - - - - - //')
  
  if (!t) {
    return database.schema.createTable('clippings', (tbl) => {
      tbl.increments('id').primary();
      tbl.text('content');
    });
  }
});

export default database;
