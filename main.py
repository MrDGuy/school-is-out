is_weekday = game.ask("Is it a weekday?","OK = True, Cancel = False")
is_holiday = game.ask("Is it a holiday?","OK = True, Cancel = False")

if is_weekday and not is_holiday:
    adventure.add_to_textlog("There is school today.")
else:
    adventure.add_to_textlog("There is no school today.")