:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bcbiornaseq'
.. highlight: bash

r-bcbiornaseq
=============

.. conda:recipe:: r-bcbiornaseq
   :replaces_section_title:

   R package for bcbio RNA\-seq analysis.

   :homepage: http://bioinformatics.sph.harvard.edu/bcbioRNASeq/
   :developer docs: https://github.com/hbc/bcbioRNASeq
   :license: MIT
   :recipe: /`r-bcbiornaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiornaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiornaseq/meta.yaml>`_

   


.. conda:package:: r-bcbiornaseq

   |downloads_r-bcbiornaseq| |docker_r-bcbiornaseq|

   :versions: 0.3.26-0, 0.2.9-0, 0.2.8-0, 0.2.7-0, 0.2.4-0, 0.2.4a-0, 0.2.3a-0, 0.1.2-0
   
   :depends bioconductor-biocgenerics: >=0.30
   :depends bioconductor-clusterprofiler: >=3.12
   :depends bioconductor-degreport: >=1.20
   :depends bioconductor-deseq2: >=1.24
   :depends bioconductor-dose: >=3.10
   :depends bioconductor-edger: >=3.26
   :depends bioconductor-ensdb.hsapiens.v75: >=2.99
   :depends bioconductor-genomeinfodbdata: >=1.2
   :depends bioconductor-org.hs.eg.db: >=3.8
   :depends bioconductor-org.mm.eg.db: >=3.8
   :depends bioconductor-pathview: >=1.24
   :depends bioconductor-rhdf5: >=2.28
   :depends bioconductor-s4vectors: >=0.22
   :depends bioconductor-summarizedexperiment: >=1.14
   :depends bioconductor-tximport: >=1.12
   :depends bioconductor-vsn: >=3.52
   :depends r-acidplots: >=0.2.14
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-basejump: >=0.11.11
   :depends r-bcbiobase: >=0.6.10
   :depends r-bioverbs: >=0.2.7
   :depends r-cowplot: >=1.0
   :depends r-deseqanalysis: >=0.2.5
   :depends r-ggplot2: >=3.2
   :depends r-goalie: >=0.3.6
   :depends r-hexbin: >=1.27
   :depends r-knitr: >=1.24
   :depends r-rlang: >=0.4
   :depends r-rmarkdown: >=1.15
   :depends r-scales: >=1.0
   :depends r-sessioninfo: >=1.1
   :depends r-tidyverse: >=1.2
   :depends r-viridis: >=0.5
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bcbiornaseq

   and update with::

      conda update r-bcbiornaseq

   or use the docker container::

      docker pull quay.io/biocontainers/r-bcbiornaseq:<tag>

   (see `r-bcbiornaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bcbiornaseq| image:: https://img.shields.io/conda/dn/bioconda/r-bcbiornaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bcbiornaseq
   :alt:   (downloads)
.. |docker_r-bcbiornaseq| image:: https://quay.io/repository/biocontainers/r-bcbiornaseq/status
   :target: https://quay.io/repository/biocontainers/r-bcbiornaseq
.. _`r-bcbiornaseq/tags`: https://quay.io/repository/biocontainers/r-bcbiornaseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcbiornaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcbiornaseq/README.html