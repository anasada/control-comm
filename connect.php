<?php 

// http://127.0.0.1/phpmyadmin

$username=$_POST['username'];
$trial_num=$_POST['trial_num'];
$map_num=$_POST['map_num'];
$versions=$_POST['version'];
$rewards=$_POST['rewards'];
$tokens=$_POST['tokens'];
$hammers=$_POST['hammers'];
$walls=$_POST['walls'];
$point_to=$_POST['signal'];
$rt=$_POST['rt'];
$conf_rating=$_POST['conf_rating'];
$serious=$_POST['serious'];
$strategy=$_POST['strategy'];
$problems=$_POST['problems'];


// EDIT: DELETING VALUES TO PROTECT PRIVACY
// $dbhost='';
// $dbuser='';
// $dbpass='';
// $db='';
$con=mysqli_connect($dbhost,$dbuser,$dbpass,$db);

if($con){
    // echo "connection successful!";
    $sql="INSERT INTO `control_resp`(username,trial_num,map_num,versions,rewards,tokens,hammers,walls,point_to,rt,conf_rating,serious,strategy,problems)VALUES('$username', '$trial_num', '$map_num','$versions','$rewards','$tokens','$hammers','$walls','$point_to','$rt','$conf_rating','$serious','$strategy','$problems')";
    $result=mysqli_query($con,$sql);
}else{
    die(mysqli_error($con));
}


?>
