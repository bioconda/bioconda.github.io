:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstats'
.. highlight: bash

bioconductor-msstats
====================

.. conda:recipe:: bioconductor-msstats
   :replaces_section_title:

   A set of tools for statistical relative protein significance analysis in DDA\, SRM and DIA experiments.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MSstats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstats/meta.yaml>`_

   


.. conda:package:: bioconductor-msstats

   |downloads_bioconductor-msstats| |docker_bioconductor-msstats|

   :versions: 3.18.0-0, 3.16.0-1, 3.14.1-0, 3.14.0-0
   
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-marray: >=1.64.0,<1.65.0
   :depends bioconductor-preprocesscore: >=1.48.0,<1.49.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-broom: 
   :depends r-data.table: 
   :depends r-dosnow: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gplots: 
   :depends r-lme4: 
   :depends r-mass: 
   :depends r-minpack.lm: 
   :depends r-purrr: 
   :depends r-randomforest: 
   :depends r-reshape2: 
   :depends r-snow: 
   :depends r-statmod: 
   :depends r-stringr: 
   :depends r-survival: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstats

   and update with::

      conda update bioconductor-msstats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstats:<tag>

   (see `bioconductor-msstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstats
   :alt:   (downloads)
.. |docker_bioconductor-msstats| image:: https://quay.io/repository/biocontainers/bioconductor-msstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstats
.. _`bioconductor-msstats/tags`: https://quay.io/repository/biocontainers/bioconductor-msstats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstats/README.html