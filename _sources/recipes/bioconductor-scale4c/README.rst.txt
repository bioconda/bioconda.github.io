.. _`bioconductor-scale4c`:

bioconductor-scale4c
====================

|downloads|

Scale4C is an R\/Bioconductor package for scale\-space transformation and visualization of 4C\-seq data. The scale\-space transformation is a multi\-scale visualization technique to transform a 2D signal \(e.g. 4C\-seq reads on a genomic interval of choice\) into a tesselation in the scale space \(2D\, genomic position x scale factor\) by applying different smoothing kernels \(Gauss\, with increasing sigma\). This transformation allows for explorative analysis and comparisons of the data\'s structure with other samples.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/Scale4C.html
Versions      1.4.0
License       LGPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-scale4c/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-scale4c

and update with::

   conda update bioconductor-scale4c



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-scale4c.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-scale4c/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-scale4c/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-scale4c/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-scale4c
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-scale4c/status
                :target: https://quay.io/repository/biocontainers/bioconductor-scale4c

