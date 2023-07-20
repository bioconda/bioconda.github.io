:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msbackendsql'
.. highlight: bash

bioconductor-msbackendsql
=========================

.. conda:recipe:: bioconductor-msbackendsql
   :replaces_section_title:
   :noindex:

   SQL\-based Mass Spectrometry Data Backend

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MsBackendSql.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msbackendsql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendsql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendsql/meta.yaml>`_

   SQL\-based mass spectrometry \(MS\) data backend supporting also storange and handling of very large data sets. Objects from this package are supposed to be used with the Spectra Bioconductor package. Through the MsBackendSql with its minimal memory footprint\, this package thus provides an alternative MS data representation for very large or remote MS data sets.


.. conda:package:: bioconductor-msbackendsql

   |downloads_bioconductor-msbackendsql| |docker_bioconductor-msbackendsql|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-mscoreutils: ``>=1.12.0,<1.13.0``
   :depends bioconductor-protgenerics: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-spectra: ``>=1.10.0,<1.11.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dbi: 
   :depends r-progress: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msbackendsql

   and update with::

      conda update bioconductor-msbackendsql

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msbackendsql:<tag>

   (see `bioconductor-msbackendsql/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msbackendsql| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msbackendsql.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msbackendsql
   :alt:   (downloads)
.. |docker_bioconductor-msbackendsql| image:: https://quay.io/repository/biocontainers/bioconductor-msbackendsql/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msbackendsql
.. _`bioconductor-msbackendsql/tags`: https://quay.io/repository/biocontainers/bioconductor-msbackendsql?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msbackendsql";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msbackendsql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msbackendsql/README.html