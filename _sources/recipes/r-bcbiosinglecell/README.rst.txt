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

   :versions: 0.4.5-0, 0.4.4-0, 0.4.3-0
   
   :depends bioconductor-biocgenerics: >=0.30
   :depends bioconductor-biocparallel: >=1.18
   :depends bioconductor-iranges: >=2.18.2
   :depends bioconductor-s4vectors: >=0.22
   :depends bioconductor-singlecellexperiment: >=1.6
   :depends bioconductor-summarizedexperiment: >=1.14
   :depends r-acidplots: >=0.2.16
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-basejump: >=0.11.15
   :depends r-bcbiobase: >=0.6.10
   :depends r-bioverbs: >=0.2.10
   :depends r-ggplot2: >=3.2
   :depends r-ggridges: >=0.5
   :depends r-goalie: >=0.3.8
   :depends r-knitr: >=1.24
   :depends r-r.utils: >=2.9
   :depends r-rlang: >=0.4
   :depends r-rmarkdown: >=1.14
   :depends r-sessioninfo: >=1.1
   :depends r-stringr: >=1.4
   :depends r-tidyverse: >=1.2
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