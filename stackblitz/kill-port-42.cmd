REM find process that is running port 4200;
netstat -ano | findstr :4200
REM KILL the process running port 4200: taskkill /PID 1234 /F