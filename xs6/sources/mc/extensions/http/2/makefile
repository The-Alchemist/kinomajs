#
#     Copyright (C) 2010-2016 Marvell International Ltd.
#     Copyright (C) 2002-2010 Kinoma, Inc.
#
#     Licensed under the Apache License, Version 2.0 (the "License");
#     you may not use this file except in compliance with the License.
#     You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#     Unless required by applicable law or agreed to in writing, software
#     distributed under the License is distributed on an "AS IS" BASIS,
#     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#     See the License for the specific language governing permissions and
#     limitations under the License.
#
SOURCES = \
	client.js \
	endpoint.js \
	error.js \
	frame.js \
	hpack.js \
	stream-state.js \
	stream.js
OBJECTS = $(addprefix $(DEST_DIR)/http/2/, $(addsuffix .xsb, $(basename $(SOURCES))))
JS_DIR = $(F_HOME)/xs6/sources/mc/extensions/http/2

.PHONY: archive

all archive: $(DEST_DIR)/http/2 $(OBJECTS)

clean:
	rm -f $(OBJECTS)

$(DEST_DIR)/http/2:
	mkdir -p $(DEST_DIR)/http/2

# rules
$(DEST_DIR)/http/2/%.xsb: $(JS_DIR)/%.js
	$(XS6_TOOL_DIR)/xsc6 $(XSC_OPTIONS) -c -o $(DEST_DIR)/http/2 $<

