new $DQ.Stat('Primary', 'PS', 'Physical Strength', 5000, 5000);
new $DQ.Stat('Primary', 'MD', 'Manual Dexterity', 5000, 5000);
new $DQ.Stat('Primary', 'AG', 'Agility', 5000, 5000);
new $DQ.Stat('Primary', 'MA', 'Magical Aptitude', 5000, 5000);
new $DQ.Stat('Primary', 'WP', 'Willpower', 5000, 5000);
new $DQ.Stat('Primary', 'EN', 'Endurance', 5000, 2500);

new $DQ.Stat('Secondary', 'FT', 'Fatigue', 2500, 2500);
new $DQ.Stat('Secondary', 'PB', 'Physical Beauty');
new $DQ.Stat('Secondary', 'PC', 'Percpetion', 1000, 750);
new $DQ.Stat('Secondary', 'TMR', 'Tactical Movement Rate');
new $DQ.Stat('Secondary', 'NA', 'Natural Armour');


new $DQ.Gender('Male', 0);
new $DQ.Gender('Female', -0.5).
	addStatMod('PS', -2).addStatMod('MD', 1).addStatMod('EN', 1);

new $DQ.Hand('Right', 'D5 < D10', 'Right handed');
new $DQ.Hand('Left', 'D5 > D10', 'Left handed');
new $DQ.Hand('Ambi', 'D5 = D10', 'Ambidexterous');


new $DQ.Race('Dwarf', 1.1, 4, 'Short').living('20', '125 - 150', 3).
	addTrait("Dwarves close vision is exceptionally sharp, but many have poor distance vision. They can see in the dark as a human does at dusk. Their effective range of vision in the dark is 50 feet under the open sky, 100 feet inside man-made structures, and 150 feet inside caves and tunnels.").
	addTrait("Dwarves can assess the value of and deal in gems and metals as if they are a Merchant of Rank 5. If a dwarf character progresses in the Merchant skill, their ability to assess the value of gems and metals is five greater then their current Rank, to a maximum of ten.").
	addTrait("If a dwarf character is a Ranger specialising in mountains or caverns, they pay half the EP cost necessary to advance ranks.").
	addTrait("A dwarf's capacity for alcohol is twice that of a human's.").
	addGenderMod('Male', 0, 1.0).addGenderMod('Female', -2, 0.9).
	addStatMod('PS', 2).addStatMod('AG', -2).addStatMod('EN', 2).
	addStatMod('MA', -2).addStatMod('WP', 2).addStatMod('PC', 1).
	addStatMod('PB', -2).addStatMod('TMR', -1);

new $DQ.Race('Elf', 1.2, 5, 'Normal').living('30 - 300', '10000', 1).
  addTrait("Elves have superior vision especially over long distances or in poor lighting. An elf can see in the dark as a human does on a cloudy day. Their effective range of vision in the dark is 150 feet under the open sky, and 75 feet elsewhere.").
  addTrait("If an elf character is a ranger specialising in woods, they pay one-half the EP to advance ranks.").
  addTrait("An elf receives a racial Talent which functions in all respects as the Witchcraft Witchsight Talent.").
  addTrait("An elf makes little or no noise while walking and adds 10% to their chance to perform any activity requiring stealth.").
  addTrait("If an elf character takes the healer skill, the elf pays three-quarters the EP to advance ranks, though they cannot resurrect the dead.").
  addTrait("An elf is impervious to the special abilities of the lesser undead.").
  addTrait("If an elf character takes the courtier skill, the elf pays one-half the EP to advance ranks.").
  addGenderMod('Male', 5, 0.80).addGenderMod('Female', 2, 0.65).
  addStatMod('PS', -1).addStatMod('AG', 1).addStatMod('EN', -1).
  addStatMod('MA', 1).addStatMod('WP', 1).addStatMod('PC', 1).
  addStatMod('PB', 2).addStatMod('TMR', 1);

new $DQ.Race('Halfling', 1.1, 3, 'Short').living('21', '80 - 90', 4).
  addTrait("A halfling has infravision, which allows them to see faint red shapes where living beings are located in the dark. Their range of vision is 100 feet.").
  addTrait("A halfling adds 20% to their chance to perform any activity requiring stealth.").
  addTrait("If a halfling takes the thief skill, they pay half the EP cost to advance ranks.").
  addTrait("A halfling may drop jewellery down active volcanos without anyone thinking the worse of them.").
  addGenderMod('Male', -12, 0.65).addGenderMod('Female', -13, 0.60).
  addStatMod('PS', -3).addStatMod('MD', 3).addStatMod('AG', 1).
  addStatMod('EN', -2).addStatMod('MA', -1).addStatMod('WP', 1).
  addStatMod('PB', -1);

new $DQ.Race('Hill Giant', 1.5, 9, 'Giant').living('26', '500', 2).
  addTrait("A giant has infravision, which allows them to see faint red shapes where living beings are located in the dark. Their range of vision is 250 feet.").
  addTrait("A giant's magic resistance is increased by 10%.").
  addTrait("Whenever a giant attempts minor magic, the GM should increase the difficulty factor by one, making it easier.").
  addTrait("Giants may use the giant weapons listed in the Weapons Table.").
  addGenderMod('Male', 0, 1.0).addGenderMod('Female', -4, 0.9).
  addStatMod('PS', 7).addStatMod('MD', -1).addStatMod('AG', -2).
  addStatMod('EN', 8).addStatMod('MA', -1).addStatMod('WP', -1).
  addStatMod('FT', 1).addStatMod('PB', -1).addStatMod('TMR', 3).
  addStatMod('NA', 1);

new $DQ.Race('Human', 1.0, 6, 'Normal').living('16', '40 - 90', 6).
  addTrait("Humans can ingratiate themselves with strangers more readily than other races. A human character has +10 to any reaction roll in an encounter with sentient creatures.").
  addGenderMod('Male', 0, 1.0).addGenderMod('Female', -4, 0.8);

new $DQ.Race('Orc', 1.1, 6, 'Normal').living('12', '40 - 45', 10).
  addTrait("An orc's eyes are highly light-sensitive. They must decrease their chance of hitting a target with Ranged Combat by 10% in daylight.").
  addTrait("An orc has infravision, which allows them to see faint red shapes where living beings are located in the dark. Their range of vision is 150 feet.").
  addTrait("Orcs are either back-stabbing scum or brutal bully-boys. An orc may take one of either Assassin Skill or Warrior Skill and pay three-quarters the EP to advance in Ranks.").
  addTrait("An orc's seed is highly fertile. The orc and hybrid orc population increase mitigates against the high orc fatality rate.").
  addGenderMod('Male', -4, 1.1).addGenderMod('Female', -6, 1.0).
  addStatMod('PS', 2).addStatMod('EN', 1).addStatMod('MA', -2).
  addStatMod('WP', -2).addStatMod('FT', 2).addStatMod('PB', -4).
  addStatMod('NA', 1);

new $DQ.Race('Shape Changer', 1.4, 6, 'Normal').living('16', '55 - 65', 5).
  addTrait("A shape changer can change from human to animal form (or vice-versa) in 10 seconds during daytime and 5 seconds during the night-time.").
  addTrait("A shape changer possesses a dual nature. While in animal form, human inhibitions will be muted; and while in human form, animal instincts will be dulled.").
  addTrait("A shape changer cannot be harmed while in animal form, unless struck by a silvered weapon, magic or by a being with a Physical Strength greater than 25. Five Damage Points are automatically absorbed in the latter case.").
  addTrait("A shape changer will regenerate 1 Endurance Point every 60 seconds while in animal form.").
  addTrait("The player must devise a set of characteristics for their animal form. Take the difference between the average for each characteristic in animal and human form, and modify the human characteristics appropriately.").
  addTrait("A shape changer is automatically lunar aspected.").
  addTrait("A shape changer can remain in animal form for a quarter of the night times the quarters of the moon showing (i.e. at full moon they may remain in animal form all night). During the day a shape changer can remain in animal form for one hour times the quarter of the moon. A shape changer can make one set of transformations times the quarter of the of the moon per day (i.e. dawn to next dawn).").
  addTrait("If a shape changer is in animal form during the day, there is a 1% cumulative chance for each 5 minutes they remain in animal form that they will never be able to change back into human form. Similarly, if the shape changer exceeds the time limits given above, there is a 1% cumulative chance (per 5 minutes) of their not being able to return to human form.").
  addTrait("A shape changer will be inconvenienced by those wards which can be used against were-creatures.").
  addTrait("A shape changer's magic resistance is increased by 5%.").
  addTrait("If a shape changer takes the courtier skill they pay three-quarters the Experience Points necessary to advance ranks.").
  addGenderMod('Male', 0, 1.0).addGenderMod('Female', -4, 0.8).
  addStatMod('PB', 1);


