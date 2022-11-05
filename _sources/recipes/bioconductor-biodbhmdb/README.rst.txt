:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodbhmdb'
.. highlight: bash

bioconductor-biodbhmdb
======================

.. conda:recipe:: bioconductor-biodbhmdb
   :replaces_section_title:
   :noindex:

   biodbHmdb\, a library for connecting to the HMDB Database

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/biodbHmdb.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodbhmdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbhmdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbhmdb/meta.yaml>`_

   The biodbHmdb library is an extension of the biodb framework package that provides access to the HMDB Metabolites database. It allows to download the whole HMDB Metabolites database locally\, access entries and search for entries by name or description. A future version of this package will also include a search by mass and mass spectra annotation.


.. conda:package:: bioconductor-biodbhmdb

   |downloads_bioconductor-biodbhmdb| |docker_bioconductor-biodbhmdb|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biodb: ``>=1.6.0,<1.7.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-r6: 
   :depends r-rcpp: 
   :depends r-testthat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biodbhmdb

   and update with::

      conda update bioconductor-biodbhmdb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biodbhmdb:<tag>

   (see `bioconductor-biodbhmdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biodbhmdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodbhmdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodbhmdb
   :alt:   (downloads)
.. |docker_bioconductor-biodbhmdb| image:: https://quay.io/repository/biocontainers/bioconductor-biodbhmdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodbhmdb
.. _`bioconductor-biodbhmdb/tags`: https://quay.io/repository/biocontainers/bioconductor-biodbhmdb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodbhmdb";
        var versions = ["1.4.0","1.0.3","1.0.3","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodbhmdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodbhmdb/README.html