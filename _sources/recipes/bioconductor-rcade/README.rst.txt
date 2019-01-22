.. _`bioconductor-rcade`:

bioconductor-rcade
==================

|downloads|

Rcade \(which stands for \"R\-based analysis of ChIP\-seq And Differential Expression\"\) is a tool for integrating ChIP\-seq data with differential expression summary data\, through a Bayesian framework. A key application is in identifing the genes targeted by a transcription factor of interest \- that is\, we collect genes that are associated with a ChIP\-seq peak\, and differential expression under some perturbation related to that TF.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/Rcade.html
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcade



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rcade

and update with::

   conda update bioconductor-rcade



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rcade.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rcade/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rcade/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rcade/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rcade
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rcade/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rcade