new $DQ.HeightWeight('Normal', "5'3", 100, 170, 130);
new $DQ.HeightWeight('Normal', "5'6", 110, 185, 140);
new $DQ.HeightWeight('Normal', "5'9", 120, 200, 150);
new $DQ.HeightWeight('Normal', "6'0", 130, 220, 165);
new $DQ.HeightWeight('Normal', "6'3", 145, 240, 180);
new $DQ.HeightTable('Short').
  addHeight("3'9", 65, 110, 85).
  addHeight("4'0", 75, 125, 95).
  addHeight("4'3", 85, 140, 105).
  addHeight("4'6", 95, 155, 115).
  addHeight("4'9", 105, 170, 125);
new $DQ.HeightTable('Giant').
  addHeight("8'4", 295, 490, 370).
  addHeight("8'8", 335, 555, 420).
  addHeight("9'0", 375, 625, 470).
  addHeight("9'4", 420, 700, 525).
  addHeight("9'8", 465, 780, 580);


new $DQ.Armour('Cloth', 'Cloth', 1, 1, 0, 5, 30);

new $DQ.Armours('Leather', ['Cloth']);
new $DQ.Armours('Scale', ['Cloth']);
new $DQ.Armours('Chain', ['Cloth']);
new $DQ.Armours('Partial', ['Chain']);
new $DQ.Armours('Plate 1', ['Chain']);
new $DQ.Armours('Plate 2', ['Plate 1']);
new $DQ.Armours('Dragon Skin', ['Scale', 'Leather']);
new $DQ.Armours('Mithril', ['Chain']);

new $DQ.Armour('Leather', 'Heavy Furs', 2, 2, 0, 5, 40);
new $DQ.Armour('Leather', 'Soft Leather', 3, 3, 0, 0, 50);
new $DQ.Armour('Leather', 'Leather', 3, 4, -1, 0, 50);

new $DQ.Armour('Scale', 'Scale', 4, 5, -3, -5, 600);
new $DQ.Armour('Scale', 'Full Scale', 6, 5, -2, -10, 750);

new $DQ.Armour('Chain', 'Chainmail', 7, 6, -2, -10, 1200);

new $DQ.Armour('Partial', 'Partial Plate', 6, 6, -2, -15, 1500);

new $DQ.Armour('Plate 1', 'Full Plate', 8, 7, -3, -20, 2000);
new $DQ.Armour('Plate 1', 'Heavy Plate', 8, 9, -3, -25, 3500);

new $DQ.Armour('Plate 2', 'Improved Plate', 7, 8, -3, -20, 2850);
new $DQ.Armour('Plate 2', 'Jousting', 9, 10, -4, -30, 5000);
new $DQ.Armour('Plate 2', 'Heavy Jousting', 15, 15, -8, -50, 12000);

new $DQ.Armour('Dragon Skin', 'Dragon Skin', 4, -3, -1, 0, 999999);

new $DQ.Armour('Mithril', 'Mithril', 2, 10, -2, -10, 999999);

new $DQ.Shield('Buckler', 3, 2	, 0, 5);
new $DQ.Shield('Small round', 5, 3, 2, 8);
new $DQ.Shield('Large round', 10, 4, 3, 10);
new $DQ.Shield('Kite', 15, 5, 4, 15);
new $DQ.Shield('Tower', 25, 6, 6, 20);
new $DQ.Shield('Main-gauche', 1, 2, 0, 20);


new $DQ.Weapon('Swords', 'Dagger', '1', 10/16, 7, 10, 40, 0, '8', 'A', 'RMC', 9, 10);
new $DQ.Weapon('Swords', 'Main-gauche', '1', 1, 8, 15, 45, 1, 'P', 'A', 'MC', 10, 20);
new $DQ.Weapon('Swords', 'Shortsword', '1', 2, 10, 12, 45, 3, 'P', 'A', 'M', 6, 40);
new $DQ.Weapon('Swords', 'Falchion', '1', 4, 12, 11, 50, 2, 'P', 'B', 'M', 8, 35);
new $DQ.Weapon('Swords', 'Scimitar', '1', 4, 11, 15, 50, 3, 'P', 'B', 'M', 8, 60);
new $DQ.Weapon('Swords', 'Tulwar', '1', 4, 13, 15, 50, 4, 'P', 'B', 'M', 8, 65);
new $DQ.Weapon('Swords', 'Rapier', '1', 2, 11, 18, 45, 3, 'P', 'A', 'M', 10, 35);
new $DQ.Weapon('Swords', 'Sabre', '1', 3, 14, 15, 60, 3, 'P', 'B', 'M', 7, 40);
new $DQ.Weapon('Swords', 'Broadsword', '1', 3, 15, 15, 55, 4, 'P', 'B', 'M', 6, 50);
new $DQ.Weapon('Swords', 'Estoc', '1', 2, 15, 17, 45, 5, 'P', 'A', 'M', 9, 65);
new $DQ.Weapon('Swords', 'Hand & a half', '1-2', 6, 17, 16, 60, 5, 'P', 'B', 'M', 7, 85);
new $DQ.Weapon('Swords', 'Claymore', '1-2', 5, 16, 13, 50, 4, 'P', 'B', 'M', 7, 80);
new $DQ.Weapon('Swords', 'Two-handed sword', '2', 9, 22, 14, 55, 7, 'P', 'B', 'M', 5, 100);
new $DQ.Weapon('Swords', 'Katana', '1-2', 3, 14, 17, 60, 3, 'P', 'B', 'M', 7, 0);

new $DQ.Weapon('Hafted weapons', 'Hand axe', '1', 2, 8, 11, 40, 1, '8', 'B', 'RMC', 4, 15);
new $DQ.Weapon('Hafted weapons', 'Battle axe', '1-2', 5, 14, 14, 60, 4, '6', 'B', 'RM', 7, 20);
new $DQ.Weapon('Hafted weapons', 'Great axe', '2', 6, 19, 17, 65, 6, 'P', 'B', 'M', 7, 30);
new $DQ.Weapon('Hafted weapons', 'Giant axe', '1', 25, 29, 12, 65, 10, '6', 'B', 'RM', 7, 50);
new $DQ.Weapon('Hafted weapons', 'Crude club', '1', 4, 16, 10, 45, 2, '6', 'C', 'RM', 2, 3);
new $DQ.Weapon('Hafted weapons', 'War club', '1', 3, 14, 10, 50, 2, '7', 'C', 'RM', 5, 5);
new $DQ.Weapon('Hafted weapons', 'Giant club', '1', 10, 25, 9, 50, 8, '9', 'C', 'RM', 5, 10);
new $DQ.Weapon('Hafted weapons', 'Torch', '1', 3, 8, 12, 40, 1, 'P', 'C', 'M', '-', 1);
new $DQ.Weapon('Hafted weapons', 'Mace', '1', 5, 16, 9, 50, 4, '5', 'C', 'RM', 5, 15);
new $DQ.Weapon('Hafted weapons', 'Giant mace', '1', 25, 27, 10, 50, 7, '8', 'C', 'RM', 5, 40);
new $DQ.Weapon('Hafted weapons', 'War hammer', '1', 4, 15, 13, 45, 3, '6', 'C', 'RM', 5, 15);
new $DQ.Weapon('Hafted weapons', 'War pick', '1-2', 5, 17, 13, 45, 4, 'P', 'C', 'M', 5, 20);
new $DQ.Weapon('Hafted weapons', 'Flail', '1', 4, 14, 15, 50, 2, 'P', 'C', 'M', 5, 15);
new $DQ.Weapon('Hafted weapons', 'Morningstar', '1-2', 5, 18, 15, 60, 4, 'P', 'C', 'M', 5, 20);
new $DQ.Weapon('Hafted weapons', 'Mattock', '2', 6, 19, 14, 55, 6, 'P', 'C', 'M', 5, 18);
new $DQ.Weapon('Hafted weapons', 'Quarterstaff', '2', 3, 12, 16, 55, 2, 'P', 'C', 'M', 9, 3);
new $DQ.Weapon('Hafted weapons', 'Sap', '1', 1, 9, 11, 40, 1, 'P', 'C', 'MC', 3, 2);

