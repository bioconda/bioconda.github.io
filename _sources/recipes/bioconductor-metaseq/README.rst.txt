:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metaseq'
.. highlight: bash

bioconductor-metaseq
====================

.. conda:recipe:: bioconductor-metaseq
   :replaces_section_title:
   :noindex:

   Meta\-analysis of RNA\-Seq count data in multiple studies

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/metaSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaseq/meta.yaml>`_
   :links: biotools: :biotools:`metaseq`, doi: :doi:`10.1038/nmeth.3252`

   The probabilities by one\-sided NOISeq are combined by Fisher\'s method or Stouffer\'s method


.. conda:package:: bioconductor-metaseq

   |downloads_bioconductor-metaseq| |docker_bioconductor-metaseq|

   :versions:
      
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      

   
   :depends bioconductor-noiseq: ``>=2.34.0,<2.35.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=9.0.1``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rcpp: 
   :depends r-snow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metaseq

   and update with::

      conda update bioconductor-metaseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metaseq:<tag>

   (see `bioconductor-metaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metaseq
   :alt:   (downloads)
.. |docker_bioconductor-metaseq| image:: https://quay.io/repository/biocontainers/bioconductor-metaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metaseq
.. _`bioconductor-metaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-metaseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metaseq/README.html