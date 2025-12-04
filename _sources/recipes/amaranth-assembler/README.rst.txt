:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amaranth-assembler'
.. highlight: bash

amaranth-assembler
==================

.. conda:recipe:: amaranth-assembler
   :replaces_section_title:
   :noindex:

   Amaranth is a reference\-based transcriptome assembler for single\-cell RNA\-seq.

   :homepage: https://github.com/Shao-Group/amaranth
   :license: BSD / BSD-3-Clause
   :recipe: /`amaranth-assembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amaranth-assembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amaranth-assembler/meta.yaml>`_

   


.. conda:package:: amaranth-assembler

   |downloads_amaranth-assembler| |docker_amaranth-assembler|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends htslib: ``>=1.22.1,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libxcrypt: ``>=4.4.36``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install amaranth-assembler

   and update with::

      mamba update amaranth-assembler

  To create a new environment, run::

      mamba create --name myenvname amaranth-assembler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amaranth-assembler:<tag>

   (see `amaranth-assembler/tags`_ for valid values for ``<tag>``)


.. |downloads_amaranth-assembler| image:: https://img.shields.io/conda/dn/bioconda/amaranth-assembler.svg?style=flat
   :target: https://anaconda.org/bioconda/amaranth-assembler
   :alt:   (downloads)
.. |docker_amaranth-assembler| image:: https://quay.io/repository/biocontainers/amaranth-assembler/status
   :target: https://quay.io/repository/biocontainers/amaranth-assembler
.. _`amaranth-assembler/tags`: https://quay.io/repository/biocontainers/amaranth-assembler?tab=tags


.. raw:: html

    <script>
        var package = "amaranth-assembler";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amaranth-assembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amaranth-assembler/README.html