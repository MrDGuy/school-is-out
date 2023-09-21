let is_weekday = game.ask("Is it a weekday?", "OK = True, Cancel = False")
let is_holiday = game.ask("Is it a holiday?", "OK = True, Cancel = False")
if (is_weekday && !is_holiday) {
    adventure.addToTextlog("There is school today.")
} else {
    adventure.addToTextlog("There is no school today.")
}

