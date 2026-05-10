import pg from 'pg';
const { Client } = pg;
const client = new Client({
  connectionString: "postgresql://LeorafJMC:LeorafJMC_123@127.0.0.1:5432/db_pegawai"
});

async function test() {
  try {
    await client.connect();
    console.log('Connected successfully');
    const res = await client.query('SELECT current_database()');
    console.log('Database:', res.rows[0].current_database);
    await client.end();
  } catch (err) {
    console.error('Connection error:', err.message);
    process.exit(1);
  }
}

test();
