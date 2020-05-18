:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-massir'
.. highlight: bash

bioconductor-massir
===================

.. conda:recipe:: bioconductor-massir
   :replaces_section_title:

   massiR\: MicroArray Sample Sex Identifier

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/massiR.html
   :license: GPL-3
   :recipe: /`bioconductor-massir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-massir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-massir/meta.yaml>`_
   :links: biotools: :biotools:`massir`

   Predicts the sex of samples in gene expression microarray datasets


.. conda:package:: bioconductor-massir

   |downloads_bioconductor-massir| |docker_bioconductor-massir|

   :versions: 1.24.0-0, 1.22.0-0, 1.20.0-1, 1.18.0-0, 1.16.0-0, 1.14.0-0, 1.12.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-cluster: 
   :depends r-diptest: 
   :depends r-gplots: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-massir

   and update with::

      conda update bioconductor-massir

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-massir:<tag>

   (see `bioconductor-massir/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-massir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-massir.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-massir
   :alt:   (downloads)
.. |docker_bioconductor-massir| image:: https://quay.io/repository/biocontainers/bioconductor-massir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-massir
.. _`bioconductor-massir/tags`: https://quay.io/repository/biocontainers/bioconductor-massir?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-massir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-massir/README.html