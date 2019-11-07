:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-muscle'
.. highlight: bash

bioconductor-muscle
===================

.. conda:recipe:: bioconductor-muscle
   :replaces_section_title:

   Multiple Sequence Alignment with MUSCLE

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/muscle.html
   :license: Unlimited
   :recipe: /`bioconductor-muscle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muscle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muscle/meta.yaml>`_

   MUSCLE performs multiple sequence alignments of nucleotide or amino acid sequences.


.. conda:package:: bioconductor-muscle

   |downloads_bioconductor-muscle| |docker_bioconductor-muscle|

   :versions: 3.28.0-0, 3.26.0-1, 3.24.0-0
   
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-muscle

   and update with::

      conda update bioconductor-muscle

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-muscle:<tag>

   (see `bioconductor-muscle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-muscle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-muscle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-muscle
   :alt:   (downloads)
.. |docker_bioconductor-muscle| image:: https://quay.io/repository/biocontainers/bioconductor-muscle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-muscle
.. _`bioconductor-muscle/tags`: https://quay.io/repository/biocontainers/bioconductor-muscle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-muscle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-muscle/README.html