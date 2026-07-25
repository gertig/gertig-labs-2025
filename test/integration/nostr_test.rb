require "test_helper"

class NostrTest < ActionDispatch::IntegrationTest
  test "serves the NIP-05 identity and relay metadata" do
    get "/.well-known/nostr.json"

    assert_response :success
    assert_equal "application/json", response.media_type
    assert_equal "*", response.headers["Access-Control-Allow-Origin"]
    assert_equal(
      {
        "names" => {
          "gertig" => "1607d0775adc093c93379e3e2b6be84bc334d043b1eec9a7fb4e26876d54d323"
        },
        "relays" => {
          "1607d0775adc093c93379e3e2b6be84bc334d043b1eec9a7fb4e26876d54d323" => [
            "wss://relay.damus.io",
            "wss://relay.nostr.band",
            "wss://buzz.block.builderlab.xyz"
          ]
        }
      },
      response.parsed_body
    )
  end
end
