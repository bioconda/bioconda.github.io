:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-basejump'
.. highlight: bash

r-basejump
==========

.. conda:recipe:: r-basejump
   :replaces_section_title:

   Base functions for bioinformatics and R package development.

   :homepage: https://basejump.acidgenomics.com/
   :developer docs: https://github.com/acidgenomics/basejump
   :license: MIT
   :recipe: /`r-basejump <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-basejump>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-basejump/meta.yaml>`_

   


.. conda:package:: r-basejump

   |downloads_r-basejump| |docker_r-basejump|

   :versions: 0.11.8-0, 0.11.7-0, 0.11.5-0, 0.10.9-1, 0.10.9-0, 0.9.11-0, 0.9.9-0, 0.7.2-1, 0.7.2-0, 0.5.9-0, 0.5.3-0, 0.1.1-0
   
   :depends bioconductor-biobase: >=2.44
   :depends bioconductor-biocgenerics: >=0.30
   :depends bioconductor-delayedarray: >=0.10
   :depends bioconductor-delayedmatrixstats: >=1.6
   :depends bioconductor-genomeinfodb: >=1.20
   :depends bioconductor-genomicranges: >=1.36
   :depends bioconductor-iranges: >=2.18
   :depends bioconductor-s4vectors: >=0.22
   :depends bioconductor-singlecellexperiment: >=1.6
   :depends bioconductor-summarizedexperiment: >=1.14
   :depends r-assertthat: >=0.2.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bioverbs: >=0.2.4
   :depends r-brio: >=0.3.2
   :depends r-dplyr: >=0.8
   :depends r-freerange: >=0.2.1
   :depends r-glue: >=1.3.1
   :depends r-goalie: >=0.3.3
   :depends r-knitr: >=1.22
   :depends r-magrittr: >=1.5
   :depends r-matrix: >=1.2
   :depends r-matrix.utils: >=0.9
   :depends r-matrixstats: >=0.54
   :depends r-purrr: >=0.3
   :depends r-rcpp: >=1.0.2
   :depends r-readr: >=1.3
   :depends r-reshape2: >=1.4
   :depends r-rlang: >=0.4
   :depends r-scales: >=1.0
   :depends r-sessioninfo: >=1.1
   :depends r-stringr: >=1.4
   :depends r-syntactic: >=0.2.3
   :depends r-tibble: >=2.1.1
   :depends r-tidyr: >=0.8
   :depends r-tidyselect: >=0.2
   :depends r-transformer: >=0.2.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-basejump

   and update with::

      conda update r-basejump

   or use the docker container::

      docker pull quay.io/biocontainers/r-basejump:<tag>

   (see `r-basejump/tags`_ for valid values for ``<tag>``)


.. |downloads_r-basejump| image:: https://img.shields.io/conda/dn/bioconda/r-basejump.svg?style=flat
   :target: https://anaconda.org/bioconda/r-basejump
   :alt:   (downloads)
.. |docker_r-basejump| image:: https://quay.io/repository/biocontainers/r-basejump/status
   :target: https://quay.io/repository/biocontainers/r-basejump
.. _`r-basejump/tags`: https://quay.io/repository/biocontainers/r-basejump?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-basejump/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-basejump/README.html