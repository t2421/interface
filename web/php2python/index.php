<?php
//@see https://qiita.com/shusuke_otani/items/fee64c605a14e80b8da6
$numbers = [1,2,3,4,5];
$python_script = "./main.py";
$cmd = array("python",$python_script,escapeshellarg(json_encode($numbers)));
$cmd_text = implode(' ',$cmd);
echo "Runnning command: ".$cmd_text."<br>";
$result = shell_exec($cmd_text);
$result = json_decode($result);

echo("std:".$result->std.'<br>');
echo("avg:".$result->avg);