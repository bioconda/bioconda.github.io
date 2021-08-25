:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-parafetch'
.. highlight: bash

ucsc-parafetch
==============

.. conda:recipe:: ucsc-parafetch
   :replaces_section_title:
   :noindex:

   try to fetch url with multiple connections

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-parafetch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-parafetch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-parafetch/meta.yaml>`_

   


.. conda:package:: ucsc-parafetch

   |downloads_ucsc-parafetch| |docker_ucsc-parafetch|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1j,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-parafetch

   and update with::

      conda update ucsc-parafetch

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-parafetch:<tag>

   (see `ucsc-parafetch/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-parafetch| image:: https://img.shields.io/conda/dn/bioconda/ucsc-parafetch.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-parafetch
   :alt:   (downloads)
.. |docker_ucsc-parafetch| image:: https://quay.io/repository/biocontainers/ucsc-parafetch/status
   :target: https://quay.io/repository/biocontainers/ucsc-parafetch
.. _`ucsc-parafetch/tags`: https://quay.io/repository/biocontainers/ucsc-parafetch?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-parafetch";
        var versions = ["377","377","377","366","357"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-parafetch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-parafetch/README.html