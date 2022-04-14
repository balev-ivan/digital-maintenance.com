SET EX="C:\Program Files (x86)\IIS Express\iisexpress.exe"
if not "%1" == "" (
	START "" http://localhost:%1
	CALL %EX% /path:"%CD%" /port:%1
) else (
	START "" http://localhost:8080
	CALL %EX% /path:"%CD%"
)
