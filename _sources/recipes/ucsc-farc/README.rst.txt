:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-farc'
.. highlight: bash

ucsc-farc
=========

.. conda:recipe:: ucsc-farc
   :replaces_section_title:
   :noindex:

   Reverse complement a FA file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-farc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-farc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-farc/meta.yaml>`_

   


.. conda:package:: ucsc-farc

   |downloads_ucsc-farc| |docker_ucsc-farc|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1k,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-farc

   and update with::

      conda update ucsc-farc

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-farc:<tag>

   (see `ucsc-farc/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-farc| image:: https://img.shields.io/conda/dn/bioconda/ucsc-farc.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-farc
   :alt:   (downloads)
.. |docker_ucsc-farc| image:: https://quay.io/repository/biocontainers/ucsc-farc/status
   :target: https://quay.io/repository/biocontainers/ucsc-farc
.. _`ucsc-farc/tags`: https://quay.io/repository/biocontainers/ucsc-farc?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-farc";
        var versions = ["377","377","377","366","357"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-farc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-farc/README.html