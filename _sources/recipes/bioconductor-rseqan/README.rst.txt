:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rseqan'
.. highlight: bash

bioconductor-rseqan
===================

.. conda:recipe:: bioconductor-rseqan
   :replaces_section_title:

   Headers from the SeqAn C\+\+ library for easy of usage in R.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RSeqAn.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-rseqan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rseqan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rseqan/meta.yaml>`_

   


.. conda:package:: bioconductor-rseqan

   |downloads_bioconductor-rseqan| |docker_bioconductor-rseqan|

   :versions: 1.4.0-0, 1.2.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rseqan

   and update with::

      conda update bioconductor-rseqan

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rseqan:<tag>

   (see `bioconductor-rseqan/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rseqan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rseqan.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rseqan| image:: https://quay.io/repository/biocontainers/bioconductor-rseqan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rseqan
.. _`bioconductor-rseqan/tags`: https://quay.io/repository/biocontainers/bioconductor-rseqan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rseqan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rseqan/README.html