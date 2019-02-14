:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bigmaftomaf'
.. highlight: bash

ucsc-bigmaftomaf
================

.. conda:recipe:: ucsc-bigmaftomaf
   :replaces_section_title:

   convert bigMaf to maf file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigmaftomaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigmaftomaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigmaftomaf/meta.yaml>`_

   


.. conda:package:: ucsc-bigmaftomaf

   |downloads_ucsc-bigmaftomaf| |docker_ucsc-bigmaftomaf|

   :versions: 366-0, 357-2, 357-1, 357-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigmaftomaf

   and update with::

      conda update ucsc-bigmaftomaf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bigmaftomaf:<tag>

   (see `ucsc-bigmaftomaf/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bigmaftomaf| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigmaftomaf.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigmaftomaf| image:: https://quay.io/repository/biocontainers/ucsc-bigmaftomaf/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigmaftomaf
.. _`ucsc-bigmaftomaf/tags`: https://quay.io/repository/biocontainers/ucsc-bigmaftomaf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigmaftomaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigmaftomaf/README.html