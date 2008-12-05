$DQ.table('Weapon Fumble', ['Roll', 'Result']).
  addRange(1, 9, "Shattered weapon.").
  addRange(10, 10, "Shattered weapon; some slivers fly at you, potentially causing you a grievous injury - roll on the Grievous Injury Table (section 51), but ignore any result over 13.").
  addRange(11, 12, "Shattered weapon, flying splinters; you and your opponent(s) lose 1 EN each.").
  addRange(13, 13, "Playing the Roman fool? You just did yourself an Endurance blow; fortunately you rolled a minimum damage (but don't forget the extra damage from poison, magic, etc).").
  addRange(14, 16, "Your wild swing possibly connects with someone other than your intended target(s) or yourself - immediately make a strike check at your new victim, the nearest being in range other than you or your intended target(s). Hope you weren't mounted.").
  addRange(17, 18, "Lose 1 EN. Feels as if you pulled something.").
  addRange(19, 10, "Lose 2 EN. You really pulled something.").
  addRange(20, 20, "Oops! You've flung your weapon in a high parabolic arc. Normally a flung or dropped weapon falls without hurting anyone - however, in this one case, it falls on a random target, possibly even you, and maybe hurts them: Strike Chance = [Weapon's B.C.] + [magical / weaponsmith bonuses] - [random target's defence].").
  addRange(21, 26, "Butterfingers! Make 3 x MD to avoid your weapon flying 2-3 hexes in a random direction.").
  addRange(27, 28, "Klutz! Make 3 x MD to avoid dropping your weapon in your hex.").
  addRange(29, 29, "Whoops! You've caught your weapon in your own armour or gear. You may choose to automatically free it next pulse; in which case, you may not attack or cast magic until after the end of next pulse. Or else you may wish to prepare another weapon in your next action.").
  addRange(30, 30, "Overly enthusiastic lunge. GM moves you to an unoccupied forward hex (make 3 x AG to choose your new facing) - but if no empty hex is available, you just tried to close on an opponent, who gets a free chance to keep you out of close. If you did close, you don't have to drop any non-close weapon, but it may not be used to attack effectively.").
  addRange(31, 32, "Poor balance; make 3 x AG or No Offense until after the end of the next pulse.").
  addRange(33, 33, "Stumble; make 3 x AG or fall prone.").
  addRange(34, 35, "as per 31-32, but make 2 x AG.").
  addRange(36, 36, "as per 33, but make 2 x AG.").
  addRange(37, 38, "as per 31-32, but make 1 x AG.").
  addRange(39, 39, "as per 33, but make 1 x AG.").
  addRange(40, 40, "Broken weapon.").
  addRange(41, 49, "Damaged weapon.").
  addRange(50, 50, "Momentary dizziness; make 3 x EN or you may not attack or cast magic until after the end of next pulse.").
  addRange(51, 52, "Your vigorous swing causes a slight twinge. Make 3 x EN or lose 2 FT.").
  addRange(53, 53, "Make 3 x EN or pull a groin muscle, lose 2 FT and have half Base TMR until healed.").
  addRange(54, 55, "as per 51-52, but make 2 x EN.").
  addRange(56, 56, "as per 53, but make 2 x EN.").
  addRange(57, 58, "as per 51-52, but make 1 x EN.").
  addRange(59, 59, "as per 53, but make 1 x EN.").
  addRange(60, 60, "No effect unless you used a A- or B-class melee weapon against an opponent with a non-magical shield. In which case, you have spectacularly wedged you weapon into their shield. Make 1 x PS to immediately wrench your weapon out, or it will be torn from your grasp in the fracas. Don't worry if you fail - perhaps their shield is now useless?").
  addRange(61, 62, "Your melee weapon is stuck, caught, or entangled in your opponent's armour or gear (and you didn't even hurt them). Make 3 x PS to immediately disengage your weapon, or it will be yanked from your grasp in the fracas.").
  addRange(63, 63, "You palpably hit a tree, rock, wall-hanging, furniture, or some other adjacent scenery. Make 3 x PS to immediately disengage/extract your weapon. You may try again, as a future action; but perhaps you should prepare a new weapon instead.").
  addRange(64, 65, "as per 61-62, but make 2 x PS.").
  addRange(66, 66, "as per 63, but make 2 x PS.").
  addRange(67, 68, "as per 61-62, but make 1 x PS.").
  addRange(69, 69, "as per 63, but make 1 x PS.").
  addRange(70, 70, "* Shattered weapon, if it is not at least Rank 1 weaponsmithed.").
  addRange(71, 73, "* Your weapon breaks unless you roll under its weaponsmith rank on D. Indeed it shattered if you failed the roll by 5 or more.").
  addRange(74, 77, "Twinge of pain. Take (D - rank in weapon) FT damage.").
  addRange(78, 79, "as per 74-77, but also you may not attack or cast magic for remainder of the pulse.").
  addRange(80, 80, "Your weapon flies from your grasp. You may choose to drop whatever is in your other hand; in which case, make 3 x MD to catch the weapon in that other hand.").
  addRange(81, 82, "Butterfingers! Make 3 x MD to avoid your weapon flying 2-3 hexes in a random direction.").
  addRange(83, 83, "Klutz! Make 3 x MD to avoid dropping your weapon in your hex.").
  addRange(84, 85, "as per 81-82, but make 2 x MD.").
  addRange(86, 86, "as per 83, but make 2 x MD.").
  addRange(87, 88, "as per 81-82, but make 1 x MD.").
  addRange(89, 89, "as per 83, but make 1 x MD.").
  addRange(90, 90, "Broken weapon.").
  addRange(91, 99, "Damaged weapon.").
  addRange(00, 00, "Your bizarre but highly spectacular fumble is mistaken for an obscure martial technique. All engaged melee opponents hastily elect to perform not to attack or cast magic on their very next action. If you have another action before they actually perform their next action, you may choose to run away (retreat up to full TMR) as your action without the need for a Withdrawal manoeuvre - you are no longer engaged with those particular opponents.");

