:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsubread'
.. highlight: bash

bioconductor-rsubread
=====================

.. conda:recipe:: bioconductor-rsubread
   :replaces_section_title:

   Alignment\, quantification and analysis of second and third generation sequencing data. Includes functionality for read mapping\, read counting\, SNP calling\, structural variant detection and gene fusion discovery. Can be applied to all major sequencing techologies and to both short and long sequence reads.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/Rsubread.html
   :license: GPL-3
   :recipe: /`bioconductor-rsubread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsubread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsubread/meta.yaml>`_
   :links: biotools: :biotools:`rsubread`

   


.. conda:package:: bioconductor-rsubread

   |downloads_bioconductor-rsubread| |docker_bioconductor-rsubread|

   :versions: 1.34.0-0, 1.32.4-0, 1.32.2-0, 1.30.9-0, 1.28.1-0, 1.28.0-0, 1.26.1-0, 1.25.2-0, 1.23.0-0, 1.22.1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rsubread

   and update with::

      conda update bioconductor-rsubread

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rsubread:<tag>

   (see `bioconductor-rsubread/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rsubread| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsubread.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rsubread
   :alt:   (downloads)
.. |docker_bioconductor-rsubread| image:: https://quay.io/repository/biocontainers/bioconductor-rsubread/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsubread
.. _`bioconductor-rsubread/tags`: https://quay.io/repository/biocontainers/bioconductor-rsubread?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsubread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsubread/README.html