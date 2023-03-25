<h1>
        wax wax, here is listings 
    </h1>
<h2><?php echo $heading ?></h2>
<?php foreach($listings as $listing): ?>
    <h3><?php echo $listing["title"] ?></h3>
    <p><?php echo $listing["discriptions"] ?></p>
<?php endforeach ?>