new $DQ.Weapon('Thrown weapons', 'Throwing dart', '1', 3/16, 9, 15, 40, 0, '12', 'A', 'R', 10, 1);
new $DQ.Weapon('Thrown weapons', 'Boomerang', '1', 1, 11, 15, 40, 0, '20', 'C', 'R', 7, 2);
new $DQ.Weapon('Thrown weapons', 'Grenado', '1', 2, 9, 15, 40, '*', '15', '-', 'R', 4, 0);

new $DQ.Weapon('Pole weapons', 'Javelin', '1', 3, 12, 15, 45, 2, '12', 'A', 'RM', 10, 4);
new $DQ.Weapon('Pole weapons', 'Spear', '1-2', 5, 15, 14, 50, 3, '6', 'A', 'RM', 5, 10);
new $DQ.Weapon('Pole weapons', 'Giant spear', '1-2', 15, 22, 16, 55, 7, '12', 'A', 'RM', 5, 20);
new $DQ.Weapon('Pole weapons', 'Pike', '2', 8, 18, 16, 45, 5, 'P', 'A', 'M', 5, 15);
new $DQ.Weapon('Pole weapons', 'Lance', '1', 7, 16, 18, 45, 6, 'P', 'A', 'M', 5, 4);
new $DQ.Weapon('Pole weapons', 'Halberd', '2', 6, 16, 16, 55, 3, 'P', 'B', 'M', 5, 15);
new $DQ.Weapon('Pole weapons', 'Poleaxe', '2', 6, 18, 15, 55, 4, 'P', 'B', 'M', 5, 20);
new $DQ.Weapon('Pole weapons', 'Trident', '1-2', 5, 14, 16, 45, 2, '5', 'A', 'RM', 5, 8);
new $DQ.Weapon('Pole weapons', 'Glaive', '2', 7, 16, 18, 55, 5, 'P', 'B', 'M', 9, 15);
new $DQ.Weapon('Pole weapons', 'Giant glaive', '2', 14, 22, 18, 65, 9, 'P', 'B', 'M', 9, 30);

new $DQ.Weapon('Missile weapons', 'Sling', '2', 1, 7, 15, 40, 1, '60', 'C', 'R', 8, 1);
new $DQ.Weapon('Missile weapons', 'Self bow', '2', 2, 10, 15, 45, 0, '30', 'A', 'R', 8, 20);
new $DQ.Weapon('Missile weapons', 'Short bow', '2', 4, 14, 15, 45, 2, '60', 'A', 'R', 8, 20);
new $DQ.Weapon('Missile weapons', 'Long bow', '2', 6, 16, 15, 55, 4, '180', 'A', 'R', 8, 25);
new $DQ.Weapon('Missile weapons', 'Composite bow', '2', 8, 17, 15, 55, 4, '225', 'A', 'R', 8, 80);
new $DQ.Weapon('Missile weapons', 'Giant bow', '2', 14, 25, 17, 55, 7, '45', 'A', 'R', 8, 80);
new $DQ.Weapon('Missile weapons', 'Crossbow', '2', 7, 14, 14, 60, 3, '80', 'A', 'R', 5, 15);
new $DQ.Weapon('Missile weapons', 'Heavy crossbow', '2', 10, 20, 14, 60, 5, '90', 'A', 'R', 5, 20);
new $DQ.Weapon('Missile weapons', 'Spear thrower', '2', 4, 11, 14, 50, 2, '15', 'A', 'R', 10, 5);
new $DQ.Weapon('Missile weapons', 'Blowgun', '2', 1, 7, 16, 30, '*', '7', '-', 'R', 10, 3);

new $DQ.Weapon('Entangling weapons', 'Net', '1', 2, 11, 16, 30, -5, '5', '-', 'RM', 4, 4);
new $DQ.Weapon('Entangling weapons', 'Bola', '1', 2, 11, 15, 35, -3, '10', '-', 'R', 6, 5);
new $DQ.Weapon('Entangling weapons', 'Whip', '1', 3, 10, 16, 40, -3, 'P', '-', 'M', 10, 6);
new $DQ.Weapon('Entangling weapons', 'Lasso', '2', 4, 12, 18, 30, -4, '6', '-', 'RM', 6, 5);

new $DQ.Weapon('Special weapons', 'Rock', '1', 0, 5, 10, 30, -1, '8', 'C', 'RMC', 6, 0);
new $DQ.Weapon('Special weapons', 'Cestus', '1', 3, 12, 14, 35, -1, 'P', 'C', 'MC', 9, 15);
new $DQ.Weapon('Special weapons', 'Garotte', '2', 1, 12, 15, 30, 3, 'P', '-', 'C', 3, 3);
new $DQ.Weapon('Special weapons', 'Shield', '1', 0, 10, 12, 40, -2, 'P', 'C', 'M', 4, 0);

new $DQ.Weapon('Unarmed', 'Unarmed', '1', 0, 0, 0, 'AG*2', -4, 'P', 'C', 'MC', 10, 0);

new $DQ.Accessory('Shot', 20, 4, 1, "Use in sling");
new $DQ.Accessory('Dart', 20, 2, 5, "Use in blowgun");
new $DQ.Accessory('Arrows', 20, 2, 10, "Use in draw bows");
new $DQ.Accessory('Quarrels', 20, 7, 15, "Use in crossbows");
new $DQ.Accessory('Cranequin', 1, 3, 10, "Use to cock crossbows; requires a PS of 11 and two free hands");

new $DQ.Weapons('Siege weapons');
new $DQ.Weapons('Oriental weapons');/*
new $DQ.Weapon('Oriental weapons', 'Sai', '', , , , , , '', '', '', , );
new $DQ.Weapon('Oriental weapons', 'Wakizashi', '', , , , , , '', '', '', , );
new $DQ.Weapon('Oriental weapons', 'O-Dachi', '', , , , , , '', '', '', , );
new $DQ.Weapon('Oriental weapons', 'Ninjato', '', , , , , , '', '', '', , );
new $DQ.Weapon('Oriental weapons', 'Manriki kusari', '', , , , , , '', '', '', , );
new $DQ.Weapon('Oriental weapons', 'Nunchaku', '', , , , , , '', '', '', , );
 */

new $DQ.WeaponCategory('Shortswords', ['Dagger', 'Main-gauche', 'Shortsword', 'Sai']);
new $DQ.WeaponCategory('Single Edged', ['Tulwar', 'Falchion', 'Scimitar', 'Sabre']);
new $DQ.WeaponCategory('Double Edged', ['Hand & a half', 'Two-handed sword', 'Claymore', 'Broadsword']);
new $DQ.WeaponCategory('A Class Swords', ['Rapier', 'Estoc']);
new $DQ.WeaponCategory('Oriental Swords', ['Katana', 'Wakizashi', 'O-Dachi', 'Ninjato']);
new $DQ.WeaponCategory('Axes', ['Hand axe', 'Battle axe', 'Great axe']);
new $DQ.WeaponCategory('Blunt', ['War club', 'Mace', 'War hammer', 'War pick', 'Mattock']);
new $DQ.WeaponCategory('Entangling / Chain', ['Flail', 'Morningstar', 'Bola', 'Net', 'Manriki kusari', 'Nunchaku']);
new $DQ.WeaponCategory('A Class Pole', ['Javelin', 'Spear', 'Pike', 'Lance', 'Trident']);
new $DQ.WeaponCategory('B Class Pole', ['Halberd', 'Poleaxe', 'Glaive', 'Quarterstaff']);
new $DQ.WeaponCategory('Unarmed', ['Unarmed', 'Cestus']);
new $DQ.WeaponCategory('Shield', ['Tower', 'Kite', 'Large round', 'Small round', 'Buckler']);


