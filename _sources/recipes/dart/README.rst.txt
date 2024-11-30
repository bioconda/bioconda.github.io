:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dart'
.. highlight: bash

dart
====

.. conda:recipe:: dart
   :replaces_section_title:
   :noindex:

   Dart\: a fast and accurate RNA\-seq mapper

   :homepage: https://github.com/hsinnan75/Dart
   :license: MIT
   :recipe: /`dart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dart/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx558`

   An efficient short read mapper for RNA\-Seq data.


.. conda:package:: dart

   |downloads_dart| |docker_dart|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.6-6</code>,  <code>1.4.6-5</code>,  <code>1.4.6-4</code>,  <code>1.4.6-3</code>,  <code>1.4.6-2</code>,  <code>1.4.6-1</code>,  <code>1.4.6-0</code>,  <code>1.4.5-0</code>,  <code>1.4.3-0</code>,  </span></summary>
      

      ``1.4.6-6``,  ``1.4.6-5``,  ``1.4.6-4``,  ``1.4.6-3``,  ``1.4.6-2``,  ``1.4.6-1``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.9-0``,  ``1.3.8-1``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install dart

   and update with::

      mamba update dart

  To create a new environment, run::

      mamba create --name myenvname dart

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dart:<tag>

   (see `dart/tags`_ for valid values for ``<tag>``)


.. |downloads_dart| image:: https://img.shields.io/conda/dn/bioconda/dart.svg?style=flat
   :target: https://anaconda.org/bioconda/dart
   :alt:   (downloads)
.. |docker_dart| image:: https://quay.io/repository/biocontainers/dart/status
   :target: https://quay.io/repository/biocontainers/dart
.. _`dart/tags`: https://quay.io/repository/biocontainers/dart?tab=tags


.. raw:: html

    <script>
        var package = "dart";
        var versions = ["1.4.6","1.4.6","1.4.6","1.4.6","1.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dart/README.html