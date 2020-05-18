:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mipp'
.. highlight: bash

bioconductor-mipp
=================

.. conda:recipe:: bioconductor-mipp
   :replaces_section_title:

   Misclassification Penalized Posterior Classification

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MiPP.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mipp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mipp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mipp/meta.yaml>`_
   :links: biotools: :biotools:`mipp`, doi: :doi:`10.1093/bioinformatics/bti1020`

   This package finds optimal sets of genes that seperate samples into two or more classes.


.. conda:package:: bioconductor-mipp

   |downloads_bioconductor-mipp| |docker_bioconductor-mipp|

   :versions: 1.60.0-0, 1.58.0-0, 1.56.0-1, 1.54.0-0, 1.52.0-0, 1.50.0-0, 1.48.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-e1071: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mipp

   and update with::

      conda update bioconductor-mipp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mipp:<tag>

   (see `bioconductor-mipp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mipp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mipp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mipp
   :alt:   (downloads)
.. |docker_bioconductor-mipp| image:: https://quay.io/repository/biocontainers/bioconductor-mipp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mipp
.. _`bioconductor-mipp/tags`: https://quay.io/repository/biocontainers/bioconductor-mipp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mipp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mipp/README.html