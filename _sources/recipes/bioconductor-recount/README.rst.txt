.. _`bioconductor-recount`:

bioconductor-recount
====================

|downloads|

Explore and download data from the recount project available at https\:\/\/jhubiostatistics.shinyapps.io\/recount\/. Using the recount package you can download RangedSummarizedExperiment objects at the gene\, exon or exon\-exon junctions level\, the raw counts\, the phenotype metadata used\, the urls to the sample coverage bigWig files or the mean coverage bigWig file for a particular study. The RangedSummarizedExperiment objects can be used by different packages for performing differential expression analysis. Using http\:\/\/bioconductor.org\/packages\/derfinder you can perform annotation\-agnostic differential expression analyses with the data from the recount project as described at http\:\/\/www.nature.com\/nbt\/journal\/v35\/n4\/full\/nbt.3838.html.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/recount.html
Versions      1.6.3, 1.4.5, 1.4.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recount



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-recount

and update with::

   conda update bioconductor-recount



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-recount.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-recount/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-recount/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-recount/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-recount
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-recount/status
                :target: https://quay.io/repository/biocontainers/bioconductor-recount

