# TrailApp
A web app to run a wide game/scavenger hunt type event, featuring questions and photo challenges.

[Jump to installation instructions](#getting-started)

## Answer questions and complete challenges
Submit answers & photos directly from the app
| [![Question view](docs/questions.png)](docs/questions.png) | [![Challenge view](docs/challenges.png)](docs/challenges.png) |
| --- | --- |
| [![Question submission](docs/question-submission.png)](docs/question-submission.png) | [![Challenge submission](docs/challenge-submission.jpg)](docs/challenge-submission.jpg) |

## Realtime feedback on submission being accepted/rejected
Control team able to accept/reject submissions that have been sent in - feedback given to teams in realtime.
| [![Dashboard submission view](docs/submission-received.jpg)](docs/submission-received.jpg) | [![Accepted notification](docs/submission-accepted.png)](docs/submission-accepted.png) |
| --- | --- |

## Realtime messaging from control to teams
Ability to broadcast messages out to teams (both to individual teams, and to all teams)
| [![Broadcast](docs/broadcast.png)](docs/broadcast.png) | [![Broadcast received](docs/broadcast-received.png)](docs/broadcast-received.png) |
| --- | --- |

## Supports multiple teams members working collaboratively
QR code allows other teams members to be submitting at the same time - realtime feedback to teams keeps all members in sync.
[![Join with QR](docs/join-qr.png)](docs/join-qr.png)

## Simple dashboard interface
[![Dashboard](docs/dashboard.png)](docs/dashboard.png)

# Getting Started
- Clone the repository: `git clone https://github.com/CabotExplorers/trailapp.git`
- Generate initial .env file: `./trail init`
- [Fill out environment variables depending on your setup](#environment-variables)
- Build app: `./trail build-all`
- Run database migrations: `./trail migrate`
- Create initial user: `./trail add-user`
- Add your groups, questions, challenges, and other users via the dashboard.
- Start your trail!

### Environment Variables
