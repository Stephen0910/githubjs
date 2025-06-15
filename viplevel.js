const version = 'V1.0.0';
let body = $response.body;
if (body) {
  try {
    let url = $request.url;
    if (/120\.76\.41\.\d+/.test(url)) {
      body = body.replace(/("vip":\s*)\d+/g, '$1 9');
    }
  } catch (e) {
    console.log(`vip modify error: ${e}`);
  }
}
$done({ body });
