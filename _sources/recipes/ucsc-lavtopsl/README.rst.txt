:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-lavtopsl'
.. highlight: bash

ucsc-lavtopsl
=============

.. conda:recipe:: ucsc-lavtopsl
   :replaces_section_title:

   Convert blastz lav to psl format

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-lavtopsl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-lavtopsl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-lavtopsl/meta.yaml>`_

   


.. conda:package:: ucsc-lavtopsl

   |downloads_ucsc-lavtopsl| |docker_ucsc-lavtopsl|

   :versions: 366-0, 357-2, 357-1, 357-0, 324-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-lavtopsl

   and update with::

      conda update ucsc-lavtopsl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-lavtopsl:<tag>

   (see `ucsc-lavtopsl/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-lavtopsl| image:: https://img.shields.io/conda/dn/bioconda/ucsc-lavtopsl.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-lavtopsl| image:: https://quay.io/repository/biocontainers/ucsc-lavtopsl/status
   :target: https://quay.io/repository/biocontainers/ucsc-lavtopsl
.. _`ucsc-lavtopsl/tags`: https://quay.io/repository/biocontainers/ucsc-lavtopsl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-lavtopsl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-lavtopsl/README.html