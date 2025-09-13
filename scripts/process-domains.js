// Script to fetch and process the domain CSV data
const csvUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/domains-1757781629986-UH5FKZgsezotBW5Yw2rT4unndRuMox.csv"

async function processDomains() {
  try {
    console.log("[v0] Fetching domain data from CSV...")
    const response = await fetch(csvUrl)
    const csvText = await response.text()

    console.log("[v0] Processing CSV data...")
    const lines = csvText.split("\n")
    const headers = lines[0].split(",").map((h) => h.trim().replace(/"/g, ""))

    const domains = []
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split(",").map((v) => v.trim().replace(/"/g, ""))
        const domain = {}
        headers.forEach((header, index) => {
          domain[header] = values[index] || ""
        })

        // Only include domains that are not hidden and have a buy now price
        if (domain.Hidden !== "Y" && domain["Buy Now Price"] && domain["Buy Now Price"] !== "0") {
          domains.push(domain)
        }
      }
    }

    console.log(`[v0] Processed ${domains.length} domains`)
    console.log("[v0] Sample domains:", domains.slice(0, 3))

    return domains
  } catch (error) {
    console.error("[v0] Error processing domains:", error)
    return []
  }
}

// Run the processing
processDomains()
