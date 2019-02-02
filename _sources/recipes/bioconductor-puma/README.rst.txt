.. _`bioconductor-puma`:

bioconductor-puma
=================

|downloads|

Most analyses of Affymetrix GeneChip data \(including tranditional 3\' arrays and exon arrays and Human Transcriptome Array 2.0\) are based on point estimates of expression levels and ignore the uncertainty of such estimates. By propagating uncertainty to downstream analyses we can improve results from microarray analyses. For the first time\, the puma package makes a suite of uncertainty propagation methods available to a general audience. In additon to calculte gene expression from Affymetrix 3\' arrays\, puma also provides methods to process exon arrays and produces gene and isoform expression for alternative splicing study. puma also offers improvements in terms of scope and speed of execution over previously available uncertainty propagation methods. Included are summarisation\, differential expression detection\, clustering and PCA methods\, together with useful plotting functions.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/puma.html
Versions      3.24.0, 3.22.0, 3.20.0
License       LGPL
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-puma/meta.yaml



Links         biotools: :biotools:`puma`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-puma

and update with::

   conda update bioconductor-puma



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-puma.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-puma/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-puma/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-puma/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-puma
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-puma/status
                :target: https://quay.io/repository/biocontainers/bioconductor-puma

