:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-restfulse'
.. highlight: bash

bioconductor-restfulse
======================

.. conda:recipe:: bioconductor-restfulse
   :replaces_section_title:
   :noindex:

   Access matrix\-like HDF5 server content or BigQuery content through a SummarizedExperiment interface

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/restfulSE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-restfulse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-restfulse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-restfulse/meta.yaml>`_

   This package provides functions and classes to interface with remote data stores by operating on SummarizedExperiment\-like objects.


.. conda:package:: bioconductor-restfulse

   |downloads_bioconductor-restfulse| |docker_bioconductor-restfulse|

   :versions:
      
      

      ``1.16.0-0``,  ``1.13.1-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-delayedarray: ``>=0.20.0,<0.21.0``
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-go.db: ``>=3.14.0,<3.15.0``
   :depends bioconductor-rhdf5client: ``>=1.16.0,<1.17.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bigrquery: 
   :depends r-dbi: 
   :depends r-dplyr: ``>=0.7.1``
   :depends r-magrittr: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-restfulse

   and update with::

      conda update bioconductor-restfulse

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-restfulse:<tag>

   (see `bioconductor-restfulse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-restfulse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-restfulse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-restfulse
   :alt:   (downloads)
.. |docker_bioconductor-restfulse| image:: https://quay.io/repository/biocontainers/bioconductor-restfulse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-restfulse
.. _`bioconductor-restfulse/tags`: https://quay.io/repository/biocontainers/bioconductor-restfulse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-restfulse";
        var versions = ["1.16.0","1.13.1","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-restfulse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-restfulse/README.html