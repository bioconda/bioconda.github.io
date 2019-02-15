:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocparallel'
.. highlight: bash

bioconductor-biocparallel
=========================

.. conda:recipe:: bioconductor-biocparallel
   :replaces_section_title:

   This package provides modified versions and novel implementation of functions for parallel evaluation\, tailored to use with Bioconductor objects.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BiocParallel.html
   :license: GPL-2 | GPL-3
   :recipe: /`bioconductor-biocparallel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocparallel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocparallel/meta.yaml>`_
   :links: biotools: :biotools:`biocparallel`, doi: :doi:`10.1214/14-STS476`

   


.. conda:package:: bioconductor-biocparallel

   |downloads_bioconductor-biocparallel| |docker_bioconductor-biocparallel|

   :versions: 1.16.2-1, 1.16.2-0, 1.14.2-0, 1.12.0-1, 1.12.0-0, 1.10.1-0, 1.6.6-1, 1.6.6-0, 1.5.0-0, 1.4.3-0, 1.4.0-0, 1.2.22-0
   
   :depends libcxx: >=4.0.1
   
   :depends libgfortran: >=3.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-bh: 
   
   :depends r-futile.logger: 
   
   :depends r-snow: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocparallel

   and update with::

      conda update bioconductor-biocparallel

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biocparallel:<tag>

   (see `bioconductor-biocparallel/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocparallel| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocparallel.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biocparallel| image:: https://quay.io/repository/biocontainers/bioconductor-biocparallel/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocparallel
.. _`bioconductor-biocparallel/tags`: https://quay.io/repository/biocontainers/bioconductor-biocparallel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocparallel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocparallel/README.html