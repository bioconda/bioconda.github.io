.. _`rsem`:

rsem
====

|downloads|

RSEM is a software package for estimating gene and isoform expression levels from RNA\-Seq data. The RSEM package provides an user\-friendly interface\, supports threads for parallel computation of the EM algorithm\, single\-end and paired\-end read data\, quality scores\, variable\-length reads and RSPD estimation. In addition\, it provides posterior mean and 95\% credibility interval estimates for expression levels. For visualization\, It can generate BAM and Wiggle files in both transcript\-coordinate and genomic\-coordinate. Genomic\-coordinate files can be visualized by both UCSC Genome browser and Broad Institute\'s Integrative Genomics Viewer \(IGV\). Transcript\-coordinate files can be visualized by IGV. RSEM also has its own scripts to generate transcript read depth plots in pdf format. The unique feature of RSEM is\, the read depth plots can be stacked\, with read depth contributed to unique reads shown in black and contributed to multi\-reads shown in red. In addition\, models learned from data can also be visualized. Last but not least\, RSEM contains a simulator.

============= ===========
Home          https://deweylab.github.io/RSEM/
Versions      1.2.21, 1.2.22, 1.2.28, 1.3.0, 1.3.1
License       GPLv3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsem



Links         doi: :doi:`10.1186/1471-2105-12-323`, biotools: :biotools:`rsem`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install rsem

and update with::

   conda update rsem



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/rsem.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/rsem/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/rsem/README.html
.. |downloads| image:: https://anaconda.org/bioconda/rsem/badges/downloads.svg
               :target: https://anaconda.org/bioconda/rsem
.. |docker| image:: https://quay.io/repository/biocontainers/rsem/status
                :target: https://quay.io/repository/biocontainers/rsem

