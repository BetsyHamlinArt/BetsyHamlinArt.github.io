fs = require "lfs"
JSON = require "scripts/JSON"
require "scripts/common"

local portfolioTable = {}

function getImageSize(fileName)
	local cmd = "identify -format '%G' " .. fileName
	local handle = io.popen(cmd)
	local result = handle:read("*a")
	handle:close()
	return removeNewLine(result)
end

function createThumbnailFilename(fileName)
    local name, extension = removeExtension(fileName)
    return name .. "-teaser" .. extension
end

function scandir(root, path, prevPath)
    local sortedCommandQueue = {} 
    path = path or ""
    for file in fs.dir( root .. path ) do
        if file ~= "." and file ~= ".." and file ~= "scripts" then
            local f = path .. '/' .. file
            local absolutePath = root .. f
            local attr = lfs.attributes( absolutePath )

            if attr.mode == "directory" then
                scandir(root, f, file)
            elseif validFile(file) then
                table.insert(sortedCommandQueue, {
                  title = removeExtension(file),
                  image = {
                    feature = "/" .. absolutePath,
                    teaser = "/" .. createThumbnailFilename(absolutePath),
                    size = getImageSize(absolutePath)
                  }
                });
            end
        end
    end

    if prevPath then
        table.sort(sortedCommandQueue, function(a, b)
            return a.title < b.title
        end)

        portfolioTable[prevPath] = portfolioTable[prevPath] or {}
        for i, v in ipairs(sortedCommandQueue) do
            table.insert(portfolioTable[prevPath], v)
        end
    end
end

args = {...}
if args[1] then
	scandir(args[1])
	local pretty_json_text = JSON:encode_pretty(portfolioTable)
    local outFile = io.open("_data/portfolio.json", "w+")
    outFile:write(pretty_json_text)
    outFile:close()
else
    print("Please select a folder")
end