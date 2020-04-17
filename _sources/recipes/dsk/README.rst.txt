:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dsk'
.. highlight: bash

dsk
===

.. conda:recipe:: dsk
   :replaces_section_title:

   DSK is a k\-mer counter for reads or genomes.

   :homepage: https://github.com/GATB/dsk/
   :license: AGPL-3.0
   :recipe: /`dsk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsk/meta.yaml>`_
   :links: biotools: :biotools:`dsk`, doi: :doi:`10.1093/bioinformatics/btt020`

   


.. conda:package:: dsk

   |downloads_dsk| |docker_dsk|

   :versions: 2.3.1-0, 2.2.0-2, 2.2.0-1, 2.2.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dsk

   and update with::

      conda update dsk

   or use the docker container::

      docker pull quay.io/biocontainers/dsk:<tag>

   (see `dsk/tags`_ for valid values for ``<tag>``)


.. |downloads_dsk| image:: https://img.shields.io/conda/dn/bioconda/dsk.svg?style=flat
   :target: https://anaconda.org/bioconda/dsk
   :alt:   (downloads)
.. |docker_dsk| image:: https://quay.io/repository/biocontainers/dsk/status
   :target: https://quay.io/repository/biocontainers/dsk
.. _`dsk/tags`: https://quay.io/repository/biocontainers/dsk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dsk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dsk/README.html