:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-psltobed'
.. highlight: bash

ucsc-psltobed
=============

.. conda:recipe:: ucsc-psltobed
   :replaces_section_title:
   :noindex:

    transform a psl format file to a bed format file. 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-psltobed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-psltobed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-psltobed/meta.yaml>`_

   


.. conda:package:: ucsc-psltobed

   |downloads_ucsc-psltobed| |docker_ucsc-psltobed|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1k,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-psltobed

   and update with::

      conda update ucsc-psltobed

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-psltobed:<tag>

   (see `ucsc-psltobed/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-psltobed| image:: https://img.shields.io/conda/dn/bioconda/ucsc-psltobed.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-psltobed
   :alt:   (downloads)
.. |docker_ucsc-psltobed| image:: https://quay.io/repository/biocontainers/ucsc-psltobed/status
   :target: https://quay.io/repository/biocontainers/ucsc-psltobed
.. _`ucsc-psltobed/tags`: https://quay.io/repository/biocontainers/ucsc-psltobed?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-psltobed";
        var versions = ["377","377","377","366","357"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-psltobed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-psltobed/README.html