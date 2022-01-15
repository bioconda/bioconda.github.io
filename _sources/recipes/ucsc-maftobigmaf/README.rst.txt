:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-maftobigmaf'
.. highlight: bash

ucsc-maftobigmaf
================

.. conda:recipe:: ucsc-maftobigmaf
   :replaces_section_title:
   :noindex:

   Put ucsc standard maf file into bigMaf format

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-maftobigmaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maftobigmaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maftobigmaf/meta.yaml>`_

   


.. conda:package:: ucsc-maftobigmaf

   |downloads_ucsc-maftobigmaf| |docker_ucsc-maftobigmaf|

   :versions:
      
      

      ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1l,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-maftobigmaf

   and update with::

      conda update ucsc-maftobigmaf

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-maftobigmaf:<tag>

   (see `ucsc-maftobigmaf/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-maftobigmaf| image:: https://img.shields.io/conda/dn/bioconda/ucsc-maftobigmaf.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-maftobigmaf
   :alt:   (downloads)
.. |docker_ucsc-maftobigmaf| image:: https://quay.io/repository/biocontainers/ucsc-maftobigmaf/status
   :target: https://quay.io/repository/biocontainers/ucsc-maftobigmaf
.. _`ucsc-maftobigmaf/tags`: https://quay.io/repository/biocontainers/ucsc-maftobigmaf?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-maftobigmaf";
        var versions = ["377","377","377","377","366"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-maftobigmaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-maftobigmaf/README.html