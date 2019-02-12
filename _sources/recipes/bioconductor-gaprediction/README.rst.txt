:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gaprediction'
.. highlight: bash

bioconductor-gaprediction
=========================

.. conda:recipe:: bioconductor-gaprediction
   :replaces_section_title:

   \[GAprediction\] predicts gestational age using Illumina HumanMethylation450 CpG data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GAprediction.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-gaprediction <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gaprediction>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gaprediction/meta.yaml>`_
   :links: biotools: :biotools:`gaprediction`, doi: :doi:`10.1186/s13059-016-1063-4`

   


.. conda:package:: bioconductor-gaprediction

   |downloads_bioconductor-gaprediction| |docker_bioconductor-gaprediction|

   :versions: 1.8.1-0, 1.6.0-0, 1.4.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-glmnet: 
   
   :depends r-matrix: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gaprediction

   and update with::

      conda update bioconductor-gaprediction

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gaprediction:<tag>

   (see `bioconductor-gaprediction/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gaprediction| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gaprediction.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gaprediction| image:: https://quay.io/repository/biocontainers/bioconductor-gaprediction/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gaprediction
.. _`bioconductor-gaprediction/tags`: https://quay.io/repository/biocontainers/bioconductor-gaprediction?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gaprediction/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gaprediction/README.html