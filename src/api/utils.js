const filterResults = (array) => {
  const webDevelopmentTag = 'c23ce252-cf78-4b98-8c11-8769801aaf3a';
  const softwareDevelopmentTag = '6f86127d-6051-4a38-94bb-f7b475dde109';
  const programmingTag = 'a59f1e4e-257b-4bd0-90c7-189c3efbf917';
  const engineeringTag = 'dff0aca6-52fe-4cc4-a93a-194852b522f0';

  return array.filter((stream) => {
    return stream.tag_ids.includes(webDevelopmentTag)
      || stream.tag_ids.includes(softwareDevelopmentTag)
      || stream.tag_ids.includes(programmingTag)
      || stream.tag_ids.includes(engineeringTag);
  });
};

module.exports = {
  filterResults,
};
