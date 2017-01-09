
$curl = curl_init();
$url = $_GET['url'];
curl_setopt($curl , CURLOPT_URL , $url);
curl_setopt($curl , CURLOPT_RETURNTRANSFER , true);
$rel = curl_exec($curl);
curl_close($curl);
print_r($rel);