new $DQ.Script('b', "Bedouin script (human, flowing, cursive).");
new $DQ.Script('d', "Drakonic.");
new $DQ.Script('e', "Elvish script.");
new $DQ.Script('i', "Island (used near the land-locked ocean).");
new $DQ.Script('k', "Kingdom (used near the Azurian Empire).");
new $DQ.Script('n', "Nagan (elaborate, but versatile).");
new $DQ.Script('o', "Ogham (human, rune-like).");
new $DQ.Script('r', "Dwarvish runes.");
new $DQ.Script('w', "Westron (usual Western human alphabet; also adopted by many newly literate societies).");
new $DQ.Script('_', "Pictographic or Ideographic script. Unique to each language.");

new $DQ.Language('Common', 'Common', 9, 'ikw');

new $DQ.Language('Western-Human', 'Alman', 9, 'ow');
new $DQ.Language('Western-Human', 'Brett', 9, 'oe');
new $DQ.Language('Western-Human', 'Destinian', 8, 'w');
new $DQ.Language('Western-Human', 'Ebolan', 9, 'w');
new $DQ.Language('Western-Human', 'Folksprach', 9, 'w');
new $DQ.Language('Western-Human', 'Lalange', 10, 'w');
new $DQ.Language('Western-Human', 'Raniterran', 9, 'e');
new $DQ.Language('Western-Human', 'Reichspiel', 9, 'w');

new $DQ.Language('Central-Human', 'Arabiq', 9, 'b');
new $DQ.Language('Central-Human', 'Draknbrger', 9, 'w');
new $DQ.Language('Central-Human', 'Ellenic', 10, 'i');
new $DQ.Language('Central-Human', 'Kravonian', 9, '_');
new $DQ.Language('Central-Human', 'Panjari', 9, '_');
new $DQ.Language('Central-Human', 'Pasifikan', 8);
new $DQ.Language('Central-Human', 'Sanddweller', 9, 'e');
new $DQ.Language('Central-Human', 'Sea-of-Grass', 9);
new $DQ.Language('Central-Human', 'Themiskryan', 9, 'i_');

new $DQ.Language('Eastern-Human', 'Five-Sisters-Courtly', 10, '_');
new $DQ.Language('Eastern-Human', 'Five-Sisters-Trader', 9, '_');
new $DQ.Language('Eastern-Human', 'Lunar-Empire', 9, '_');

new $DQ.Language('Merfolk', 'Merfolk', 6, '_');

new $DQ.Language('Eldar', 'Drow', 9, 'e');
new $DQ.Language('Eldar', 'Eldaran', 10, 'd');
new $DQ.Language('Eldar', 'Elvish', 10, 'e');
new $DQ.Language('Eldar', 'Erehleine', 10, '_');
new $DQ.Language('Eldar', 'Frog-elf', 8, '_');
new $DQ.Language('Eldar', 'Purple-Drow', 9, 'e');
new $DQ.Language('Eldar', 'Purple-Old-Drow', 9, 'e');
new $DQ.Language('Eldar', 'Quenchan', 10, '_');
new $DQ.Language('Eldar', 'Terranovan-Drow', 9, '_');

new $DQ.Language('Faerie', 'Brownie', 7);
new $DQ.Language('Faerie', 'Centaur', 9, 'i');
new $DQ.Language('Faerie', 'Dryad', 6);
new $DQ.Language('Faerie', 'Fossegrim', 6);
new $DQ.Language('Faerie', 'Leprechaun', 6);
new $DQ.Language('Faerie', 'Nixie', 6);
new $DQ.Language('Faerie', 'Nymph', 7);
new $DQ.Language('Faerie', 'Pixie', 7);
new $DQ.Language('Faerie', 'Satyr', 7);
new $DQ.Language('Faerie', 'Sylphine', 6);

new $DQ.Language('False-Fey', 'Doppelganger', 8);
new $DQ.Language('False-Fey', 'Gargoyle', 6);
new $DQ.Language('False-Fey', 'Harpy', 7);
new $DQ.Language('False-Fey', 'Medusa', 6);

new $DQ.Language('Earth-Dweller', 'Gnomish', 9, 'r');
new $DQ.Language('Earth-Dweller', 'Goblin', 8, 'w');
new $DQ.Language('Earth-Dweller', 'Halfling', 9, 'r');
new $DQ.Language('Earth-Dweller', 'Hobgoblin', 8, 'w');
new $DQ.Language('Earth-Dweller', 'Khuzdul', 9, 'r');
new $DQ.Language('Earth-Dweller', 'Kobold', 8);
new $DQ.Language('Earth-Dweller', 'Dwarvish', 9, 'r');
new $DQ.Language('Earth-Dweller', 'Ogre', 6, 'w');
new $DQ.Language('Earth-Dweller', 'Orcish', 9, 'w');
new $DQ.Language('Earth-Dweller', 'Sasquatch', 3);
new $DQ.Language('Earth-Dweller', 'Troll', 4);
new $DQ.Language('Earth-Dweller', 'Yeti', 3);

new $DQ.Language('Giant', 'Cloud-Giant', 9, 'w');
new $DQ.Language('Giant', 'Fire-Giant', 9, 'w');
new $DQ.Language('Giant', 'Frost-Giant', 9, 'w');
new $DQ.Language('Giant', 'Hill-Giant', 8, 'w');
new $DQ.Language('Giant', 'Stone-Giant', 8, 'w');
new $DQ.Language('Giant', 'Storm-Giant', 9, 'w');
new $DQ.Language('Giant', 'Titan', 10, 'i');

new $DQ.Language('Dragon', 'Culhuan', 10, '_');
new $DQ.Language('Dragon', 'Draconic', 10, 'd');
new $DQ.Language('Dragon', 'Nagan', 10, 'n');
new $DQ.Language('Dragon', 'Old-Draconic', 10, 'd');
new $DQ.Language('Dragon', 'Saurime', 7, 'd');
new $DQ.Language('Dragon', 'Wyvern', 4);

new $DQ.Language('Signing', 'Silent-Tongue', 6);
new $DQ.Language('Signing', 'Bandito', 5);

new $DQ.LangGroup('Archaic', ['Eldaran', 'Purple-Old-Drow', 'Quenchan']);
new $DQ.LangGroup('Draconic', ['Draconic', 'Nagan', 'Old-Draconic', 'Wyvern']);
new $DQ.LangGroup('Dravidic', ['Drow', 'Raniterran', 'Sanddweller']);
new $DQ.LangGroup('Dwarvic', ['Dwarvish', 'Gnomish', 'Halfling', 'Khuzdul']);
new $DQ.LangGroup('Dwarvidic', ['Alman', 'Brett', 'Ebolan', 'Folksprach', 'Reichspiel']);
new $DQ.LangGroup('Ellenic', ['Centaur', 'Ellenic']);
new $DQ.LangGroup('Elvic', ['Drow', 'Eldaran', 'Elvish', 'Erehleine', 'Purple-Drow', 'Terranovan-Drow']);
new $DQ.LangGroup('Elvidic', ['Elvish', 'Lalange']);
new $DQ.LangGroup('Gnomic', ['Fossegrim', 'Gnomish']);
new $DQ.LangGroup('Herpetic', ['Culhuan', 'Saurime']);
new $DQ.LangGroup('Littoral', ['Destinian', 'Ebolan']);
new $DQ.LangGroup('Low Gigantic', ['Hill-Giant', 'Ogre', 'Stone-Giant']);
new $DQ.LangGroup('Nomadic', ['Draknbrger', 'Kravonian', 'Sea-of-Grass']);
new $DQ.LangGroup('Orcal', ['Goblin', 'Hobgoblin', 'Kobold', 'Ogre', 'Orcish']);
new $DQ.LangGroup('Panic', ['Centaur', 'Dryad', 'Nymph', 'Satyr', 'Sylphine']);
new $DQ.LangGroup('Perfidic', ['Fossegrim', 'Nixie', 'Pixie']);
new $DQ.LangGroup('Protonic', ['Eldaran', 'Old-Draconic', 'Draconic']);
new $DQ.LangGroup('Purpuric', ['Purple-Drow', 'Purple-Old-Drow']);
new $DQ.LangGroup('Rustic', ['Brownie', 'Leprechaun']);
new $DQ.LangGroup('Titanic', ['Cloud-Giant', 'Storm-Giant', 'Titan']);


