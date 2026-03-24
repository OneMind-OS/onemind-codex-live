#!/usr/bin/env python3
"""Purge Cloudflare cache for onemindcodex.com zone."""
import json, os, urllib.request

# Find wrangler's OAuth token
token = None
for base in [
    os.path.expanduser("~/Library/Preferences/.wrangler/config"),
    os.path.expanduser("~/.config/.wrangler/config"),
    os.path.expanduser("~/.wrangler/config"),
]:
    toml_path = os.path.join(base, "default.toml")
    if os.path.exists(toml_path):
        with open(toml_path) as f:
            for line in f:
                if "oauth_token" in line:
                    token = line.split("=", 1)[1].strip().strip('"').strip("'")
                    break
        if token:
            break

if not token:
    print("ERROR: Could not find wrangler OAuth token")
    exit(1)

print(f"Token found: {token[:8]}...")

# Get zone ID
req = urllib.request.Request(
    "https://api.cloudflare.com/client/v4/zones?name=onemindcodex.com",
    headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
)
resp = json.loads(urllib.request.urlopen(req).read())
if not resp.get("success") or not resp.get("result"):
    print(f"Zone lookup failed: {resp}")
    exit(1)

zone_id = resp["result"][0]["id"]
print(f"Zone ID: {zone_id}")

# Purge everything
data = json.dumps({"purge_everything": True}).encode()
req2 = urllib.request.Request(
    f"https://api.cloudflare.com/client/v4/zones/{zone_id}/purge_cache",
    data=data,
    method="POST",
    headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
)
resp2 = json.loads(urllib.request.urlopen(req2).read())
print(f"Cache purge success: {resp2['success']}")
if not resp2["success"]:
    print(f"Errors: {resp2.get('errors')}")
