function jsonLoader(content: string) {
  let jsonContent = content;
  try {
    const obj = JSON.parse(content);
    // 增加额外数据 "added": "b"
    obj.added = 'b';
    jsonContent = JSON.stringify(obj);
  } catch (err) {}
  return jsonContent;
}

export default jsonLoader;