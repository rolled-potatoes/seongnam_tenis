const axios = require('axios');
const jsdom = require('jsdom');

async function getTimeTable({ facId, resdate }) {
  const res = await axios.get(
    `https://res.isdc.co.kr/otherTimetable.do?facId=${facId}&resdate=${resdate}`,
  );

  return res;
}

async function parseAvailableReservation({ html }) {
  const dom = new jsdom.JSDOM(html);
  const document = dom.window.document;
  const labels = document.querySelectorAll('label');
  const tables = document.querySelectorAll('table');
  const res = {};

  tables.forEach((table, idx) => {
    const trs = table.querySelectorAll('tr');
    const label = labels[idx].textContent;
    res[label] = [];

    trs.forEach((tr) => {
      const isAvailable = tr.textContent.includes('예약가능');
      if (isAvailable) {
        const pattern = /(\d{1,2}:\d{2}\s*~\s*\d{1,2}:\d{2})/g;
        const [time] = tr.textContent.match(pattern)
        res[label].push(time);
      }
    });
  });

  return res;
}

async function run({} = {}) {
  const facId = 'FAC57';
  const resdate = '2023-9-19';
  const { data: html } = await getTimeTable({ facId, resdate });
  const list = await parseAvailableReservation({ html });
  console.log(list);
}

run();
