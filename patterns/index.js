const patternDict = [{
    pattern: "\\b(?<greeting>Hi|Hello|Hey)\\b",
    intent: "Hello"
}, {
    pattern: "\\b(bye|exit|no)\\b",
    intent: "Exit"
}, {
    pattern: "\\b(all[ A-Za-z]* (of|about) )(?<name>([A-Za-z]+|\.)+([',. -][a-zA-Z0-9 ])*)\\b",
    intent: "all"
}, {
    pattern: "\\b((\w*\s)*(powerstats|stats) of )(?<name>([A-Za-z]+|\.)+([',. -][a-zA-Z0-9 ])*)\\b",
    intent: "powerstats"
}, {
    pattern: "\\b((\w*\s)*((real|true) identity|background|history|biography) of )(?<name>([A-Za-z]+|\.)+([',. -][a-zA-Z0-9 ])*)\\b",
    intent: "biography"
}, {
    pattern: "\\b((\w*\s)*appearance of )(?<name>([A-Za-z]+|\.)+([',. -][a-zA-Z0-9 ])*)\\b",
    intent: "appearance"
}, {
    pattern: "\\b((\w*\s)*(occupation|job|work) of )(?<name>([A-Za-z]+|\.)+([',. -][a-zA-Z0-9 ])*)\\b",
    intent: "occupation"
}, {
    pattern: "\\b((I|i )?don't know|help)\\b",
    intent: "help"
}, {
    pattern: "\\b((\w*\s)*appearance|(\w*\s)*looks like)\\b",
    intent: "sug_appearance"
}, {
    pattern: "\\b((\w*\s)*((real|true) identity|background|history|biography))\\b",
    intent: "sug_biography"
}, {
    pattern: "\\b(\w*\s)*(powerstats|stats)\\b",
    intent: "sug_powerstats"
}, {
    pattern: "\\b(\w*\s)*(occupation|job|work)\\b",
    intent: "sug_occupation"
}];

module.exports = patternDict;