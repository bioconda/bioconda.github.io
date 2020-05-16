:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bcbiosinglecell'
.. highlight: bash

r-bcbiosinglecell
=================

.. conda:recipe:: r-bcbiosinglecell
   :replaces_section_title:

   R package for bcbio single\-cell RNA\-seq analysis.

   :homepage: https://bioinformatics.sph.harvard.edu/bcbioSingleCell/
   :developer docs: https://github.com/hbc/bcbioSingleCell
   :license: MIT
   :recipe: /`r-bcbiosinglecell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiosinglecell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiosinglecell/meta.yaml>`_

   


.. conda:package:: r-bcbiosinglecell

   |downloads_r-bcbiosinglecell| |docker_r-bcbiosinglecell|

   :versions: 0.4.12-0, 0.4.11-0, 0.4.10-1, 0.4.10-0, 0.4.9-0, 0.4.7-0, 0.4.6-0, 0.4.5-0, 0.4.4-0, 0.4.3-0
   
   :depends bioconductor-biocgenerics: >=0.32
   :depends bioconductor-biocparallel: >=1.20
   :depends bioconductor-biocstyle: >=2.14
   :depends bioconductor-iranges: >=2.20
   :depends bioconductor-s4vectors: >=0.24
   :depends bioconductor-singlecellexperiment: >=1.8
   :depends bioconductor-summarizedexperiment: >=1.16
   :depends r-acidgenerics: >=0.3.4
   :depends r-acidplots: >=0.2.23
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-basejump: >=0.12.2
   :depends r-bcbiobase: >=0.6.13
   :depends r-cli: >=2.0
   :depends r-ggplot2: >=3.2
   :depends r-ggridges: >=0.5
   :depends r-goalie: >=0.4.2
   :depends r-knitr: >=1.27
   :depends r-r.utils: >=2.9
   :depends r-rlang: >=0.4
   :depends r-rmarkdown: >=2.0
   :depends r-sessioninfo: >=1.1
   :depends r-stringr: >=1.4
   :depends r-tidyverse: >=1.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bcbiosinglecell

   and update with::

      conda update r-bcbiosinglecell

   or use the docker container::

      docker pull quay.io/biocontainers/r-bcbiosinglecell:<tag>

   (see `r-bcbiosinglecell/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bcbiosinglecell| image:: https://img.shields.io/conda/dn/bioconda/r-bcbiosinglecell.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bcbiosinglecell
   :alt:   (downloads)
.. |docker_r-bcbiosinglecell| image:: https://quay.io/repository/biocontainers/r-bcbiosinglecell/status
   :target: https://quay.io/repository/biocontainers/r-bcbiosinglecell
.. _`r-bcbiosinglecell/tags`: https://quay.io/repository/biocontainers/r-bcbiosinglecell?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcbiosinglecell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcbiosinglecell/README.html