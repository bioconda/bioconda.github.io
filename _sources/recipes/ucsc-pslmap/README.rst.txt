:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-pslmap'
.. highlight: bash

ucsc-pslmap
===========

.. conda:recipe:: ucsc-pslmap
   :replaces_section_title:

   map PSLs alignments to new targets using alignments of

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslmap/meta.yaml>`_

   


.. conda:package:: ucsc-pslmap

   |downloads_ucsc-pslmap| |docker_ucsc-pslmap|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslmap

   and update with::

      conda update ucsc-pslmap

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-pslmap:<tag>

   (see `ucsc-pslmap/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-pslmap| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslmap.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslmap| image:: https://quay.io/repository/biocontainers/ucsc-pslmap/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslmap
.. _`ucsc-pslmap/tags`: https://quay.io/repository/biocontainers/ucsc-pslmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslmap/README.html