:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-ticktodate'
.. highlight: bash

ucsc-ticktodate
===============

.. conda:recipe:: ucsc-ticktodate
   :replaces_section_title:

   Convert seconds since 1970 to time and date

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-ticktodate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-ticktodate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-ticktodate/meta.yaml>`_

   


.. conda:package:: ucsc-ticktodate

   |downloads_ucsc-ticktodate| |docker_ucsc-ticktodate|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-ticktodate

   and update with::

      conda update ucsc-ticktodate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-ticktodate:<tag>

   (see `ucsc-ticktodate/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-ticktodate| image:: https://img.shields.io/conda/dn/bioconda/ucsc-ticktodate.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-ticktodate| image:: https://quay.io/repository/biocontainers/ucsc-ticktodate/status
   :target: https://quay.io/repository/biocontainers/ucsc-ticktodate
.. _`ucsc-ticktodate/tags`: https://quay.io/repository/biocontainers/ucsc-ticktodate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-ticktodate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-ticktodate/README.html