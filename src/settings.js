import dotenv from 'dotenv';

dotenv.config();
// test environment
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
// Database connection
export const connectionString = process.env.CONNECTION_STRING;
