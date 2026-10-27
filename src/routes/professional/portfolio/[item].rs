use reqwest::{Client, StatusCode};
use serde::{Deserialize, Serialize};
use tuono_lib::{Props, Request, Response, tokio::fs};

const PORTFOLIO_DATA_PATH: &str = "./src/res/portfolio_items.json";

#[derive(Debug, Serialize, Deserialize)]
struct PortfolioItem {
    title: String,
    subtitle: String,
    header_image: Vec<String>,
    desc_short: String, // String literal displayed on the truncated card
    desc_long: String,  // Path to markdown that gets converted to html
    tools: Vec<String>,
    hosted_at: String,
}

#[tuono_lib::handler]
async fn get_item(req: Request, fetch: Client) -> Response {
    let portfolio_json = fs::read_to_string(PORTFOLIO_DATA_PATH).await.unwrap();
    println!("{:?}", &portfolio_json);

    let portfolio_items: Result<Vec<PortfolioItem>, serde_json::Error> =
        serde_json::from_str(&portfolio_json);
    println!("{:?}", &portfolio_items);

    match portfolio_items {
        Ok(res) => Response::Props(Props::new_with_status("{}", StatusCode::OK)),
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
        Err(_err) => Response::Props(Props::new_with_status("{}", StatusCode::NOT_FOUND)),
    }
}
//     // The param `pokemon` is defined in the route filename [pokemon].rs
//     let portfolio_items = req.params.get("item").unwrap();
//
//     match fetch
//         .get(format!("{PORTFOLIO_PATH}/{portfolio_items}"))
//         .send()
//         .await
//     {
//         Ok(res) => {
//             if res.status() == StatusCode::NOT_FOUND {
//                 return Response::Props(Props::new_with_status("{}", StatusCode::NOT_FOUND));
//             }
//             let data = res.json::<PortfolioItem>().await.unwrap();
//             Response::Props(Props::new(data))
//         }
//         Err(_err) => Response::Props(Props::new_with_status(
//             "{}",
//             StatusCode::INTERNAL_SERVER_ERROR,
//         )),
//     }
// }
