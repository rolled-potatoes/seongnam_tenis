const express = require('express');
const axios = require('axios');
const router = express.Router();
const { facMap } = require('@root/src/constants/facId');
const dayjs = require('dayjs');
const { getAvailableTimeTable } = require('@root/src/libs/isdc');

router.get('', async (req, res) => {
  const date = dayjs().format('YYYY-M-D');
  const jobs = Object.values(facMap).map((facId) => {
    return getAvailableTimeTable({ id: facId, date: '2023-9-19' });
  });

  try {
    const datas = await Promise.allSettled(jobs);
    const fulltiledData = datas.filter((data) => data.status === 'fulfilled');
    const data = fulltiledData.reduce((acc, cur) => {
      const { value } = cur;
      const list = Object.entries(value).filter(
        ([_, v]) => v.length > 0,
      );
      list.forEach(([key,l])=>{
        acc[key] = l
      })
      return acc;
    }, {});

    res.status(200).json({ items: data });
  } catch (e) {
    res.status(500).end();
  }
});

module.exports = router;
