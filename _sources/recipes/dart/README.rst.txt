:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dart'
.. highlight: bash

dart
====

.. conda:recipe:: dart
   :replaces_section_title:

   Dart\: a fast and accurate RNA\-seq mapper

   :homepage: https://github.com/hsinnan75/Dart
   :license: MIT
   :recipe: /`dart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dart/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx558`

   An efficient short read mapper for RNA\-Seq data.


.. conda:package:: dart

   |downloads_dart| |docker_dart|

   :versions: 1.4.0-0, 1.3.9-0, 1.3.8-1, 1.3.8-0, 1.3.7-0, 1.3.6-0
   
   :depends boost-cpp: >=1.70.0,<1.70.1.0a0
   :depends bzip2: >=1.0.8,<2.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends xz: >=5.2.5,<5.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dart

   and update with::

      conda update dart

   or use the docker container::

      docker pull quay.io/biocontainers/dart:<tag>

   (see `dart/tags`_ for valid values for ``<tag>``)


.. |downloads_dart| image:: https://img.shields.io/conda/dn/bioconda/dart.svg?style=flat
   :target: https://anaconda.org/bioconda/dart
   :alt:   (downloads)
.. |docker_dart| image:: https://quay.io/repository/biocontainers/dart/status
   :target: https://quay.io/repository/biocontainers/dart
.. _`dart/tags`: https://quay.io/repository/biocontainers/dart?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dart/README.html