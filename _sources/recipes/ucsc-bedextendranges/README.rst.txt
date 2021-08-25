:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bedextendranges'
.. highlight: bash

ucsc-bedextendranges
====================

.. conda:recipe:: ucsc-bedextendranges
   :replaces_section_title:
   :noindex:

   extend length of entries in bed 6\+ data to be at least the given length\,

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedextendranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedextendranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedextendranges/meta.yaml>`_

   


.. conda:package:: ucsc-bedextendranges

   |downloads_ucsc-bedextendranges| |docker_ucsc-bedextendranges|

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

      conda install ucsc-bedextendranges

   and update with::

      conda update ucsc-bedextendranges

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-bedextendranges:<tag>

   (see `ucsc-bedextendranges/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bedextendranges| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedextendranges.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-bedextendranges
   :alt:   (downloads)
.. |docker_ucsc-bedextendranges| image:: https://quay.io/repository/biocontainers/ucsc-bedextendranges/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedextendranges
.. _`ucsc-bedextendranges/tags`: https://quay.io/repository/biocontainers/ucsc-bedextendranges?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-bedextendranges";
        var versions = ["377","377","377","366","357"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedextendranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedextendranges/README.html