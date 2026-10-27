use reqwest::Client;

// Tuono makes ApplicationState accessible from any function using #[tuono_lib::handler]
#[derive(Clone)]
pub struct ApplicationState {
    pub fetch: Client,
}

pub fn main() -> ApplicationState {
    let fetch = Client::new();
    ApplicationState { fetch }
}
