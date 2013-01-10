if not exist .\content mkdir content
copy underscore-ko.js content\underscore-ko.$version$.js
uglifyjs -o underscore-ko.min.js underscore-ko.js
uglifyjs -o content\\underscore-ko.$version$.min.js underscore-ko.js
nuget pack UnderscoreKO.nuspec -Version %1