:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicdatacommons'
.. highlight: bash

bioconductor-genomicdatacommons
===============================

.. conda:recipe:: bioconductor-genomicdatacommons
   :replaces_section_title:
   :noindex:

   NIH \/ NCI Genomic Data Commons Access

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/GenomicDataCommons.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicdatacommons <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicdatacommons>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicdatacommons/meta.yaml>`_

   Programmatically access the NIH \/ NCI Genomic Data Commons RESTful service.


.. conda:package:: bioconductor-genomicdatacommons

   |downloads_bioconductor-genomicdatacommons| |docker_bioconductor-genomicdatacommons|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.3-0``,  ``1.2.0-0``,  ``1.0.5-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-rappdirs: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicdatacommons

   and update with::

      conda update bioconductor-genomicdatacommons

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicdatacommons:<tag>

   (see `bioconductor-genomicdatacommons/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicdatacommons| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicdatacommons.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicdatacommons
   :alt:   (downloads)
.. |docker_bioconductor-genomicdatacommons| image:: https://quay.io/repository/biocontainers/bioconductor-genomicdatacommons/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicdatacommons
.. _`bioconductor-genomicdatacommons/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicdatacommons?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicdatacommons/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicdatacommons/README.html