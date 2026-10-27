// src/routes/pokemons/[pokemon].rs
use reqwest::{Client, StatusCode};
use serde::{Deserialize, Serialize};
use tuono_lib::{Props, Request, Response, tokio::fs};

const PORTFOLIO_DATA_PATH: &str = "./src/res/portfolio_items.json";

#[derive(Debug, Serialize, Deserialize)]
struct PortfolioItem {
    key: usize,
    title: String,
    subtitle: String,
    header_image: Vec<String>,
    desc_short: String, // String literal displayed on the truncated card
    desc_long: String,  // Path to markdown that gets converted to html
    tools: Vec<String>,
    hosted_at: String,
}

#[derive(Debug, Serialize, Deserialize)]
struct PortfolioItemList {
    items: Vec<PortfolioItem>,
}

// The following decorator causes the function to be run each time the page is requested.
// We can do i/o here to generate our html.
#[tuono_lib::handler]
async fn get_overview(req: Request, fetch: Client) -> Response {
    let portfolio_json = fs::read_to_string(PORTFOLIO_DATA_PATH).await.unwrap();
    // println!("{:?}", portfolio_json);

    let portfolio_items: Result<PortfolioItemList, serde_json::Error> =
        serde_json::from_str(&portfolio_json);
    // println!("{:?}", portfolio_items);

    match portfolio_items {
        Ok(res) => {
            let data = res;
            // println!("{:?}", data);
            Response::Props(Props::new(data))
        }
        //{
        //         if res.status() == StatusCode::NOT_FOUND {
        //             return Response::Props(Props::new_with_status("{}", StatusCode::NOT_FOUND));
        //         }
        //         let data = res.json::<PortfolioItem>().await.unwrap();
        //         Response::Props(Props::new(data))
        //     }
        //     Err(_err) => Response::Props(Props::new_with_status(
        //         "{}",
        //         StatusCode::INTERNAL_SERVER_ERROR,
        //     )),
        // }
        Err(_err) => Response::Props(Props::new_with_status("{}", StatusCode::IM_A_TEAPOT)),
    }
}
