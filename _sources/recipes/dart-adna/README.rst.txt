:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dart-adna'
.. highlight: bash

dart-adna
=========

.. conda:recipe:: dart-adna
   :replaces_section_title:
   :noindex:

   DART \- Damage\-Aware Read Translation for ancient DNA metagenomics

   :homepage: https://github.com/genomewalker/dart
   :documentation: https://github.com/genomewalker/dart/wiki
   
   :license: MIT
   :recipe: /`dart-adna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dart-adna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dart-adna/meta.yaml>`_

   


.. conda:package:: dart-adna

   |downloads_dart-adna| |docker_dart-adna|

   :versions:
      
      

      ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=14``
   :depends libgomp: 
   :depends libstdcxx: ``>=14``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
   :depends zstd: ``>=1.5.7,<1.6.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install dart-adna

   and update with::

      mamba update dart-adna

  To create a new environment, run::

      mamba create --name myenvname dart-adna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dart-adna:<tag>

   (see `dart-adna/tags`_ for valid values for ``<tag>``)


.. |downloads_dart-adna| image:: https://img.shields.io/conda/dn/bioconda/dart-adna.svg?style=flat
   :target: https://anaconda.org/bioconda/dart-adna
   :alt:   (downloads)
.. |docker_dart-adna| image:: https://quay.io/repository/biocontainers/dart-adna/status
   :target: https://quay.io/repository/biocontainers/dart-adna
.. _`dart-adna/tags`: https://quay.io/repository/biocontainers/dart-adna?tab=tags


.. raw:: html

    <script>
        var package = "dart-adna";
        var versions = ["1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dart-adna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dart-adna/README.html