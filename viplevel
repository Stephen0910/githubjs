let body = $response.body;
if (body) {
  try {
    body = body.replace(/("vip":)\s*\d+/g, '$1 9');
  } catch (e) {
    console.log('VIP 替换错误：', e);
  }
}
$done({ body });
