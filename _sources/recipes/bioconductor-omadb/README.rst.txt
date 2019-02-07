.. title:: Package Recipe 'bioconductor-omadb'
.. highlight: bash


bioconductor-omadb
==================

.. conda:recipe:: bioconductor-omadb
   :replaces_section_title:

   A package for the orthology prediction data download from OMA database.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/OmaDB.html
   :license: GPL-2
   :recipe: /`bioconductor-omadb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omadb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omadb/meta.yaml>`_

   


.. conda:package:: bioconductor-omadb

   |downloads_bioconductor-omadb| |docker_bioconductor-omadb|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-topgo` >=2.34.0,<2.35.0 :conda:package:`r-ape`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-httr` >=1.2.1 :conda:package:`r-jsonlite`  :conda:package:`r-plyr` >=1.8.4 

   :required~by: |required_by_bioconductor-omadb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omadb

   and update with::

      conda update bioconductor-omadb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-omadb


.. |required_by_bioconductor-omadb| conda:required_by:: bioconductor-omadb
.. |downloads_bioconductor-omadb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omadb.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-omadb| image:: https://quay.io/repository/biocontainers/bioconductor-omadb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omadb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omadb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omadb/README.html

