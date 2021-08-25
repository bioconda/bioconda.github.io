:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-genepredtogtf'
.. highlight: bash

ucsc-genepredtogtf
==================

.. conda:recipe:: ucsc-genepredtogtf
   :replaces_section_title:
   :noindex:

   Convert genePred table or file to gtf.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-genepredtogtf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredtogtf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredtogtf/meta.yaml>`_

   


.. conda:package:: ucsc-genepredtogtf

   |downloads_ucsc-genepredtogtf| |docker_ucsc-genepredtogtf|

   :versions:
      
      

      ``377-4``,  ``377-3``,  ``377-2``,  ``377-1``,  ``366-1``,  ``366-0``,  ``357-1``,  ``357-0``,  ``332-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1k,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-genepredtogtf

   and update with::

      conda update ucsc-genepredtogtf

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-genepredtogtf:<tag>

   (see `ucsc-genepredtogtf/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-genepredtogtf| image:: https://img.shields.io/conda/dn/bioconda/ucsc-genepredtogtf.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-genepredtogtf
   :alt:   (downloads)
.. |docker_ucsc-genepredtogtf| image:: https://quay.io/repository/biocontainers/ucsc-genepredtogtf/status
   :target: https://quay.io/repository/biocontainers/ucsc-genepredtogtf
.. _`ucsc-genepredtogtf/tags`: https://quay.io/repository/biocontainers/ucsc-genepredtogtf?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-genepredtogtf";
        var versions = ["377","377","377","377","366"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-genepredtogtf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-genepredtogtf/README.html