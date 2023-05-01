<?php
$now = date("H:i:s");
if ($now < "12") {
    $greeting = "Доброго ранку";
} elseif ($now < "18") {
    $greeting = "Доброго дня";
} else {
    $greeting = "Доброго вечора";
}
echo "<p>$greeting!</p>";
?>
