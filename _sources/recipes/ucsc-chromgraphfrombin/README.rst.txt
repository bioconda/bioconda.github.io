:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-chromgraphfrombin'
.. highlight: bash

ucsc-chromgraphfrombin
======================

.. conda:recipe:: ucsc-chromgraphfrombin
   :replaces_section_title:

   Convert chromGraph binary to ascii format.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chromgraphfrombin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chromgraphfrombin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chromgraphfrombin/meta.yaml>`_

   


.. conda:package:: ucsc-chromgraphfrombin

   |downloads_ucsc-chromgraphfrombin| |docker_ucsc-chromgraphfrombin|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chromgraphfrombin

   and update with::

      conda update ucsc-chromgraphfrombin

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-chromgraphfrombin:<tag>

   (see `ucsc-chromgraphfrombin/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-chromgraphfrombin| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chromgraphfrombin.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-chromgraphfrombin| image:: https://quay.io/repository/biocontainers/ucsc-chromgraphfrombin/status
   :target: https://quay.io/repository/biocontainers/ucsc-chromgraphfrombin
.. _`ucsc-chromgraphfrombin/tags`: https://quay.io/repository/biocontainers/ucsc-chromgraphfrombin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chromgraphfrombin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chromgraphfrombin/README.html