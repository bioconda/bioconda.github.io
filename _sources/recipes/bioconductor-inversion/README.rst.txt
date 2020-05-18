:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-inversion'
.. highlight: bash

bioconductor-inversion
======================

.. conda:recipe:: bioconductor-inversion
   :replaces_section_title:

   Inversions in genotype data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/inveRsion.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-inversion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inversion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inversion/meta.yaml>`_
   :links: biotools: :biotools:`inversion`, doi: :doi:`10.1186/1471-2105-13-28`

   Package to find genetic inversions in genotype \(SNP array\) data.


.. conda:package:: bioconductor-inversion

   |downloads_bioconductor-inversion| |docker_bioconductor-inversion|

   :versions: 1.36.0-0, 1.34.0-0, 1.32.0-1, 1.32.0-0, 1.30.0-0, 1.28.0-0, 1.26.0-0
   
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-haplo.stats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-inversion

   and update with::

      conda update bioconductor-inversion

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-inversion:<tag>

   (see `bioconductor-inversion/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-inversion| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-inversion.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-inversion
   :alt:   (downloads)
.. |docker_bioconductor-inversion| image:: https://quay.io/repository/biocontainers/bioconductor-inversion/status
   :target: https://quay.io/repository/biocontainers/bioconductor-inversion
.. _`bioconductor-inversion/tags`: https://quay.io/repository/biocontainers/bioconductor-inversion?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-inversion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-inversion/README.html