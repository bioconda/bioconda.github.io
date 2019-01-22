.. _`bioconductor-targetscoredata`:

bioconductor-targetscoredata
============================

|downloads|

Precompiled and processed miRNA\-overexpression fold\-changes from 84 Gene Expression Omnibus \(GEO\) series corresponding to 6 platforms\, 77 human cells or tissues\, and 113 distinct miRNAs. Accompanied with the data\, we also included in this package the sequence feature scores from TargetScanHuman 6.1 including the context\+ score and the probabilities of conserved targeting for each miRNA\-mRNA interaction. Thus\, the user can use these static sequence\-based scores together with user\-supplied tissue\/cell\-specific fold\-change due to miRNA overexpression to predict miRNA targets using the package TargetScore \(download separately\)

============= ===========
Home          https://bioconductor.org/packages/3.8/data/experiment/html/TargetScoreData.html
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscoredata



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-targetscoredata

and update with::

   conda update bioconductor-targetscoredata



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-targetscoredata.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-targetscoredata/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-targetscoredata/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-targetscoredata/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-targetscoredata
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-targetscoredata/status
                :target: https://quay.io/repository/biocontainers/bioconductor-targetscoredata

