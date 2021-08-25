:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-pslsomerecords'
.. highlight: bash

ucsc-pslsomerecords
===================

.. conda:recipe:: ucsc-pslsomerecords
   :replaces_section_title:
   :noindex:

   Extract multiple psl records

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslsomerecords <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslsomerecords>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslsomerecords/meta.yaml>`_

   


.. conda:package:: ucsc-pslsomerecords

   |downloads_ucsc-pslsomerecords| |docker_ucsc-pslsomerecords|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1k,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslsomerecords

   and update with::

      conda update ucsc-pslsomerecords

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-pslsomerecords:<tag>

   (see `ucsc-pslsomerecords/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-pslsomerecords| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslsomerecords.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-pslsomerecords
   :alt:   (downloads)
.. |docker_ucsc-pslsomerecords| image:: https://quay.io/repository/biocontainers/ucsc-pslsomerecords/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslsomerecords
.. _`ucsc-pslsomerecords/tags`: https://quay.io/repository/biocontainers/ucsc-pslsomerecords?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-pslsomerecords";
        var versions = ["377","377","377","366"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslsomerecords/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslsomerecords/README.html