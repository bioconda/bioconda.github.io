.. _`bioconductor-maxcontrastprojection`:

bioconductor-maxcontrastprojection
==================================

|downloads|

A problem when recording 3D fluorescent microscopy images is how to properly present these results in 2D. Maximum intensity projections are a popular method to determine the focal plane of each pixel in the image. The problem with this approach\, however\, is that out\-of\-focus elements will still be visible\, making edges and fine structures difficult to detect. This package aims to resolve this problem by using the contrast around a given pixel to determine the focal plane\, allowing for a much cleaner structure detection than would be otherwise possible. For convenience\, this package also contains functions to perform various other types of projections\, including a maximum intensity projection.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/MaxContrastProjection.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-maxcontrastprojection/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-maxcontrastprojection

and update with::

   conda update bioconductor-maxcontrastprojection



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-maxcontrastprojection.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-maxcontrastprojection/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-maxcontrastprojection/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-maxcontrastprojection/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-maxcontrastprojection
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-maxcontrastprojection/status
                :target: https://quay.io/repository/biocontainers/bioconductor-maxcontrastprojection