new $DQ.Skills('Adventuring skills'). // v1.0
  EP = [0,125,250,375,500,625,750,875,1000,1125,1250];
new $DQ.Skill('Adventuring skills', 'Climbing'). // v
  addAbility({"name": "Climbing Claws", "_": "+15 BC if appropriate"}).
  addAbility({"name": "Rope", "_": "Single roll rather than every 10'."}).
  addChance({"base": "MD x 4", "inc": 8, "_": "- height / 10"});
new $DQ.Skill('Adventuring skills', 'Horsemanship'). // v
  addAbility({"rank": "3", "_": "May use two-handed weapons"}).
  addAbility({"rank": "5", "_": "May fire a missile weapon while moving or cast a spell"}).
  addAbility({"rank": "7", "_": "May use two one-handed weapons at once"}).
  addChance({"base": "(AG + WP) / 2", "inc": 8});
new $DQ.Skill('Adventuring skills', 'Flying'). // v
  addAbility({"rank": "3", "_": "May use two-handed weapons"}).
  addAbility({"rank": "5", "_": "May fire a missle weapon while moving or cast a spell"}).
  addAbility({"rank": "7", "_": "May use two one-handed weapons at once"}).
  addChance({"base": "AG x 3", "inc": 10});
new $DQ.Skill('Adventuring skills', 'Stealth'). // v
  addChance({"_": " base: AG x 3, inc: 5 (plus 2 per Assasin, Spy and Thief Ranks)"}).
  EP = [0,500,1000,1500,2000,2500,3000,3500,4000,4500,5000];
new $DQ.Skill('Adventuring skills', 'Swimming'). // v
  addAbility({"name": "Breath holding", "_": " base: curr EN / 3, per: 2 pulses. Doubled if Pass Action is used to prepare."}).
  addAbility({"name": "Swimming TMR", "_": "(Land TMR + Rank) / 3."}).
  addChance({"base": "PS + AG + EN", "inc": 8});

new $DQ.Skills('Artisan skills'). // v2.0
  addAbility({"name": "Applicable base chance", "_": " Rank applied."}).
  addAbility({"name": "Applicable characteristic", "_": " full: 5 applied."}).
  addAbility({"name": "Difficulty modifier", "_": " dec: 0.5, full: 5 applied."}).
  addAbility({"name": "Yield", "_": " inc: 5 %applied."}).
  addAbility({"name": "Merchant equivalent", "_": "Half Rank when dealing in appropriate equipment and materials."}).
  addAbility({"name": "Knowledge skill", "_": "Applicable to specific skill"}).
  addAbility({"name": "Supervision", "_": "Supervise up to Rank subordinates or work-gangs."}).
  EP = [250,100,150,350,700,950,1500,1850,2500,3200,4000];
new $DQ.Skill('Artisan skills', 'Apiarist');
new $DQ.Skill('Artisan skills', 'Artist, Painter');
new $DQ.Skill('Artisan skills', 'Artist, Sculptor');
new $DQ.Skill('Artisan skills', 'Barber / coiffeur');
new $DQ.Skill('Artisan skills', 'Basketmaker');
new $DQ.Skill('Artisan skills', 'Blacksmith');
new $DQ.Skill('Artisan skills', 'Brewer');
new $DQ.Skill('Artisan skills', 'Brickmaker/bricklayer');
new $DQ.Skill('Artisan skills', 'Butcher');
new $DQ.Skill('Artisan skills', 'Carpenter / cabinetmaker');
new $DQ.Skill('Artisan skills', 'Calligrapher / illuminator');
new $DQ.Skill('Artisan skills', 'Cartographer / chartmaker');
new $DQ.Skill('Artisan skills', 'Cartwright / wheelwright');
new $DQ.Skill('Artisan skills', 'Carver / bone / etching / wood');
new $DQ.Skill('Artisan skills', 'Caster / pewterer / tinsmith');
new $DQ.Skill('Artisan skills', 'Chandler / lamp maker');
new $DQ.Skill('Artisan skills', 'Charcoaler');
new $DQ.Skill('Artisan skills', 'Cheesemaker');
new $DQ.Skill('Artisan skills', 'Clothmaker / fuller / weaver');
new $DQ.Skill('Artisan skills', 'Cobbler / cordwainer');
new $DQ.Skill('Artisan skills', 'Cook / baker');
new $DQ.Skill('Artisan skills', 'Cooper');
new $DQ.Skill('Artisan skills', 'Dyer / inkmaker');
new $DQ.Skill('Artisan skills', 'Farmer/gardener');
new $DQ.Skill('Artisan skills', 'Fisher');
new $DQ.Skill('Artisan skills', 'Glass-blower');
new $DQ.Skill('Artisan skills', 'Gold / silversmith');
new $DQ.Skill('Artisan skills', 'Hatter / milliner');
new $DQ.Skill('Artisan skills', 'Hunter / trapper');
new $DQ.Skill('Artisan skills', 'Husbander');
new $DQ.Skill('Artisan skills', 'Lapidary');
new $DQ.Skill('Artisan skills', 'Leatherworker');
new $DQ.Skill('Artisan skills', 'Locksmith');
new $DQ.Skill('Artisan skills', 'Lumberjack');
new $DQ.Skill('Artisan skills', 'Mason');
new $DQ.Skill('Artisan skills', 'Miller');
new $DQ.Skill('Artisan skills', 'Miner');
new $DQ.Skill('Artisan skills', 'Musical instrument maker');
new $DQ.Skill('Artisan skills', 'Papermaker');
new $DQ.Skill('Artisan skills', 'Perfumer');
new $DQ.Skill('Artisan skills', 'Plasterer');
new $DQ.Skill('Artisan skills', 'Potter');
new $DQ.Skill('Artisan skills', 'Printer / bookbinder');
new $DQ.Skill('Artisan skills', 'Roofer / thatcher');
new $DQ.Skill('Artisan skills', 'Rope / netmaker');
new $DQ.Skill('Artisan skills', 'Rug / carpetmaker');
new $DQ.Skill('Artisan skills', 'Sail/tentmaker');
new $DQ.Skill('Artisan skills', 'Sailor');
new $DQ.Skill('Artisan skills', 'Salter');
new $DQ.Skill('Artisan skills', 'Shipwright');
new $DQ.Skill('Artisan skills', 'Tailor/seamstress');
new $DQ.Skill('Artisan skills', 'Tanner/hideworker/furrier');
new $DQ.Skill('Artisan skills', 'Tattooist');
new $DQ.Skill('Artisan skills', 'Taxidermist');
new $DQ.Skill('Artisan skills', 'Tinker');
new $DQ.Skill('Artisan skills', 'Toymaker');
new $DQ.Skill('Artisan skills', 'Undertaker / embalmer');
new $DQ.Skill('Artisan skills', 'Vintner');
new $DQ.Skill('Artisan skills', 'Wig maker');

new $DQ.Skills('Knowledge skills'). // v
  addChance({"name": "Common", "_": "WP + 70"}).
  addChance({"name": "Uncommon", "_": "WP + 40"}).
  addChance({"name": "Rare or Obscure", "_": "WP + 10"}).
  EP = [500];

new $DQ.Skills('Language skills'). // v2.0
  addAbility({"name": "Knowledge skill", "_": "Applicable to specific language"}).
  addAbility({"name": "Literacy", "_": "If not orthographic (*) script, 1000 ep and 4 wks for first language and then 500 ep and 2 wks for other languages."}).
  EP = [200,75,125,300,550,850,1350,1700,2250,2900,3500];

new $DQ.Skills('Major skills'). // v
  addAbility({"name": "Knowledge skill", "_": "Applicable to specific skill"}).
  addAbility({"name": "Supervision", "_": "Supervise up to Rank subordinates or work-gangs. Work pro-rata proportion of time."}).
  addChance({"name": "Default and Maximum", "base": "90"});
