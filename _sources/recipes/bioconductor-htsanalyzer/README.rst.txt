.. _`bioconductor-htsanalyzer`:

bioconductor-htsanalyzer
========================

|downloads|

This package provides classes and methods for gene set over\-representation\, enrichment and network analyses on high\-throughput screens. The over\-representation analysis is performed based on hypergeometric tests. The enrichment analysis is based on the GSEA algorithm \(Subramanian et al. PNAS 2005\). The network analysis identifies enriched subnetworks based on algorithms from the BioNet package \(Beisser et al.\, Bioinformatics 2010\). A pipeline is also specifically designed for cellHTS2 object to perform integrative network analyses of high\-throughput RNA interference screens. The users can build their own analysis pipeline for their own data set based on this package.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/HTSanalyzeR.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-htsanalyzer/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-htsanalyzer

and update with::

   conda update bioconductor-htsanalyzer



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-htsanalyzer.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-htsanalyzer/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-htsanalyzer/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-htsanalyzer/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-htsanalyzer
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-htsanalyzer/status
                :target: https://quay.io/repository/biocontainers/bioconductor-htsanalyzer

