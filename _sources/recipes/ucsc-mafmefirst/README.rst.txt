:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-mafmefirst'
.. highlight: bash

ucsc-mafmefirst
===============

.. conda:recipe:: ucsc-mafmefirst
   :replaces_section_title:
   :noindex:

   Move component to top if it is one of the named ones.  

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-mafmefirst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafmefirst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafmefirst/meta.yaml>`_

   


.. conda:package:: ucsc-mafmefirst

   |downloads_ucsc-mafmefirst| |docker_ucsc-mafmefirst|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``324-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1k,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-mafmefirst

   and update with::

      conda update ucsc-mafmefirst

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-mafmefirst:<tag>

   (see `ucsc-mafmefirst/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-mafmefirst| image:: https://img.shields.io/conda/dn/bioconda/ucsc-mafmefirst.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-mafmefirst
   :alt:   (downloads)
.. |docker_ucsc-mafmefirst| image:: https://quay.io/repository/biocontainers/ucsc-mafmefirst/status
   :target: https://quay.io/repository/biocontainers/ucsc-mafmefirst
.. _`ucsc-mafmefirst/tags`: https://quay.io/repository/biocontainers/ucsc-mafmefirst?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-mafmefirst";
        var versions = ["377","377","377","366","357"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-mafmefirst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-mafmefirst/README.html