new $DQ.Skill('Major skills', 'Alchemist'). // v1.0
  addAbility({"name": "Analyse liquid", "_": "If not common takes[object Object]minutes with correct equipment."}).
  addAbility({"name": "Standard chemicals", "rank": "3"}).
  addAbility({"name": "Medicines and antidotes", "chooseRank": "5, 7, 9"}).
  addAbility({"name": "Poisons", "chooseRank": "5, 7, 9"}).
  addAbility({"name": "Potions", "chooseRank": "5, 7, 9"}).
  addChance({"name": "Analyse liquid", "base": "PC", "inc": "8"}).
  EP = [800,350,1200,2650,4350,6500,8650,11100,12750,14500,17000];
new $DQ.Skill('Major skills', 'Armourer'). // v1.1
  addAbility({"name": "Armour Groups", "rank0": "Cloth", "chooseRank": "2, 4, 6, 8, 10, +", "_": "Must choose a group they have the requirements for."}).
  addAbility({"name": "Weight Factor", "_": "[object Object]applied. Not lighter than 1 and not Cloth, Leather or Mithril groups."}).
  addAbility({"name": "Protection", "_": "[object Object]applied. Not Cloth or Leather groups except total of +1 for Hard Leather."}).
  addAbility({"name": "Agility Modifier", "_": "[object Object]applied. Not below 0."}).
  addAbility({"name": "Stealth Modifier", "_": {"max": "5"}}).
  addAbility({"name": "Repair or Modify", "_": "Must have at least the same Rank as the Armour was made at and the appropriate group."}).
  addAbility({"name": "Merchant equivalent", "_": "Full Rank for groups known and Half Rank for all other groups."}).
  EP = [600,300,800,1600,3000,5500,6200,7300,8800,10800,14000,10000];
new $DQ.Skill('Major skills', 'Assassin'). // v1.0
  addAbility({"name": "Improved Grevious", "_": "With surprise,[object Object]. From rear,[object Object]. From front,[object Object]. Only in Melee or Close."}).
  addAbility({"name": "Torture", "_": "Takes (Victim's WP div Rank) hours per attempt. (Victim's EN div 5 ) attempts before death."}).
  addAbility({"name": "Improved Memory", "_": "Recall details of place or routine that has been surveyed."}).
  addAbility({"name": "Improved Damage", "_": "[object Object]Damage for Melee strikes from a rear."}).
  addAbility({"name": "Automatic Knockout", "_": "When using a sap from surprise or rear and against an unhelmeted opponent, a succesful strike will knockout if attempted."}).
  addAbility({"name": "Improved Knockout", "_": "[object Object]to the knockout chance for a Sap."}).
  addAbility({"name": "Improved Stealth", "_": {"inc": "2"}}).
  addChance({"name": "Torture", "inc": "10", "_": "- 4 x Vicitim's WP"}).
  addChance({"name": "Improved Memory", "base": "PC x 5", "inc": "2"}).
  EP = [600,250,750,1700,2900,4200,5750,7550,9500,11700,14100];
new $DQ.Skill('Major skills', 'Astrologer'). // v1.0
  addAbility({"name": "Number of Beings", "_": "Can only affect base: 5, inc: 10 beings directly."}).
  addAbility({"name": "General Prediction", "_": "About a particular venture or being, use a divinatory technique (10 FT). May attempt to change (10 FT) and if successfult do a second divination."}).
  addAbility({"name": "Specific Question", "_": "Rank questions per Month (17 FT)."}).
  addAbility({"name": "Determine Aspect", "_": "After base: 60, dec: 1 minutes observation, knows a beings aspect (5 FT)."}).
  addChance({"name": "Specific Question", "base": "PC x 4", "inc": "6"}).
  EP = [400,150,500,1150,2050,3100,4400,5900,7500,9400,11500];
new $DQ.Skill('Major skills', 'Beast Master'). // v1.0
  addAbility({"name": "Animal Type", "chooseRank": "0, 5, 10", "_": "Choose a type of animal/monster to be trained. Additional types may be chosen after Rank 10 for 2,500 Ep per type."}).
  addAbility({"name": "Train Animal", "_": "Takes (12 - Rank) months modifed by 'Train time'. Until Rank 5 only for self."}).
  addAbility({"name": "Domesticate Animal", "_": "Takes (12 - Rank) weeks modifed by 'Train time'."}).
  addAbility({"name": "Number of Animals", "_": "Rank animals of the same type may be Trained and/or Domesticated at once."}).
  addChance({"name": "Trained Loyalty Check", "base": "2 x Trainer WP", "inc": "4"}).
  addChance({"name": "Domesticated Loyalty Check", "base": "Master WP"}).
  EP = [600,250,750,1650,2800,4300,5600,7350,9300,11400,13750];
new $DQ.Skill('Major skills', 'Courtier'). // v2.0
  addAbility({"name": "Abilities", "Abilities": {
  	"Bureaucracy": {"name": "Bureaucracy"}, 
  	"Carousing": {"name": "Carousing"}, 
  	"Dress sense": {"name": "Dress sense"}, 
  	"Entertaining": {"name": "Entertaining"}, 
  	"Etiquette": {"name": "Etiquette", "_": "Etiquette must be learnt separately for different cultures."}, 
  	"Formal dance": {"name": "Formal dance"}, 
  	"Gaming": {"name": "Gaming"}, 
  	"Hunting & Hawking": {"name": "Hunting & Hawking"}, 
  	"Intimidation": {"name": "Intimidation"}, 
  	"Oratory": {"name": "Oratory"}, 
  	"Play an instrument": {"name": "Play an instrument", "_": "this ability may be taken several times with different instruments. Can usually play similar instruments at (Rank / 2)."}, 
  	"Poetry": {"name": "Poetry"}, 
  	"Seduction": {"name": "Seduction"}, 
  	"Simulate emotions": {"name": "Simulate emotions"}
  	}, "_": "Choose base: 2 abilities. Abilities may be chosen again to increase effective Rank with that ability."}).
  addChance({"name": "General Chance", "base": "3 x Stat", "inc": "5"}).
  EP = [250,100,200,500,950,1450,2050,2800,3600,6300,8000];
new $DQ.Skill('Major skills', 'Healer'). // v1.12
  addAbility({"name": "Empathy", "chooseRank": "0", "_": "Melee Strike Chance dec: 1, per: 5 , Close Strike Chance dec: 1, per: 2 . 5 seconds."}).
  addAbility({"name": "Non-tactile empathy", "chooseRank": "0", "_": "Melee Strike Chance dec: 1, per: 2 , Close Strike Chance dec: 1 . inc: 2 feet. 5 seconds (1 FT)."}).
  addAbility({"name": "Cure Infection, Disease, Headaches, Fever", "rank": "1", "_": " base: 30, dec: 2 minutes (1 FT)."}).
  addAbility({"name": "Soothe Pain", "rank": "2", "_": " base: 60, dec: 5 seconds (2 FT). Lasts sq: 2 hours."}).
  addAbility({"name": "Prolong Life", "rank": "2", "_": " base: 60, dec: 5 seconds (2 FT). Add D x base: Patient EN days to life. Max of three times natural life. Reduces Resurrection base chance."}).
  addAbility({"name": "Heal Endurance", "rank": "3", "_": " base: 11, dec: 1 minutes (3 FT). Cure base: D - 5 EN damage."}).
  addAbility({"name": "Transfer Fatigue", "rank": "3", "_": " base: 11, dec: 1 minutes (3 FT). Additional FT expended is transferred to the Patient."}).
  addAbility({"name": "Neutralise Poison", "rank": "4", "_": "5 seconds (4 FT)."}).
  addAbility({"name": "Graft Skin", "rank": "4", "_": " base: 30, dec: 2 minutes (4 FT)."}).
  addAbility({"name": "Repair Muscle", "rank": "5", "_": " base: 50, dec: 3 hours (5 FT). Half must exist."}).
  addAbility({"name": "Preserve Dead", "rank": "5", "_": " base: 60, dec: 5 minutes (5 FT). Suspend resurrection time-limit for Rank days."}).
  addAbility({"name": "Repair Bones", "rank": "6", "_": " base: 50, dec: 3 hours (6 FT). Half must exist."}).
  addAbility({"name": "Repair Tissues and Organs", "rank": "7", "_": " base: 50, dec: 3 hours(7 FT). Half must exist."}).
  addAbility({"name": "Resurrect the Dead", "rank": "8", "_": " base: 60, dec: 5 minutes (8 FT). Torso sized piece required. May not have been dead for more than inc: 10 hours."}).
  addAbility({"name": "Regenerate Limbs and Joints", "rank": "9", "_": "1 week per Body part (9 FT)."}).
  addAbility({"name": "Regenerate Trunk, Head and Vital Organs", "rank": "10", "_": "1 week per Body part or Organ (10 FT)."}).
  addChance({"name": "Non-tactile empathy", "base": "PC", "inc": "10"}).
  addChance({"name": "Cure Infection, Disease, Headaches, Fever", "base": "Patient EN", "inc": "15"}).
  addChance({"name": "Graft Skin", "base": "Patient EN", "inc": "15"}).
  addChance({"name": "Neutralise Poison", "base": "90", "_": "if Natural or Alchemist Rank equal or less than Healer Rank else[object Object]- 5 x Alchemist Rank"}).
  addChance({"name": "Resurrect the Dead", "base": "Patient EN", "inc": "8", "min": "Rank"}).
  EP = [1000,400,1600,3500,5800,8400,11400,14700,18500,22500,26750];
