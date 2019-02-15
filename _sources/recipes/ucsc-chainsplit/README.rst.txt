:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-chainsplit'
.. highlight: bash

ucsc-chainsplit
===============

.. conda:recipe:: ucsc-chainsplit
   :replaces_section_title:

   Split chains up by target or query sequence

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chainsplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainsplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainsplit/meta.yaml>`_

   


.. conda:package:: ucsc-chainsplit

   |downloads_ucsc-chainsplit| |docker_ucsc-chainsplit|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chainsplit

   and update with::

      conda update ucsc-chainsplit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-chainsplit:<tag>

   (see `ucsc-chainsplit/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-chainsplit| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chainsplit.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-chainsplit| image:: https://quay.io/repository/biocontainers/ucsc-chainsplit/status
   :target: https://quay.io/repository/biocontainers/ucsc-chainsplit
.. _`ucsc-chainsplit/tags`: https://quay.io/repository/biocontainers/ucsc-chainsplit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chainsplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chainsplit/README.html