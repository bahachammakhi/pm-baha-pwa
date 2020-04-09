<?php
    if(isset($_GET["log"])&&isset($_GET["pwd"])){
        $l=$_GET["log"];$p=$_GET["pwd"];
        if($l=="istic" && $p=="aaaa"){
            echo "ok";}
            else{
                echo "no";
        }
    }else{
        echo "no";
    }

?>