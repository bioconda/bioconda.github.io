.. title:: Package Recipe 'bioconductor-dmrseq'
.. highlight: bash


bioconductor-dmrseq
===================

.. conda:recipe:: bioconductor-dmrseq
   :replaces_section_title:

   This package implements an approach for scanning the genome to detect and perform accurate inference on differentially methylated regions from Whole Genome Bisulfite Sequencing data. The method is based on comparing detected regions to a pooled null distribution\, that can be implemented even when as few as two samples per population are available. Region\-level statistics are obtained by fitting a generalized least squares \(GLS\) regression model with a nested autoregressive correlated error structure for the effect of interest on transformed methylation proportions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/dmrseq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-dmrseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrseq/meta.yaml>`_

   


.. conda:package:: bioconductor-dmrseq

   |downloads_bioconductor-dmrseq| |docker_bioconductor-dmrseq|

   :versions: 1.2.1

   :depends: :conda:package:`bioconductor-annotationhub` >=2.14.0,<2.15.0 :conda:package:`bioconductor-annotatr` >=1.8.0,<1.9.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-bsseq` >=1.18.0,<1.19.0 :conda:package:`bioconductor-bumphunter` >=1.24.0,<1.25.0 :conda:package:`bioconductor-delayedmatrixstats` >=1.4.0,<1.5.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-locfit`  :conda:package:`r-matrixstats`  :conda:package:`r-nlme`  :conda:package:`r-outliers`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-dmrseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dmrseq

   and update with::

      conda update bioconductor-dmrseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dmrseq


.. |required_by_bioconductor-dmrseq| conda:required_by:: bioconductor-dmrseq
.. |downloads_bioconductor-dmrseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmrseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dmrseq| image:: https://quay.io/repository/biocontainers/bioconductor-dmrseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmrseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmrseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmrseq/README.html

