cd example21


npx mfserve --listen 3001 --cors ./team-decide

npx mfserve --listen 3002 --cors ./team-inspire

npx mfserve --listen 3003 --cors ./team-checkout


npx mfserve --listen 3000 --single ./app-shell



http://localhost:3000



