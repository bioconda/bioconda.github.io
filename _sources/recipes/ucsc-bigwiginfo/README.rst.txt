:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bigwiginfo'
.. highlight: bash

ucsc-bigwiginfo
===============

.. conda:recipe:: ucsc-bigwiginfo
   :replaces_section_title:

   Print out information about bigWig file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigwiginfo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwiginfo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwiginfo/meta.yaml>`_

   


.. conda:package:: ucsc-bigwiginfo

   |downloads_ucsc-bigwiginfo| |docker_ucsc-bigwiginfo|

   :versions: 366-0, 357-1, 357-0, 332-0, 324-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigwiginfo

   and update with::

      conda update ucsc-bigwiginfo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bigwiginfo:<tag>

   (see `ucsc-bigwiginfo/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bigwiginfo| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigwiginfo.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigwiginfo| image:: https://quay.io/repository/biocontainers/ucsc-bigwiginfo/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigwiginfo
.. _`ucsc-bigwiginfo/tags`: https://quay.io/repository/biocontainers/ucsc-bigwiginfo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigwiginfo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigwiginfo/README.html