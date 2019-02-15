:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-farc'
.. highlight: bash

ucsc-farc
=========

.. conda:recipe:: ucsc-farc
   :replaces_section_title:

   Reverse complement a FA file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-farc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-farc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-farc/meta.yaml>`_

   


.. conda:package:: ucsc-farc

   |downloads_ucsc-farc| |docker_ucsc-farc|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-farc

   and update with::

      conda update ucsc-farc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-farc:<tag>

   (see `ucsc-farc/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-farc| image:: https://img.shields.io/conda/dn/bioconda/ucsc-farc.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-farc| image:: https://quay.io/repository/biocontainers/ucsc-farc/status
   :target: https://quay.io/repository/biocontainers/ucsc-farc
.. _`ucsc-farc/tags`: https://quay.io/repository/biocontainers/ucsc-farc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-farc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-farc/README.html