new $DQ.Skill('Major skills', 'Herbalist'). // v1.0
  addAbility({"name": "Locate and Identify Herbs and Spices", "rank": "0"}).
  addChance({"name": "Locate Fresh Herbs for Ability", "base": "PC x 2", "inc": "15", "_": "- 10 / Ability Rank."}).
  EP = [800,350,1200,2650,4350,6500,8650,11100,12750,14500,17000];
new $DQ.Skill('Major skills', 'Mechanician'). // v
  EP = [600,250,650,1500,2600,3900,5300,7000,8850,10900,13000];
new $DQ.Skill('Major skills', 'Merchant'). // v
  EP = [300,125,300,850,1400,2200,3400,4200,5300,6800,9500];
new $DQ.Skill('Major skills', 'Military Scientist'). // v
  EP = [300,125,350,950,1500,2350,3100,4150,5400,6750,10000];
new $DQ.Skill('Major skills', 'Navigator'). // v
  EP = [400,150,400,900,1550,2400,3350,4450,5750,7100,10500];
new $DQ.Skill('Major skills', 'Philosopher'). // v
  EP = [1400,700,1400,2100,2800,3500,4200,4900,5600,6300,7000];
new $DQ.Skill('Major skills', 'Ranger'). // v
  EP = [600,250,800,1650,2750,4100,5650,7350,9300,11400,13250];
new $DQ.Skill('Major skills', 'Spy'). // v
  EP = [500,200,600,1400,2400,3600,5000,6600,8400,10400,12600];
new $DQ.Skill('Major skills', 'Thief'). // v
  addAbility({"name": "Detect Secret or Hidden Apertures", "_": "Within base: 5 feet"}).
  addAbility({"name": "Detect Traps", "_": "10 seconds"}).
  addAbility({"name": "Remove Trap", "_": " base: 12, dec: 1 minutes"}).
  addAbility({"name": "Pick Lock", "_": " base: 120, dec: 10 seconds"}).
  addAbility({"name": "Open Safe", "_": " base: 15, dec: 1 minutes"}).
  addAbility({"name": "Pick Pockets"}).
  addAbility({"name": "Photographic Memory", "_": "Observe for base: 240, dec: 20 seconds. Last up to base: 1 days"}).
  addAbility({"name": "Improved Stealth", "_": " Rank "}).
  addAbility({"name": "Climbing"}).
  addChance({"name": "Detect Secret or Hidden Apertures", "base": "PC x 2", "inc": "5"}).
  addChance({"name": "Detect Traps", "base": "PC", "inc": "11"}).
  addChance({"name": "Remove Trap", "base": "MD x 2", "inc": "11", "_": "- 5 / Trap Rank"}).
  addChance({"name": "Pick Lock", "base": "MD x 2", "inc": "6", "_": "- 6 / Lock Rank"}).
  addChance({"name": "Open Safe", "base": "MD x 2", "inc": "5", "_": "- 7 / Safe Rank"}).
  addChance({"name": "Pick Pockets", "base": "MD x 3", "inc": "6"}).
  addChance({"name": "Photographic Memory", "base": "PC", "inc": "10"}).
  addChance({"name": "Climbing", "base": "MD x 4", "inc": "10", "_": "- (Structure Height in feet / 10)"}).
  EP = [750,300,1050,2350,4000,5750,7900,10250,12900,14850,16000];
new $DQ.Skill('Major skills', 'Troubadour'). // v
  addAbility({"name": "Abilities", "Abilities": {
  	"Acrobatics": {"name": "Acrobatics"}, 
  	"Acting": {"name": "Acting"}, 
  	"Bureaucracy": {"name": "Bureaucracy"}, 
  	"Bardic voice": {"name": "Bardic voice", "_": "Enthral up to base: 4, inc: 6 beings, with base: 15, dec: 1 minutes being required to work their skill. May repeat to double targets until fail or (Rank / 2) repeats (4 FT) Note: A troubadour may not specialise in Bardic Voice."}, 
  	"Comedy": {"name": "Comedy"}, 
  	"Dance": {"name": "Dance"}, 
  	"Fire eating": {"name": "Fire eating"}, 
  	"Juggling": {"name": "Juggling", "_": "up to base: 1 items, of equal weight and size. If different size and/or weight, each difference counts as another item juggled."}, 
  	"Make up": {"name": "Make up"}, 
  	"Mime": {"name": "Mime"}, 
  	"Mimicry": {"name": "Mimicry"}, 
  	"Patter": {"name": "Patter"}, 
  	"Play an instrument": {"name": "Play an instrument", "_": "This ability may be taken several times with different instruments. A singer is one who has play instrument (voice). A troubadour can usually play similar instruments to the ones they have chosen at (Rank / 2)."}, 
  	"Poetry": {"name": "Poetry"}, 
  	"Prestidigitation": {"name": "Prestidigitation", "_": "This ability also gives a bonus to the casting of all Minor Magics of base: 2, inc: 2 ."}, 
  	"Production": {"name": "Production"}, 
  	"Puppetry": {"name": "Puppetry"}, 
  	"Stilt walking": {"name": "Stilt walking", "_": "Stilts of up to base: 50, inc: 20 % of the troubadour's height."}, 
  	"Storytelling": {"name": "Storytelling"}, 
  	"Sword swallowing": {"name": "Sword swallowing"}, 
  	"Tightrope walking": {"name": "Tightrope walking"}, 
  	"Ventriloquism": {"name": "Ventriloquism", "_": "up to (Rank / 2) feet away."}
  	}, "_": "Choose base: 3 abilities. Abilities may be chosen again to increase effective Rank with that ability."}).
  addChance({"name": "General Chance", "base": "3 x Stat", "inc": "5"}).
  addChance({"name": "Bardic Voice", "base": "50", "inc": "5"}).
  EP = [250,100,200,500,1050,1450,2100,2800,3900,4600,7000];
new $DQ.Skill('Major skills', 'Warrior'). // v
  addAbility({"name": "Defence", "_": "Increased by lesser of base: 2, inc: 4 of best weapon in Category or base: 2, inc: 2 "}).
  addAbility({"name": "Initiative", "_": " Rank "}).
  addAbility({"name": "Familiar weapons", "_": "Can wield other weapons in Category at effective Rank of half of lesser of best weapon Rank or Warrior Rank"}).
  addAbility({"name": "Strike Chance", "_": "Increased by base: 1 "}).
  addAbility({"name": "Damage", "_": {"full": "5"}}).
  addAbility({"name": "Parry", "_": {"full": "4"}}).
  addAbility({"name": "Weapon Training", "_": "Main train weapons without trainer. +10% ep cost if have higher weapon rank in same Caetgory, +25% ep cost otherwise"}).
  addAbility({"name": "Merchant equivalent", "_": "Full Rank for weapons known and Half Rank for other weapons in known Categories"}).
  EP = [600,250,750,1700,2900,4200,5750,7550,9500,11700,14100];
