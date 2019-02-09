.. title:: Package Recipe 'bioconductor-genomation'
.. highlight: bash


bioconductor-genomation
=======================

.. conda:recipe:: bioconductor-genomation
   :replaces_section_title:

   A package for summary and annotation of genomic intervals. Users can visualize and quantify genomic intervals over pre\-defined functional regions\, such as promoters\, exons\, introns\, etc. The genomic intervals represent regions with a defined chromosome position\, which may be associated with a score\, such as aligned reads from HT\-seq experiments\, TF binding sites\, methylation scores\, etc. The package can use any tabular genomic feature data as long as it has minimal information on the locations of genomic intervals. In addition\, It can use BAM or BigWig files as input.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/genomation.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomation/meta.yaml>`_
   :links: biotools: :biotools:`genomation`

   


.. conda:package:: bioconductor-genomation

   |downloads_bioconductor-genomation| |docker_bioconductor-genomation|

   :versions: 1.14.0, 1.12.0, 1.10.0, 1.8.0, 1.6.0, 1.4.2, 1.2.2

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-impute` >=1.56.0,<1.57.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-seqpattern` >=1.14.0,<1.15.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-gridbase`  :conda:package:`r-matrixstats`  :conda:package:`r-plotrix`  :conda:package:`r-plyr`  :conda:package:`r-rcpp` >=0.12.14 :conda:package:`r-readr`  :conda:package:`r-reshape2`  :conda:package:`r-runit`  

   :required~by: |required_by_bioconductor-genomation|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomation

   and update with::

      conda update bioconductor-genomation

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genomation


.. |required_by_bioconductor-genomation| conda:required_by:: bioconductor-genomation
.. |downloads_bioconductor-genomation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomation.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genomation| image:: https://quay.io/repository/biocontainers/bioconductor-genomation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomation







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomation/README.html

