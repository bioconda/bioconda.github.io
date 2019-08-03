:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqsqc'
.. highlight: bash

bioconductor-seqsqc
===================

.. conda:recipe:: bioconductor-seqsqc
   :replaces_section_title:

   The SeqSQC is designed to identify problematic samples in NGS data\, including samples with gender mismatch\, contamination\, cryptic relatedness\, and population outlier.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/SeqSQC.html
   :license: GPL-3
   :recipe: /`bioconductor-seqsqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqsqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqsqc/meta.yaml>`_

   


.. conda:package:: bioconductor-seqsqc

   |downloads_bioconductor-seqsqc| |docker_bioconductor-seqsqc|

   :versions: 1.6.0-1, 1.4.0-0
   
   :depends bioconductor-experimenthub: >=1.10.0,<1.11.0
   :depends bioconductor-gdsfmt: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-snprelate: >=1.18.0,<1.19.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-e1071: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-rbokeh: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqsqc

   and update with::

      conda update bioconductor-seqsqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqsqc:<tag>

   (see `bioconductor-seqsqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqsqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqsqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqsqc
   :alt:   (downloads)
.. |docker_bioconductor-seqsqc| image:: https://quay.io/repository/biocontainers/bioconductor-seqsqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqsqc
.. _`bioconductor-seqsqc/tags`: https://quay.io/repository/biocontainers/bioconductor-seqsqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqsqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqsqc/README.html