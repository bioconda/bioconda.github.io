:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omadb'
.. highlight: bash

bioconductor-omadb
==================

.. conda:recipe:: bioconductor-omadb
   :replaces_section_title:
   :noindex:

   R wrapper for the OMA REST API

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/OmaDB.html
   :license: GPL-3
   :recipe: /`bioconductor-omadb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omadb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omadb/meta.yaml>`_

   A package for the orthology prediction data download from OMA database.


.. conda:package:: bioconductor-omadb

   |downloads_bioconductor-omadb| |docker_bioconductor-omadb|

   :versions:
      
      

      ``2.8.0-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-topgo: ``>=2.44.0,<2.45.0``
   :depends r-ape: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-httr: ``>=1.2.1``
   :depends r-jsonlite: 
   :depends r-plyr: ``>=1.8.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omadb

   and update with::

      conda update bioconductor-omadb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omadb:<tag>

   (see `bioconductor-omadb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omadb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omadb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omadb
   :alt:   (downloads)
.. |docker_bioconductor-omadb| image:: https://quay.io/repository/biocontainers/bioconductor-omadb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omadb
.. _`bioconductor-omadb/tags`: https://quay.io/repository/biocontainers/bioconductor-omadb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omadb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omadb/README.html