new $DQ.Skill('Major skills', 'Weaponsmith'). // v
  addAbility({"name": "Weapon Groups", "chooseRank": "0, 2, 4, 6, 8, 10, +"}).
  addAbility({"name": "Base Chance", "_": " Rank applied"}).
  addAbility({"name": "Damage", "_": " per: 5 applied"}).
  addAbility({"name": "Merchant equivalent", "_": "Full Rank for groups known and Half Rank for all other groups."}).
  EP = [600,300,800,1600,3000,5500,6200,7300,8800,10800,14000,10000];


new $DQ.Skill('Weapon skills', 'Dagger').EP = [25,25,50,100,200,400,700,1500,3000,4000];
new $DQ.Skill('Weapon skills', 'Main-gauche').EP = [50,50,100,200,400,1100,1500,3000,3000,3000,4000];
new $DQ.Skill('Weapon skills', 'Shortsword').EP = [100,100,200,400,700,1500,3000];
new $DQ.Skill('Weapon skills', 'Falchion').EP = [25,25,50,100,200,400,700,1500,3000];
new $DQ.Skill('Weapon skills', 'Scimitar').EP = [100,100,200,400,700,1500,3000,3000,3000];
new $DQ.Skill('Weapon skills', 'Tulwar').EP = [100,100,200,400,700,1500,3000,3000,3000];
new $DQ.Skill('Weapon skills', 'Rapier').EP = [200,200,200,200,200,500,500,2000,4000,4000,3000];
new $DQ.Skill('Weapon skills', 'Sabre').EP = [150,150,200,500,1000,2000,2000,2000];
new $DQ.Skill('Weapon skills', 'Broadsword').EP = [50,50,100,200,400,700,1500];
new $DQ.Skill('Weapon skills', 'Estoc').EP = [75,75,150,200,500,1000,2000,4000,4000,3000];
new $DQ.Skill('Weapon skills', 'Hand & a half').EP = [100,100,200,400,500,900,1700,2000];
new $DQ.Skill('Weapon skills', 'Claymore').EP = [50,50,100,200,400,700,1500,1800];
new $DQ.Skill('Weapon skills', 'Two-handed sword').EP = [50,50,100,200,400,700];
new $DQ.Skill('Weapon skills', 'Katana');
new $DQ.Skill('Weapon skills', 'Hand axe').EP = [100,100,200,500,1500];
new $DQ.Skill('Weapon skills', 'Battle axe').EP = [75,75,150,200,500,1000,2000,4000];
new $DQ.Skill('Weapon skills', 'Great axe').EP = [75,75,150,200,500,1000,2000,4000];
new $DQ.Skill('Weapon skills', 'Giant axe').EP = [150,50,100,200,500,1000,3000,5000];
new $DQ.Skill('Weapon skills', 'Crude club').EP = [25,25,50];
new $DQ.Skill('Weapon skills', 'War club').EP = [25,75,150,300,500,700];
new $DQ.Skill('Weapon skills', 'Giant club').EP = [25,75,150,300,500,700];
new $DQ.Skill('Weapon skills', 'Torch');
new $DQ.Skill('Weapon skills', 'Mace').EP = [50,50,100,200,400,700];
new $DQ.Skill('Weapon skills', 'Giant mace').EP = [50,50,100,200,400,700];
new $DQ.Skill('Weapon skills', 'War hammer').EP = [50,50,100,200,400,700];
new $DQ.Skill('Weapon skills', 'War pick').EP = [75,75,150,200,500,1000];
new $DQ.Skill('Weapon skills', 'Flail').EP = [25,25,50,100,200,400];
new $DQ.Skill('Weapon skills', 'Morningstar').EP = [100,100,200,400,700,1800];
new $DQ.Skill('Weapon skills', 'Mattock').EP = [50,50,100,200,400,700];
new $DQ.Skill('Weapon skills', 'Quarterstaff').EP = [75,75,150,200,500,1000,2000,4000,4000,3000];
new $DQ.Skill('Weapon skills', 'Sap').EP = [25,75,150,250];
new $DQ.Skill('Weapon skills', 'Throwing dart').EP = [200,100,200,500,1000,2000,2000,2000,2000,2000,2000];
new $DQ.Skill('Weapon skills', 'Boomerang').EP = [100,300,500,1000,1200,1500,1500,1500];
new $DQ.Skill('Weapon skills', 'Grenado').EP = [25,50,75,100,150];
new $DQ.Skill('Weapon skills', 'Javelin').EP = [50,50,100,200,400,800,1400,2000,2000,2000,3000];
new $DQ.Skill('Weapon skills', 'Spear').EP = [100,100,200,400,700,1800];
new $DQ.Skill('Weapon skills', 'Giant spear').EP = [100,100,200,400,700,1800];
new $DQ.Skill('Weapon skills', 'Pike').EP = [200,200,400,700,1500,3000];
new $DQ.Skill('Weapon skills', 'Lance').EP = [250,400,700,1000,1700,3500];
new $DQ.Skill('Weapon skills', 'Halberd').EP = [100,100,200,400,700,1500];
new $DQ.Skill('Weapon skills', 'Poleaxe').EP = [100,100,200,400,700,1500];
new $DQ.Skill('Weapon skills', 'Trident').EP = [200,200,400,800,1400,3000];
new $DQ.Skill('Weapon skills', 'Glaive').EP = [50,50,100,200,200,200,500,800,1500,3000];
new $DQ.Skill('Weapon skills', 'Giant glaive').EP = [50,50,100,200,200,200,500,800,1500,3000];
new $DQ.Skill('Weapon skills', 'Sling').EP = [200,200,400,700,1500,3000,3000,3000,3000];
new $DQ.Skill('Weapon skills', 'Self bow').EP = [100,100,200,400,700,1500,3000,3000,3000];
new $DQ.Skill('Weapon skills', 'Short bow').EP = [100,100,200,400,700,1500,3000,3000,3000];
new $DQ.Skill('Weapon skills', 'Long bow').EP = [300,200,500,1000,2000,2000,2000,2000,3000];
new $DQ.Skill('Weapon skills', 'Composite bow').EP = [300,200,500,1000,2000,2000,2000,2000,3000];
new $DQ.Skill('Weapon skills', 'Giant bow').EP = [200,200,400,700,1500,3000,3000,3000,3000];
new $DQ.Skill('Weapon skills', 'Crossbow').EP = [100,100,200,400,800,1000];
new $DQ.Skill('Weapon skills', 'Heavy crossbow').EP = [100,100,200,400,800,1000];
new $DQ.Skill('Weapon skills', 'Spear thrower').EP = [25,25,50,100,200,400,700,1500,3000,4000,5000];
new $DQ.Skill('Weapon skills', 'Blowgun').EP = [25,25,50,100,200,400,700,1500,3000,4000,5000];
new $DQ.Skill('Weapon skills', 'Net').EP = [150,150,300,600,1300];
new $DQ.Skill('Weapon skills', 'Bola').EP = [200,200,400,700,1500,2000,5000];
new $DQ.Skill('Weapon skills', 'Whip').EP = [150,150,500,900,1400,2000,3500,4000,5000,5000,6000];
new $DQ.Skill('Weapon skills', 'Lasso');
new $DQ.Skill('Weapon skills', 'Rock').EP = [25,25,100,150,200,300,500];
new $DQ.Skill('Weapon skills', 'Cestus').EP = [30,40,50,100,200,400,700,1500,3000,6000];
new $DQ.Skill('Weapon skills', 'Garotte').EP = [100,200,300,600];
new $DQ.Skill('Weapon skills', 'Shield').EP = [25,25,50,100,200];
new $DQ.Skill('Weapon skills', 'Unarmed').EP = [150,300,450,600,800,900,1500,3000,4000,5000,4000];


new $DQ.Table('TMR', ['Current AG', 'Base TMR']).
  addRange('<', 1, "0").  addRange(1, 2, "1").
  addRange(3, 4, "2").    addRange(5, 8, "3").
  addRange(9, 12, "4").   addRange(13, 17, "5").
  addRange(18, 21, "6").  addRange(22, 25, "7").
  addRange(26, 27, "8").  addRange(28, 29, "9").
  addRange(30, 31, "10");


rk = function(s) {
	var r = $H(s).map(function(p) { return p.key + ': ' + p.value; }).join(', ');
	if (r == '') r = 'Rank';
	return ' ' + r + ' ';
}
