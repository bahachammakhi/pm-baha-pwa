<?php

$m=[];

$t =$s=$d=$b = new \stdClass();
$t->ville="tunis";$t->temperature=13;
$s->ville="sousse";$s->temperature=15;
$d->ville="djerba";$d->temperature=17;
$b->ville="beja";$b->temperature=9;

if(isset($_GET["date"])){
    $t->temperature=17;$b->temperature=20;
}
$m[]=$t;$m[]=$s;$m[]=$d;$m[]=$b;

$msg=json_encode($m);
echo $msg;

?>