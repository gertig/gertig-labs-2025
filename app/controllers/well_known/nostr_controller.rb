module WellKnown
  class NostrController < ActionController::API
    PUBLIC_KEY = "1607d0775adc093c93379e3e2b6be84bc334d043b1eec9a7fb4e26876d54d323"
    RELAYS = [
      "wss://relay.damus.io",
      "wss://relay.nostr.band",
      "wss://buzz.block.builderlab.xyz"
    ].freeze

    def show
      response.headers["Access-Control-Allow-Origin"] = "*"

      render json: {
        names: {
          andrew: PUBLIC_KEY
        },
        relays: {
          PUBLIC_KEY => RELAYS
        }
      }
    end
  end
end
