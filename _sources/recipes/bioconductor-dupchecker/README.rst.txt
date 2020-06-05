:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dupchecker'
.. highlight: bash

bioconductor-dupchecker
=======================

.. conda:recipe:: bioconductor-dupchecker
   :replaces_section_title:
   :noindex:

   a package for checking high\-throughput genomic data redundancy in meta\-analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/DupChecker.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dupchecker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dupchecker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dupchecker/meta.yaml>`_
   :links: biotools: :biotools:`dupchecker`

   Meta\-analysis has become a popular approach for high\-throughput genomic data analysis because it often can significantly increase power to detect biological signals or patterns in datasets. However\, when using public\-available databases for meta\-analysis\, duplication of samples is an often encountered problem\, especially for gene expression data. Not removing duplicates would make study results questionable. We developed a Bioconductor package DupChecker that efficiently identifies duplicated samples by generating MD5 fingerprints for raw data.


.. conda:package:: bioconductor-dupchecker

   |downloads_bioconductor-dupchecker| |docker_bioconductor-dupchecker|

   :versions:
      
      

      ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-r.utils: 
   :depends r-rcurl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dupchecker

   and update with::

      conda update bioconductor-dupchecker

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dupchecker:<tag>

   (see `bioconductor-dupchecker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dupchecker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dupchecker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dupchecker
   :alt:   (downloads)
.. |docker_bioconductor-dupchecker| image:: https://quay.io/repository/biocontainers/bioconductor-dupchecker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dupchecker
.. _`bioconductor-dupchecker/tags`: https://quay.io/repository/biocontainers/bioconductor-dupchecker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dupchecker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dupchecker/README.html