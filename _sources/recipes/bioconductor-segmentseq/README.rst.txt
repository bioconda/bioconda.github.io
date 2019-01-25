.. _`bioconductor-segmentseq`:

bioconductor-segmentseq
=======================

|downloads|

High\-throughput sequencing technologies allow the production of large volumes of short sequences\, which can be aligned to the genome to create a set of matches to the genome. By looking for regions of the genome which to which there are high densities of matches\, we can infer a segmentation of the genome into regions of biological significance. The methods in this package allow the simultaneous segmentation of data from multiple samples\, taking into account replicate data\, in order to create a consensus segmentation. This has obvious applications in a number of classes of sequencing experiments\, particularly in the discovery of small RNA loci and novel mRNA transcriptome discovery.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/segmentSeq.html
Versions      2.14.0, 2.12.0, 2.10.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-segmentseq/meta.yaml



Links         biotools: :biotools:`segmentseq`, doi: :doi:`10.1093/bioinformatics/btr687`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-segmentseq

and update with::

   conda update bioconductor-segmentseq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-segmentseq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-segmentseq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-segmentseq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-segmentseq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-segmentseq
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-segmentseq/status
                :target: https://quay.io/repository/biocontainers/bioconductor-segmentseq

