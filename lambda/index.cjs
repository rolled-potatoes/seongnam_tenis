const { facMap } = require('./constants/facId.js');
const dayjs = require('dayjs');
const { getAvailableTimeTable } = require('./libs/isdc.js');

const handler = async () => {
  const date = dayjs().format('YYYY-M-D');
  const jobs = Object.values(facMap).map((facId) => {
    return getAvailableTimeTable({ id: facId, date });
  });

  try {
    const datas = await Promise.allSettled(jobs);
    const fulltiledData = datas.filter((data) => data.status === 'fulfilled');
    const data = fulltiledData.reduce((acc, cur) => {
      const { value } = cur;
      const list = Object.entries(value).filter(([_, v]) => v.length > 0);
      list.forEach(([key, l]) => {
        acc[key] = l;
      });
      return acc;
    }, {});

    return {
      statusCode: 200,
      body: JSON.stringify({
        items: data,
      }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: 'error',
    };
  }
};
exports.handler = handler;
