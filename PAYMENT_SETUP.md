# Tranzila checkout setup

Configure `TRANZILA_TERMINAL_NAME`, `TRANZILA_APP_KEY`, and `TRANZILA_SECRET`
as server-side environment variables. Never commit their real values.

The merchant account must have Tranzila's Token/Handshake module enabled.
Verify the first end-to-end charge with the merchant's test credentials and card.

Run `npm test` to validate the server-side handshake behavior.
