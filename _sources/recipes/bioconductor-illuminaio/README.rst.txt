:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminaio'
.. highlight: bash

bioconductor-illuminaio
=======================

.. conda:recipe:: bioconductor-illuminaio
   :replaces_section_title:

   Tools for parsing Illumina\'s microarray output files\, including IDAT.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/illuminaio.html
   :license: GPL-2
   :recipe: /`bioconductor-illuminaio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminaio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminaio/meta.yaml>`_
   :links: biotools: :biotools:`illuminaio`

   


.. conda:package:: bioconductor-illuminaio

   |downloads_bioconductor-illuminaio| |docker_bioconductor-illuminaio|

   :versions: 0.24.0-0, 0.22.0-0, 0.20.0-0, 0.18.0-0, 0.14.0-0, 0.12.0-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-base64: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-illuminaio

   and update with::

      conda update bioconductor-illuminaio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-illuminaio:<tag>

   (see `bioconductor-illuminaio/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminaio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminaio.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-illuminaio| image:: https://quay.io/repository/biocontainers/bioconductor-illuminaio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminaio
.. _`bioconductor-illuminaio/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminaio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminaio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminaio/README.html