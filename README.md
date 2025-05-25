# jQuery-hover-text

This library implements hover tooltip functionality that displays additional information when users hover over elements. It supports multiple display types including title, box, and card formats.

## Installation

Import directly in html file.

``` html
<!-- HTML -->

<link href="path/jQuery-hover-text/hover-text.css" rel="stylesheet">
<script src="path/jQuery-hover-text/hover-text.js"></script>
```

## Usage

### Library settings

``` bash
# Edit default style
vi path/jQuery-hover-text/hover-text.css

# Edit default setting
vi path/jQuery-hover-text/hover-text.js
```

### How to use

``` html
<!-- HTML -->

<!-- Add data attribute "WKHT" to your elements with hover information -->
<!-- For title type (default) -->
<span data-hover="WKHT" data-info="Tooltip content">Hover me</span>

<!-- For box type with title, photo, info and footer -->
<span data-hover="WKHT" data-type="box" data-title="Title" data-photo="image.jpg" data-info="Information" data-footer="Footer">Hover me</span>

<!-- For card type with more detailed layout -->
<span data-hover="WKHT" data-type="card" data-title="Card Title" data-photo="image.jpg" data-info="Card information" data-footer="Card footer" data-from="Source">Hover me</span>
```

``` javascript
<!-- JavaScript -->

// Initialize hover text for container
$('.container').WKHT_init();

// Or initialize individual elements
$('[data-hover="WKHT"]').WKHT();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
