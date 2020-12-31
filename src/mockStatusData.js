const statusTickerMockDatas = Array.from(Array(9)).map((_, i) => {
  const option = Math.floor(Math.random() * 4);
  const platform = `Platform ${i + 1}`;
  let fetching = false;
  let minor = false;
  let major = false;

  switch (option) {
    case 0:
      fetching = true;
      break;
    case 1:
      minor = true;
      break;
    case 2:
      major = true;
      break;
    case 3:
      break;
    default:
  }

  return {
    platform,
    fetching,
    minor,
    major,
  };
});

export default statusTickerMockDatas;