$DQ.table('Bow Fumble', ['Roll', 'Result']).
  addRange(1, 12, "Bowstring snaps and lashes you; lose 2 EN.").
  addRange(13, 13, "Bowstring snaps and lashes you in the eye; lose 2 EN; you are blinded in one eye for 3 weeks or until cured by a Rank 7 Healer. A figure who is blind in one eye suffers the following subtractions: 1 from MD, 2 from PB, 4 from Perception; and reduces their base chance with any missile or thrown weapon by 30.").
  addRange(14, 29, "Bowstring snaps; no further penalty.").
  addRange(30, 30, "Traditional Hunting accident. Clumsy release causes arrow / quarrel to fly towards a random friendly back in approximately the same direction as you were aiming: Strike Chance = Weapon BC + weapon bonuses + 30 - target's defence.").
  addRange(31, 33, "Clumsy release; bolt/arrow flies wide missing friends and foes.").
  addRange(34, 36, "Brief twinge of pain in your arm or back; Lose 1 EN.").
  addRange(37, 39, "as per 34-36, but lose 2 EN.").
  addRange(40, 59, "dropped bolt or quarrel.").
  addRange(60, 99, "Bowstring snaps; no further damage.").
  addRange(00, 00, "Bowstring snaps and lashes you; lose 2 EN.");

