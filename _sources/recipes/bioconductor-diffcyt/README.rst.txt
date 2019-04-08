:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffcyt'
.. highlight: bash

bioconductor-diffcyt
====================

.. conda:recipe:: bioconductor-diffcyt
   :replaces_section_title:

   Statistical methods for differential discovery analyses in high\-dimensional cytometry data \(including flow cytometry\, mass cytometry or CyTOF\, and oligonucleotide\-tagged cytometry\)\, based on \(i\) high\-resolution clustering and \(ii\) empirical Bayes moderated tests adapted from transcriptomics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/diffcyt.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-diffcyt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffcyt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffcyt/meta.yaml>`_

   


.. conda:package:: bioconductor-diffcyt

   |downloads_bioconductor-diffcyt| |docker_bioconductor-diffcyt|

   :versions: 1.2.0-0
   
   :depends bioconductor-complexheatmap: >=1.20.0,<1.21.0
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   :depends bioconductor-flowcore: >=1.48.0,<1.49.0
   :depends bioconductor-flowsom: >=1.14.0,<1.15.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-circlize: 
   :depends r-dplyr: 
   :depends r-lme4: 
   :depends r-magrittr: 
   :depends r-multcomp: 
   :depends r-reshape2: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diffcyt

   and update with::

      conda update bioconductor-diffcyt

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diffcyt:<tag>

   (see `bioconductor-diffcyt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diffcyt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffcyt.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-diffcyt| image:: https://quay.io/repository/biocontainers/bioconductor-diffcyt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffcyt
.. _`bioconductor-diffcyt/tags`: https://quay.io/repository/biocontainers/bioconductor-diffcyt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffcyt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffcyt/README.html