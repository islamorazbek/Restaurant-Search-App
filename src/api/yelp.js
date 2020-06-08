import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer t7NIAPWzygxYHQBlyBT7QA1XcwRVCJveQuYL2a5ppsReG_VURrnPAIpr5TwF9YNbgPjJRjY1puc1TSDC_uOwrO-vK4GFNLtK1b9GpsngrYhyOF8R9-Sf5TTrDgDBXnYx'
    }
});