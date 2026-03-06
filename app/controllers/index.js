
const { axiosFake } = require('@connections/axios-fake');
const { coreApi } = require("@constants/apis");

exports.index = async (ctx) => {
  try {
    const response = await axiosFake.get(coreApi.fakeProductApi);

    ctx.body = {
      status: 200,
      message: "Success",
      data: response.data
    };

  } catch (error) {
    throw error;
  }
};