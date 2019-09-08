:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-deseqanalysis'
.. highlight: bash

r-deseqanalysis
===============

.. conda:recipe:: r-deseqanalysis
   :replaces_section_title:

   Toolkit for performing differential expression with DESeq2.

   :homepage: https://deseqanalysis.acidgenomics.com/
   :developer docs: https://github.com/acidgenomics/DESeqAnalysis
   :license: MIT
   :recipe: /`r-deseqanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deseqanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deseqanalysis/meta.yaml>`_

   


.. conda:package:: r-deseqanalysis

   |downloads_r-deseqanalysis| |docker_r-deseqanalysis|

   :versions: 0.2.5-0
   
   :depends bioconductor-biocgenerics: >=0.30
   :depends bioconductor-deseq2: >=1.24
   :depends bioconductor-iranges: >=2.18.2
   :depends bioconductor-s4vectors: >=0.22
   :depends bioconductor-summarizedexperiment: >=1.14
   :depends r-acidplots: >=0.2.14
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-basejump: >=0.11.11
   :depends r-bioverbs: >=0.2.7
   :depends r-cowplot: >=0.9
   :depends r-ggplot2: >=3.2
   :depends r-goalie: >=0.3.6
   :depends r-knitr: >=1.24
   :depends r-rlang: >=0.4
   :depends r-stringr: >=1.4
   :depends r-upsetr: >=1.4
   :depends r-viridis: >=0.5
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-deseqanalysis

   and update with::

      conda update r-deseqanalysis

   or use the docker container::

      docker pull quay.io/biocontainers/r-deseqanalysis:<tag>

   (see `r-deseqanalysis/tags`_ for valid values for ``<tag>``)


.. |downloads_r-deseqanalysis| image:: https://img.shields.io/conda/dn/bioconda/r-deseqanalysis.svg?style=flat
   :target: https://anaconda.org/bioconda/r-deseqanalysis
   :alt:   (downloads)
.. |docker_r-deseqanalysis| image:: https://quay.io/repository/biocontainers/r-deseqanalysis/status
   :target: https://quay.io/repository/biocontainers/r-deseqanalysis
.. _`r-deseqanalysis/tags`: https://quay.io/repository/biocontainers/r-deseqanalysis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-deseqanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-deseqanalysis/README.html