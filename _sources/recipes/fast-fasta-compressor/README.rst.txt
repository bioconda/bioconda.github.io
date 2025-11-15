:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fast-fasta-compressor'
.. highlight: bash

fast-fasta-compressor
=====================

.. conda:recipe:: fast-fasta-compressor
   :replaces_section_title:
   :noindex:

   A tool for compressing FASTA files

   :homepage: https://github.com/kowallus/ffc
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`fast-fasta-compressor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast-fasta-compressor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast-fasta-compressor/meta.yaml>`_

   


.. conda:package:: fast-fasta-compressor

   |downloads_fast-fasta-compressor| |docker_fast-fasta-compressor|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install fast-fasta-compressor

   and update with::

      mamba update fast-fasta-compressor

  To create a new environment, run::

      mamba create --name myenvname fast-fasta-compressor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fast-fasta-compressor:<tag>

   (see `fast-fasta-compressor/tags`_ for valid values for ``<tag>``)


.. |downloads_fast-fasta-compressor| image:: https://img.shields.io/conda/dn/bioconda/fast-fasta-compressor.svg?style=flat
   :target: https://anaconda.org/bioconda/fast-fasta-compressor
   :alt:   (downloads)
.. |docker_fast-fasta-compressor| image:: https://quay.io/repository/biocontainers/fast-fasta-compressor/status
   :target: https://quay.io/repository/biocontainers/fast-fasta-compressor
.. _`fast-fasta-compressor/tags`: https://quay.io/repository/biocontainers/fast-fasta-compressor?tab=tags


.. raw:: html

    <script>
        var package = "fast-fasta-compressor";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fast-fasta-compressor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fast-fasta-compressor/README.html