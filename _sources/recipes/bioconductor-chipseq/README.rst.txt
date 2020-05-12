:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipseq'
.. highlight: bash

bioconductor-chipseq
====================

.. conda:recipe:: bioconductor-chipseq
   :replaces_section_title:

   chipseq\: A package for analyzing chipseq data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/chipseq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chipseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseq/meta.yaml>`_
   :links: biotools: :biotools:`chipseq`, doi: :doi:`10.1038/nmeth.3252`

   Tools for helping process short read data for chipseq experiments


.. conda:package:: bioconductor-chipseq

   |downloads_bioconductor-chipseq| |docker_bioconductor-chipseq|

   :versions: 1.38.0-0, 1.36.0-0, 1.34.0-1, 1.32.0-1, 1.32.0-0, 1.30.0-0, 1.28.0-0, 1.26.1-0, 1.24.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-shortread: >=1.46.0,<1.47.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-lattice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipseq

   and update with::

      conda update bioconductor-chipseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipseq:<tag>

   (see `bioconductor-chipseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipseq
   :alt:   (downloads)
.. |docker_bioconductor-chipseq| image:: https://quay.io/repository/biocontainers/bioconductor-chipseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipseq
.. _`bioconductor-chipseq/tags`: https://quay.io/repository/biocontainers/bioconductor-chipseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipseq/README.html