let body = $response.body;
if (body) {
  try {
    body = body.replace(/("vip":)\s*\d+/g, '$1 9');
  } catch (e) {
    console.log('vip_replace error', e);
  }
}
$done({ body });
