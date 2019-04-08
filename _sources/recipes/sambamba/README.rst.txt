:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sambamba'
.. highlight: bash

sambamba
========

.. conda:recipe:: sambamba
   :replaces_section_title:

   Tools for working with SAM\/BAM data

   :homepage: https://github.com/biod/sambamba
   :license: GPLv2
   :recipe: /`sambamba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sambamba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sambamba/meta.yaml>`_

   


.. conda:package:: sambamba

   |downloads_sambamba| |docker_sambamba|

   :versions: 0.6.8-2, 0.6.8-1, 0.6.8-0, 0.6.6-2, 0.6.6-1, 0.6.6-0, 0.6.5-0, 0.6.3-0, 0.6.2-0, 0.6.1-0, 0.5.9-1, 0.5.9-0
   
   :depends bzip2: >=1.0.6,<2.0a0
   :depends ldc: 1.13.*
   :depends libgcc-ng: >=7.3.0
   :depends xz: >=5.2.4,<5.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sambamba

   and update with::

      conda update sambamba

   or use the docker container::

      docker pull quay.io/biocontainers/sambamba:<tag>

   (see `sambamba/tags`_ for valid values for ``<tag>``)


.. |downloads_sambamba| image:: https://img.shields.io/conda/dn/bioconda/sambamba.svg?style=flat
   :alt:   (downloads)
.. |docker_sambamba| image:: https://quay.io/repository/biocontainers/sambamba/status
   :target: https://quay.io/repository/biocontainers/sambamba
.. _`sambamba/tags`: https://quay.io/repository/biocontainers/sambamba?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sambamba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sambamba/README.html