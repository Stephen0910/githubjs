let body = $response.body;
if (body) {
  try {
    body = body.replace(/"vip":1, '"vip":9');
  } catch (e) {
    console.log('VIP 替换错误：', e);
  }
}
$done({ body });
