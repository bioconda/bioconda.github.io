:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-parahub'
.. highlight: bash

ucsc-parahub
============

.. conda:recipe:: ucsc-parahub
   :replaces_section_title:

   parasol hub server version 12.18

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-parahub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-parahub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-parahub/meta.yaml>`_

   


.. conda:package:: ucsc-parahub

   |downloads_ucsc-parahub| |docker_ucsc-parahub|

   :versions: 366-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-parahub

   and update with::

      conda update ucsc-parahub

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-parahub:<tag>

   (see `ucsc-parahub/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-parahub| image:: https://img.shields.io/conda/dn/bioconda/ucsc-parahub.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-parahub| image:: https://quay.io/repository/biocontainers/ucsc-parahub/status
   :target: https://quay.io/repository/biocontainers/ucsc-parahub
.. _`ucsc-parahub/tags`: https://quay.io/repository/biocontainers/ucsc-parahub?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-parahub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-parahub/README.html