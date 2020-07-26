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
import 'sqlite3';

const { app } = remote;

// db config
const dbFile = path.join(app.getPath('userData'), 'clipboard-clone.sqlite');
const dbConfig = ({
  client: 'sqlite3',
  connection: {
    filename: dbFile,
  },
  useNullAsDefault: true,
});

// check if table exists
dbConfig.schema.hasTable('clippings').then((t) => {
  if (!t) {
    return dbConfig.schema.createTable(clippings, (tbl) => {
      tbl.increments('id').primary();
      tbl.text('content');
    });
  }
});

export default database;
