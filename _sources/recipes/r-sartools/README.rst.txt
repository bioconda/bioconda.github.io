:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sartools'
.. highlight: bash

r-sartools
==========

.. conda:recipe:: r-sartools
   :replaces_section_title:

   Statistical Analysis of RNA\-Seq data

   :homepage: https://github.com/PF2-pasteur-fr/SARTools
   :license: GPL-2
   :recipe: /`r-sartools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sartools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sartools/meta.yaml>`_
   :links: biotools: :biotools:`sartools`

   SARTools provides R tools and an environment for the statistical 
   analysis of RNA\-Seq projects load and clean data\, produce figures\, 
   perform statistical analysis\/testing with DESeq2 or edgeR\, export 
   results and create final report.



.. conda:package:: r-sartools

   |downloads_r-sartools| |docker_r-sartools|

   :versions: 1.7.1-1, 1.7.1-0, 1.6.9-0, 1.6.8-0, 1.6.6-3, 1.6.6-2, 1.6.6-1, 1.6.3-0, 1.6.0-0, 1.5.1-0, 1.4.1-0, 1.3.2-0, 1.2.0-0
   
   :depends bioconductor-deseq2: >=1.12.0
   :depends bioconductor-edger: >=3.12.0
   :depends bioconductor-summarizedexperiment: >=1.6
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bit64: 
   :depends r-blob: 
   :depends r-ggally: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-kableextra: 
   :depends r-knitr: 
   :depends r-optparse: 
   :depends r-rmarkdown: >=1.4
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sartools

   and update with::

      conda update r-sartools

   or use the docker container::

      docker pull quay.io/biocontainers/r-sartools:<tag>

   (see `r-sartools/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sartools| image:: https://img.shields.io/conda/dn/bioconda/r-sartools.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sartools
   :alt:   (downloads)
.. |docker_r-sartools| image:: https://quay.io/repository/biocontainers/r-sartools/status
   :target: https://quay.io/repository/biocontainers/r-sartools
.. _`r-sartools/tags`: https://quay.io/repository/biocontainers/r-sartools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sartools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sartools/README.html