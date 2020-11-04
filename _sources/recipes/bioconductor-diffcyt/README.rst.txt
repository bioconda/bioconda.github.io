:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffcyt'
.. highlight: bash

bioconductor-diffcyt
====================

.. conda:recipe:: bioconductor-diffcyt
   :replaces_section_title:
   :noindex:

   Differential discovery in high\-dimensional cytometry via high\-resolution clustering

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/diffcyt.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-diffcyt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffcyt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffcyt/meta.yaml>`_

   Statistical methods for differential discovery analyses in high\-dimensional cytometry data \(including flow cytometry\, mass cytometry or CyTOF\, and oligonucleotide\-tagged cytometry\)\, based on a combination of high\-resolution clustering and empirical Bayes moderated tests adapted from transcriptomics.


.. conda:package:: bioconductor-diffcyt

   |downloads_bioconductor-diffcyt| |docker_bioconductor-diffcyt|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.6-0``,  ``1.6.0-0``,  ``1.4.3-0``,  ``1.2.23-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.6.0,<2.7.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-flowcore: ``>=2.2.0,<2.3.0``
   :depends bioconductor-flowsom: ``>=1.22.0,<1.23.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
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
   :target: https://anaconda.org/bioconda/bioconductor-diffcyt
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