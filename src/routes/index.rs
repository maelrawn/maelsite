// src/routes/index.rs
use reqwest::{Client, StatusCode};
use serde::{Deserialize, Serialize};
use tuono_lib::{Props, Request, Response};

#[tuono_lib::handler]
async fn get(_req: Request, fetch: Client) -> Response {
    match fetch.get("").send().await {
        Ok(res) => {
            let data = res.text().await.unwrap();
            Response::Props(Props::new(data))
        }
        Err(_err) => Response::Props(Props::new_with_status(
            "{}", // Return empty JSON
            StatusCode::INTERNAL_SERVER_ERROR,
        )),
    }
}
