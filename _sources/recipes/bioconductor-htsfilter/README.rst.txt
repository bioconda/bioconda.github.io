:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-htsfilter'
.. highlight: bash

bioconductor-htsfilter
======================

.. conda:recipe:: bioconductor-htsfilter
   :replaces_section_title:

   This package implements a filtering procedure for replicated transcriptome sequencing data based on a global Jaccard similarity index in order to identify genes with low\, constant levels of expression across one or more experimental conditions.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/HTSFilter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-htsfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htsfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htsfilter/meta.yaml>`_
   :links: biotools: :biotools:`htsfilter`

   


.. conda:package:: bioconductor-htsfilter

   |downloads_bioconductor-htsfilter| |docker_bioconductor-htsfilter|

   :versions: 1.22.1-0, 1.22.0-0, 1.20.0-0, 1.18.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-deseq: >=1.34.0,<1.35.0
   :depends bioconductor-deseq2: >=1.22.0,<1.23.0
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-htsfilter

   and update with::

      conda update bioconductor-htsfilter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-htsfilter:<tag>

   (see `bioconductor-htsfilter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-htsfilter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-htsfilter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-htsfilter
   :alt:   (downloads)
.. |docker_bioconductor-htsfilter| image:: https://quay.io/repository/biocontainers/bioconductor-htsfilter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-htsfilter
.. _`bioconductor-htsfilter/tags`: https://quay.io/repository/biocontainers/bioconductor-htsfilter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-htsfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-htsfilter/README.html