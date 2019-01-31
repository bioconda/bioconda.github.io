.. _`bioconductor-macpet`:

bioconductor-macpet
===================

|downloads|

The MACPET package can be used for complete interaction analysis for ChIA\-PET data. MACPET reads ChIA\-PET data in BAM or SAM format and separates the data into Self\-ligated\, Intra\- and Inter\-chromosomal PETs. Furthermore\, MACPET breaks the genome into regions and applies 2D mixture models for identifying candidate peaks\/binding sites using skewed generalized students\-t distributions \(SGT\). It then uses a local poisson model for finding significant binding sites. Finally it runs an additive interaction\-analysis model for calling for significant interactions between those peaks. MACPET is mainly written in C\+\+\, and it also supports the BiocParallel package.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/MACPET.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-macpet/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-macpet

and update with::

   conda update bioconductor-macpet



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-macpet.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-macpet/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-macpet/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-macpet/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-macpet
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-macpet/status
                :target: https://quay.io/repository/biocontainers/bioconductor-macpet

