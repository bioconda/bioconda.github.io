:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-axtsort'
.. highlight: bash

ucsc-axtsort
============

.. conda:recipe:: ucsc-axtsort
   :replaces_section_title:

   Sort axt files

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-axtsort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-axtsort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-axtsort/meta.yaml>`_

   


.. conda:package:: ucsc-axtsort

   |downloads_ucsc-axtsort| |docker_ucsc-axtsort|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-axtsort

   and update with::

      conda update ucsc-axtsort

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-axtsort:<tag>

   (see `ucsc-axtsort/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-axtsort| image:: https://img.shields.io/conda/dn/bioconda/ucsc-axtsort.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-axtsort| image:: https://quay.io/repository/biocontainers/ucsc-axtsort/status
   :target: https://quay.io/repository/biocontainers/ucsc-axtsort
.. _`ucsc-axtsort/tags`: https://quay.io/repository/biocontainers/ucsc-axtsort?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-axtsort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-axtsort/README.html