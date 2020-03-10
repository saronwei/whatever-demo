import axios from 'axios';

const configPath = process.env.BASE_URL + 'config.json';

const Config = async (store: any) => {
  const configs = await axios.get(configPath);
};

export default Config;
