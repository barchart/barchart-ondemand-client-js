<?php

$url = $_GET['url'];

$result = file_get_contents($url);

echo $result;

