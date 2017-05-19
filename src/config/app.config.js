import dotenv from 'dotenv';

dotenv.config();

const config = {
	jwtSecretKey : process.env.SECRET_KEY
}

export default config;