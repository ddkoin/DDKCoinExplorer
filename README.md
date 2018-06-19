# DDKExplorer
Describe brief description about DDK Explorer here

## Prerequisite for DDK Explorer system
This sections provides details on what you need install on your system in order to run Explorer.

- ### Supported Plateforms:
```
Ubuntu 14.04 x86_64
Ubuntu 16.04 (LTS) x86_64
```

- ### Tool chain components -- Used for compiling dependencies
```
sudo apt-get install -y python build-essential curl automake autoconf libtool
```

- ### Git -- Used for cloning and updating DDK Explorer
```
sudo apt-get install -y git
```

- ### Node.js -- Node.js serves as the underlying engine for code execution.
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

- ### PostgreSQL (version 9.6.2) -- PostgreSQL is the database used for this application
```
curl -sL "https://downloads.lisk.io/scripts/setup_postgresql.Linux" | bash -
sudo -u postgres createuser --createdb $USER
sudo -u postgres createdb <database_name> //DDK_explorer in our system
sudo -u postgres psql -d <database_name> -c "alter user "$USER" with password 'password';"
```

- ### Installing Redis -- Redis is used for cached storage
Ubuntu/Debian:
```
sudo apt-get install redis-server
```
Start Redis:
```
service redis start
```
Stop Redis:
```
service redis stop
```
**NOTE:** DDK explorer does not run on the redis default port of 6379. Instead it is configured to run on port: 6380. Because of this, in order for Explorer to run, you have one of two options:

1. Change the Explorer configuration

Update the redis port configuration in both `config.json` and `test/data/config.json`. Note that this is the easiest option, however, be mindful of reverting the changes should you make a pull request.

2. Change the Redis launch configuration

Update the launch configuration file on your system. Note that their a number of ways to do this. The following is one way:

   1. Stop redis-server
   2. Edit the file `redis.conf` and change: `port 6379` to `port 6380`

```
Ubuntu/Debian: /etc/redis/redis.conf
MacOS: /usr/local/etc/redis.conf
```
3.  Start redis-server

Now confirm that redis is running on port 6380:
```
redis-cli -p 6380
ping
```


## Installation Steps
### 1. Clone
First clone the code:
```
$ git clone https://github.com/oodlestechnologies/DDKExplorer
```
### 2. Create Config.json
Create new file `config.json`. A sample copy `config-sample.json` is provided with GitHub code. For getting started you can replace `config-sample.json` to `config.json`. Later, you can change configuration according to your need.

### 3. Install Dependencies
Go to your project folder and run
```
$ npm install
```
## Run the server
Once installation steps are completed. You can run your server.
```
$ node app.js
```
