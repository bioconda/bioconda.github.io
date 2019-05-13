:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'erne'
.. highlight: bash

erne
====

.. conda:recipe:: erne
   :replaces_section_title:

   ERNE \- Extended Randomized Numerical alignEr

   :homepage: http://erne.sourceforge.net
   :license: GPLv3
   :recipe: /`erne <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/erne>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/erne/meta.yaml>`_
   :links: biotools: :biotools:`erne`

   


.. conda:package:: erne

   |downloads_erne| |docker_erne|

   :versions: 2.1.1-2, 2.1.1-1, 2.1.1-0
   
   :depends boost: >=1.66.0,<1.66.1.0a0
   :depends bzip2: >=1.0.6,<2.0a0
   :depends libgcc-ng: >=4.9
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install erne

   and update with::

      conda update erne

   or use the docker container::

      docker pull quay.io/biocontainers/erne:<tag>

   (see `erne/tags`_ for valid values for ``<tag>``)


.. |downloads_erne| image:: https://img.shields.io/conda/dn/bioconda/erne.svg?style=flat
   :target: https://anaconda.org/bioconda/erne
   :alt:   (downloads)
.. |docker_erne| image:: https://quay.io/repository/biocontainers/erne/status
   :target: https://quay.io/repository/biocontainers/erne
.. _`erne/tags`: https://quay.io/repository/biocontainers/erne?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/erne/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/erne/README.html