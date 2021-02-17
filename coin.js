const { RESTDataSource } = require("apollo-datasource-rest");

class RandomUser extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.coinlore.net/api/tickers/";
  }

  async getUser(id = "all") {
    const user = await this.get(`/?id=${id}`);

    return user.data[0];
  }

  async getUsers(id = "all") {
    const user = await this.get(`/?id=${id}`);

    return user.data;
  }
}

module.exports = RandomUser;