:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bedtools'
.. highlight: bash

bedtools
========

.. conda:recipe:: bedtools
   :replaces_section_title:

   A powerful toolset for genome arithmetic

   :homepage: http://bedtools.readthedocs.org/
   :license: GPL v2
   :recipe: /`bedtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedtools/meta.yaml>`_
   :links: biotools: :biotools:`bedtools`

   


.. conda:package:: bedtools

   |downloads_bedtools| |docker_bedtools|

   :versions: 2.29.0-1, 2.29.0-0, 2.28.0-0, 2.27.1-3, 2.27.1-2, 2.27.1-1, 2.27.1-0, 2.27.0-3, 2.27.0-2, 2.27.0-1, 2.27.0-0, 2.26.0-0, 2.26.0gx-3, 2.26.0gx-2, 2.26.0gx-1, 2.26.0gx-0, 2.25.0-5, 2.25.0-4, 2.25.0-3, 2.25.0-2, 2.25.0-1, 2.25.0-0, 2.24.0-0, 2.23.0-3, 2.23.0-2, 2.23.0-1, 2.23.0-0, 2.22-3, 2.22-2, 2.22-1, 2.22-0, 2.20.1-2, 2.20.1-1, 2.20.1-0, 2.19.1-2, 2.19.1-1, 2.19.1-0, 2.17.0-0, 2.16.2-1, 2.16.2-0
   
   :depends bzip2: >=1.0.8,<2.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends xz: >=5.2.4,<5.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bedtools

   and update with::

      conda update bedtools

   or use the docker container::

      docker pull quay.io/biocontainers/bedtools:<tag>

   (see `bedtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bedtools| image:: https://img.shields.io/conda/dn/bioconda/bedtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bedtools
   :alt:   (downloads)
.. |docker_bedtools| image:: https://quay.io/repository/biocontainers/bedtools/status
   :target: https://quay.io/repository/biocontainers/bedtools
.. _`bedtools/tags`: https://quay.io/repository/biocontainers/bedtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bedtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bedtools/README.html