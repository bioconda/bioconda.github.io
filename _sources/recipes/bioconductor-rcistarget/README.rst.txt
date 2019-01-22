.. _`bioconductor-rcistarget`:

bioconductor-rcistarget
=======================

|downloads|

RcisTarget identifies transcription factor binding motifs \(TFBS\) over\-represented on a gene list. In a first step\, RcisTarget selects DNA motifs that are significantly over\-represented in the surroundings of the transcription start site \(TSS\) of the genes in the gene\-set. This is achieved by using a database that contains genome\-wide cross\-species rankings for each motif. The motifs that are then annotated to TFs and those that have a high Normalized Enrichment Score \(NES\) are retained. Finally\, for each motif and gene\-set\, RcisTarget predicts the candidate target genes \(i.e. genes in the gene\-set that are ranked above the leading edge\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/RcisTarget.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcistarget



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rcistarget

and update with::

   conda update bioconductor-rcistarget



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rcistarget.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rcistarget/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rcistarget/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rcistarget/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rcistarget
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rcistarget/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rcistarget

