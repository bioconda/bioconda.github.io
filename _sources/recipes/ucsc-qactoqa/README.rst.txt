:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-qactoqa'
.. highlight: bash

ucsc-qactoqa
============

.. conda:recipe:: ucsc-qactoqa
   :replaces_section_title:

   convert from compressed to uncompressed

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-qactoqa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-qactoqa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-qactoqa/meta.yaml>`_

   


.. conda:package:: ucsc-qactoqa

   |downloads_ucsc-qactoqa| |docker_ucsc-qactoqa|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-qactoqa

   and update with::

      conda update ucsc-qactoqa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-qactoqa:<tag>

   (see `ucsc-qactoqa/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-qactoqa| image:: https://img.shields.io/conda/dn/bioconda/ucsc-qactoqa.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-qactoqa| image:: https://quay.io/repository/biocontainers/ucsc-qactoqa/status
   :target: https://quay.io/repository/biocontainers/ucsc-qactoqa
.. _`ucsc-qactoqa/tags`: https://quay.io/repository/biocontainers/ucsc-qactoqa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-qactoqa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-qactoqa/README.html