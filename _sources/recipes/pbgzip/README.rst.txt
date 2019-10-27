:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbgzip'
.. highlight: bash

pbgzip
======

.. conda:recipe:: pbgzip
   :replaces_section_title:

   Parallel Block GZIP

   :homepage: https://github.com/nh13/pbgzip
   :license: MIT/Expat
   :recipe: /`pbgzip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbgzip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbgzip/meta.yaml>`_

   


.. conda:package:: pbgzip

   |downloads_pbgzip| |docker_pbgzip|

   :versions: 2016.08.04-1, 2016.08.04-0, 2015.10.28-1, 2015.10.28-0
   
   :depends bzip2: >=1.0.8,<2.0a0
   :depends libgcc-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbgzip

   and update with::

      conda update pbgzip

   or use the docker container::

      docker pull quay.io/biocontainers/pbgzip:<tag>

   (see `pbgzip/tags`_ for valid values for ``<tag>``)


.. |downloads_pbgzip| image:: https://img.shields.io/conda/dn/bioconda/pbgzip.svg?style=flat
   :target: https://anaconda.org/bioconda/pbgzip
   :alt:   (downloads)
.. |docker_pbgzip| image:: https://quay.io/repository/biocontainers/pbgzip/status
   :target: https://quay.io/repository/biocontainers/pbgzip
.. _`pbgzip/tags`: https://quay.io/repository/biocontainers/pbgzip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbgzip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbgzip/README.html