$DQ.table('Specific Grevious', ['Roll', 'Result']).
  addRange(1, 5, "Congratulations! It's a bleeder in your primary arm! Take 1 Damage Point from Endurance immediately and 1 per pulse thereafter until the flow is staunched by a Healer of Rank 0 or above or you die.").
  addRange(6, 7, "Oh no! Your opponent's weapon has entered your secondary arm's elbow joint and the tip has broken off. Take 2 Damage Points immediately from Endurance and that arm is useless until the sliver has been removed by a Healer of Rank 3 or above. Also, increase the chance of infection by 30.").
  addRange(8, 8, "A vicious puncture wound in your groin! Take 3 Damage Points immediately from Endurance and reduce your TMR by 2 until fully recovered, which will take two months. In addition, add 30 to your chance of being infected (assuming you live long enough for such things to matter).").
  addRange(9, 10, "You have been stabbed in your secondary arm. Drop whatever you were holding in it and take 2 Damage Points immediately from Endurance. It will take a full week for the arm to be of any use to you whatsoever.").
  addRange(11, 11, "Your aorta is severed and you are quite dead. Rest assured your companions will do their best to console your widow(er).").
  addRange(12, 12, "A stomach puncture. Nasty. You suffer 3 Damage Points immediately from Endurance and lose 2 from your TMR until fully recovered, whcih will take two months. Also, you are automatically stunned for the next pulse (if you aren't already), after which you may recover. Add 20 to the chance to be infected.").
  addRange(13, 13, "Your opponent's weapons has entered your eye; roll D. On a roll of 1, the weapon has entered your brain and you are dead. On a roll of 2-5, your left eye is blinded; on a roll of 6-10, your right eye is blinded. If you are lucky enough to be blinded instead of killed, you have suffered 2 Damage Points to Endurance. In addition, a figure who is blind in one eye suffers the following subtractions: -1 from MD, -2 from PB, -4 from Perception. A figure blinded in one eye reduces their base chance with any missile or thrown weapon by 30.").
  addRange(14, 18, "Tsk, tsk. A wound of the solid viscera. Usually fatal. Take 3 Damage Points to Endurance immediately and 1 per pulse thereafter until the bleeding is stopped by a Healer of Rank 2 or above or you die. Add 30 to the chance of infection.").
  addRange(19, 20, "Take a stab in the leg (your choice as to which one) resulting in a deep puncture of the thigh muscle. Suffer 1 Damage Point to Endurance immediately and reducd your TMR by 1 until you heal, which will take 4 weeks.").
  addRange(21, 25, "A chest wound. Take 2 Damage Points to Endurance immediately and reduce your TMR by 1 until recovered (about 2 months). Look on the bright side, though. Your attacker's weapon is caught in your rib cage and has been wrenched from their grasp.").
  addRange(26, 27, "Bad luck! Your secondary hand has been severed at the wrist. Take 2 damage Points to Endurance immediately and subtract 1 point per pulse from Fatigue thereafter (Endurance when Fatigue is exhausted) until you are dead or the bleeding is staunched by a Healer of Rank 0 or above. If you live, reduce your MD by 2.").
  addRange(28, 30, "Worst luck! Your primary hand has been severed. See result 26-27 for effects.").
  addRange(31, 34, "A minor wound. Your face is slashed open, ruining your boyish good looks and causing blood to spurt into your eyes. Reduce your PB by 4 permanently.").
  addRange(35, 35, "Your secondary arm is sliced off at the shoulder. Take 5 Damage Points immediately from Endurance and 1 per pulse thereafter from Fatigue (Endurance when Fatigue is exhausted) until you are dead or the bleeding is staunched by a Healer of Rank 1 or above. Reduce your MD by 2 and your AG by 1.").
  addRange(36, 36, "The same as 35, except it's your good primary arm that has been lopped off.").
  addRange(37, 40, "You have been eviscerated! Take 4 Damage Points immediately from Endurance and 1 point per pulse from Fatigue thereafter (Endurance when Fatigue is exhausted) until you are unconscious. Increase your chance of infection by 40.").
  addRange(41, 42, "A glancing blow lays open your scalp and severs one ear (your choice as to which one). Take 2 Damage Points immedately from endurance. Reduce your Perception by 2.").
  addRange(43, 43, "A savage slash rips open your cheek and jaw. Take an automatic pass action next pulse due to the shock of the blow. Your PB is increased by 1, since your disfigurement will bring out the maternal/ paternal instincts in the opposite gender.").
  addRange(44, 50, "A slash along one arm, and it's a bleeder! Take 2 Damage Points immediately from Endurance and lose 1 point from Fatigue (Endurance when Fatigue is exhausted) each pulse until the bleeding is stopped by a Healer of Rank 1 or above or you die.").
  addRange(51, 52, "Hamstrung! Roll D. On a roll of 1-4, it is your left leg. On a roll of 5-10 its your right. Take 4 Damage Points immediately from Endurance and fall prone. You may not stand unassisted until the wound is healed (which should take three months). Reduce your AG by 3 permanently.").
  addRange(53, 60, "Your primary arm is crippled by a wicked slash! Take 2 damage Points immediately to Endurance and drop anything you have in your primary hand. The arm is unusable until healed, which should take 2 months.").
  addRange(61, 67, "Your secondary arm is crippled; see 53-60 for details.").
  addRange(68, 69, "A nasty slash in the region of the shoulder and neck. Roll D. On a roll of 1-3, your head is severed and your corpse tumbles to the ground. On a roll of 4-6, your secondary collar bone is crushed; on a roll of 7-10 your primary collar bone is crushed. If your collar bone is crushed, the results are identical to 53-60, except you suffer 4 Damage Points to Endurance.").
  addRange(70, 74, "A crushing blow smashes your helmet and causes a concussion. Take 3 Damage Points from Endurance and suffer a reduction of 4 in both MD and AG lasting for 3 days.").
  addRange(75, 80, "A massive chest wound accompanied by broken ribs and crushed tissues. Very ugly, this. Take 5 Damage Points immediately from Endurance. Reduce your MD and AG by 3 each until this wound heals (should take about 4 months). Increase your chance of infection by 10.").
  addRange(81, 84, "A crushing blow smashes tissue and produces internal injuries. You suffer 2 Damage Points immediately to Endurance and 1 per pulse thereafter to Fatigue (Endurance when Fatigue is exhausted) until unconscious or you receive the attention of a Healer of Rank 2 or above.").
  addRange(85, 87, "A jarring blow to your primary shoulder in- flicts 2 Damage points immediately to Endurance. Roll D; the result is the number of pulses the arm is useless. You immediately drop anything held in that hand.").
  addRange(88, 89, "Similar to 85-87 except it is your secondary shoulder.").
  addRange(90, 92, "Your right hip is smashed horribly. Take 5 damage Points immediately to Endurance and fall prone. You will be unable to walk until the damage has healed (takes about 6 months). Good fun. When healed, you will still have a limp which will reduce your TMR by 1 and your AG by 2.").
  addRange(93, 94, "The same as 90-92 except it is your left hip that is smashed.").
  addRange(95, 97, "Your opponent's weapon has come crashing down on your head and fractured your skull. You fall prone and are unconscious, and take 8 damage Points to Endurance. If you survive, you lose 2 from AG, 2 from MD and 2 from Perception. It will take a year in bed to recover.").
  addRange(98, 100, "Crushing blow to your pelvis breaks bone and tears tissue. Take 7 damage Points immediately to Endurance and fall prone. Try to roll under your WP on D100 to avoid falling unconscious. If you survive, you will be unable to move for D months.");
