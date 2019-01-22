.. _`bioconductor-xps`:

bioconductor-xps
================

|downloads|

The package handles pre\-processing\, normalization\, filtering and analysis of Affymetrix GeneChip expression arrays\, including exon arrays \(Exon 1.0 ST\: core\, extended\, full probesets\)\, gene arrays \(Gene 1.0 ST\) and plate arrays on computers with 1 GB RAM only. It imports Affymetrix .CDF\, .CLF\, .PGF and .CEL as well as annotation files\, and computes e.g. RMA\, MAS5\, FARMS\, DFW\, FIRMA\, tRMA\, MAS5\-calls\, DABG\-calls\, I\/NI\-calls. It is an R wrapper to XPS \(eXpression Profiling System\)\, which is based on ROOT\, an object\-oriented framework developed at CERN. Thus\, the prior installation of ROOT is a prerequisite for the usage of this package\, however\, no knowledge of ROOT is required. ROOT is licensed under LGPL and can be downloaded from http\:\/\/root.cern.ch.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/xps.html
Versions      
License       GPL (>= 2.0)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xps



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-xps

and update with::

   conda update bioconductor-xps



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-xps.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-xps/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-xps/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-xps/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-xps
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-xps/status
                :target: https://quay.io/repository/biocontainers/bioconductor-xps

