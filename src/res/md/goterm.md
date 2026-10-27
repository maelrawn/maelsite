##### Background

I really like SSH. It's cool and you can do fun things in a performant way with TUI libraries. Libs like ratatui provide easy frameworks for making decent TUIs, and extension libs like ratatui-image let you do pixel blitting. This turns the terminal into a fully-featured canvas, and because terminals are fast, you can do inefficient visual flairs and still be blazing fast.

Some examples of good terminal apps\:

- [concord](https://github.com/chojs23/concord): A Discord client that uses <10% of the bloated Electron client
- [spotatui](https://github.com/LargeModGames/spotatui): A Spotify client that also uses <10% of the bloated Electron client
- [terminal.shop](https://www.terminal.shop/): A coffee company run entirely through the terminal, using SSH keys as UUIDs

So, to teach myself about enterprise software development and as a battle against the unholy horde of Electron apps taking over the software space, I'm serving Go over SSH.

##### Solution

I've got a straightforward tech stack composed of industry-standard enterprise tools:

- Amazon EC2 hosts my services and passes SSH connection requests through to docker
- docker sandboxes my server and handles the SSH connections
- Assets are maintained on Amazon S3
- Data is maintained on Amazon RDS in PostGresQL
- Domain name is provided by Cloudflare
- Static IP is provided by Amazon
- The service is written in Rust, using [ratatui](https://ratatui.rs) for UI and [russh](https://github.com/Eugeny/russh) for SSH utilities
