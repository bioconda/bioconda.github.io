:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamtools'
.. highlight: bash

bamtools
========

.. conda:recipe:: bamtools
   :replaces_section_title:

   C\+\+ API \& command\-line toolkit for working with BAM data

   :homepage: https://github.com/pezmaster31/bamtools
   :license: MIT
   :recipe: /`bamtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamtools/meta.yaml>`_
   :links: biotools: :biotools:`bamtools`

   


.. conda:package:: bamtools

   |downloads_bamtools| |docker_bamtools|

   :versions: 2.5.1-4, 2.5.1-3, 2.5.1-2, 2.5.1-0, 2.4.1-1, 2.4.1-0, 2.4.0-3, 2.4.0-2, 2.4.0-1, 2.4.0-0, 2.3.0-2, 2.3.0-1, 2.3.0-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bamtools

   and update with::

      conda update bamtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bamtools:<tag>

   (see `bamtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bamtools| image:: https://img.shields.io/conda/dn/bioconda/bamtools.svg?style=flat
   :alt:   (downloads)
.. |docker_bamtools| image:: https://quay.io/repository/biocontainers/bamtools/status
   :target: https://quay.io/repository/biocontainers/bamtools
.. _`bamtools/tags`: https://quay.io/repository/biocontainers/bamtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamtools/README.html