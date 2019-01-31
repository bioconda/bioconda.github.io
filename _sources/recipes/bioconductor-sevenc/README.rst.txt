.. _`bioconductor-sevenc`:

bioconductor-sevenc
===================

|downloads|

Chromatin looping is an essential feature of eukaryotic genomes and can bring regulatory sequences\, such as enhancers or transcription factor binding sites\, in the close physical proximity of regulated target genes. Here\, we provide sevenC\, an R package that uses protein binding signals from ChIP\-seq and sequence motif information to predict chromatin looping events. Cross\-linking of proteins that bind close to loop anchors result in ChIP\-seq signals at both anchor loci. These signals are used at CTCF motif pairs together with their distance and orientation to each other to predict whether they interact or not. The resulting chromatin loops might be used to associate enhancers or transcription factor binding sites \(e.g.\, ChIP\-seq peaks\) to regulated target genes.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/sevenC.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-sevenc/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-sevenc

and update with::

   conda update bioconductor-sevenc



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-sevenc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-sevenc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-sevenc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-sevenc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-sevenc
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-sevenc/status
                :target: https://quay.io/repository/biocontainers/bioconductor-sevenc

