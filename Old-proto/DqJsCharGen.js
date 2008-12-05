$DQ.table('Aspect', ['Roll', 'Aspect']).
  addRange(1, 5, "Winter Air").     addRange(6, 10, "Winter Water").
  addRange(11, 15, "Winter Earth"). addRange(16, 20, "Winter Fire").
  addRange(21, 25, "Spring Air").   addRange(26, 30, "Spring Water").
  addRange(31, 35, "Spring Earth"). addRange(36, 40, "Spring Fire").
  addRange(41, 45, "Summer Air").   addRange(46, 50, "Summer Water").
  addRange(51, 55, "Summer Water"). addRange(56, 60, "Summer Fire").
  addRange(61, 65, "Autumn Air").   addRange(66, 70, "Autumn Water").
  addRange(71, 75, "Autumn Earth"). addRange(76, 80, "Autumn Fire").
  addRange(81, 85, "Solar").        addRange(86, 90, "Lunar").
  addRange(91, 95, "Life").         addRange(96, 00, "Death");

$DQ.table('Birth Order', ['Roll', 'Standing']).
  addRange(1, 1, "1st or 2nd").   addRange(2, 3, "3rd").
  addRange(4, 4, "4th").          addRange(5, 5, "5th").
  addRange(6, 6, "6th").          addRange(7, 8, "7th").
  addRange(9, 9, "8th or later"). addRange(0, 0, "Bastard");

$DQ.table('Character Points', ['Roll', 'Points']).
  addRange(2, 2, "81").    addRange(3, 3, "82").
  addRange(4, 4, "83").    addRange(5, 5, "84").
  addRange(6, 6, "85").    addRange(7, 7, "86").
  addRange(8, 8, "87").    addRange(9, 9, "88").
  addRange(10, 10, "89").  addRange(11, 11, "90").
  addRange(12, 12, "91").  addRange(13, 13, "92").
  addRange(14, 14, "93").  addRange(15, 15, "94").
  addRange(16, 16, "95").  addRange(17, 17, "96").
  addRange(18, 18, "97").  addRange(19, 19, "98").
  addRange(20, 20, "99");

$DQ.table('Fatigue', ['Initial EN', 'Initial FT']).
  addRange(3, 4, "16").   addRange(5, 7, "17").
  addRange(8, 10, "18").  addRange(11, 13, "19").
  addRange(14, 16, "20"). addRange(17, 19, "21").
  addRange(20, 22, "22"). addRange(23, 25, "23").
  addRange(26, 27, "24");

$DQ.table('Heritage', ['Roll', 'Heritage']).
  addRange(1, 14, "Trash / Criminal").  addRange(15, 20, "Bonded").
  addRange(21, 29, "Skilled retainer"). addRange(30, 40, "Goodman").
  addRange(45, 54, "Master").           addRange(55, 70, "Military").
  addRange(71, 84, "Gentry").           addRange(85, 94, "Lesser Nobility").
  addRange(95, 98, "Merchant-prince").  addRange(99, 00, "Greater Nobility");
