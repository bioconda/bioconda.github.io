:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-subseq'
.. highlight: bash

bioconductor-subseq
===================

.. conda:recipe:: bioconductor-subseq
   :replaces_section_title:
   :noindex:

   Subsampling of high\-throughput sequencing count data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/subSeq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-subseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-subseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-subseq/meta.yaml>`_
   :links: biotools: :biotools:`subseq`, doi: :doi:`10.1093/bioinformatics/btu552`

   Subsampling of high throughput sequencing count data for use in experiment design and analysis.


.. conda:package:: bioconductor-subseq

   |downloads_bioconductor-subseq| |docker_bioconductor-subseq|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-qvalue: ``>=2.22.0,<2.23.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-subseq

   and update with::

      conda update bioconductor-subseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-subseq:<tag>

   (see `bioconductor-subseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-subseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-subseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-subseq
   :alt:   (downloads)
.. |docker_bioconductor-subseq| image:: https://quay.io/repository/biocontainers/bioconductor-subseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-subseq
.. _`bioconductor-subseq/tags`: https://quay.io/repository/biocontainers/bioconductor-subseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-subseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-subseq/README.html