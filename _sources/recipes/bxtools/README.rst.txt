:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bxtools'
.. highlight: bash

bxtools
=======

.. conda:recipe:: bxtools
   :replaces_section_title:

   Tools for analyzing 10X Genomics data

   :homepage: https://github.com/walaj/bxtools
   :license: GPLv3
   :recipe: /`bxtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bxtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bxtools/meta.yaml>`_

   


.. conda:package:: bxtools

   |downloads_bxtools| |docker_bxtools|

   :versions: 0.1.0-0, 0.0-1
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends xz: >=5.2.3,<5.3.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bxtools

   and update with::

      conda update bxtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bxtools:<tag>

   (see `bxtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bxtools| image:: https://img.shields.io/conda/dn/bioconda/bxtools.svg?style=flat
   :alt:   (downloads)
.. |docker_bxtools| image:: https://quay.io/repository/biocontainers/bxtools/status
   :target: https://quay.io/repository/biocontainers/bxtools
.. _`bxtools/tags`: https://quay.io/repository/biocontainers/bxtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bxtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bxtools/README.html