:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirage'
.. highlight: bash

bioconductor-mirage
===================

.. conda:recipe:: bioconductor-mirage
   :replaces_section_title:

   The package contains functions for inferece of target gene regulation by miRNA\, based on only target gene expression profile.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MiRaGE.html
   :license: GPL
   :recipe: /`bioconductor-mirage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirage/meta.yaml>`_
   :links: biotools: :biotools:`mirage`

   


.. conda:package:: bioconductor-mirage

   |downloads_bioconductor-mirage| |docker_bioconductor-mirage|

   :versions: 1.26.0-1, 1.24.1-0, 1.24.0-0, 1.22.0-0, 1.20.0-0, 1.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-biocmanager: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirage

   and update with::

      conda update bioconductor-mirage

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirage:<tag>

   (see `bioconductor-mirage/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirage
   :alt:   (downloads)
.. |docker_bioconductor-mirage| image:: https://quay.io/repository/biocontainers/bioconductor-mirage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirage
.. _`bioconductor-mirage/tags`: https://quay.io/repository/biocontainers/bioconductor-mirage?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirage/README.html