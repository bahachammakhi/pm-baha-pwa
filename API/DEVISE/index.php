<?php

$m=[];

$d["nom"]="dollars";$d["valh"]=2.45;$d["vala"]=2.45;
$e["nom"]="euro";$e["valh"]=2.95;$e["vala"]=2.96;
$y["nom"]="yen";$y["valh"]=0.022;$y["vala"]=0.021;
$l["nom"]="livre";$l["valh"]=3.28;$l["vala"]=3.28;



$m[0]=$d;$m[1]=$e;$m[2]=$y;$m[3]=$l;
if(isset($_GET["nom"])){
$n=$_GET["nom"];
    foreach($m as $k=>$mm){
        if($mm["nom"]==$n){
            $a[0]=$m[$k];
            $msg=json_encode($a);
        }
    }
   
}else{
$msg=json_encode($m);}
echo $msg;

?>