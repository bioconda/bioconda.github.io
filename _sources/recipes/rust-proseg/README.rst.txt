:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rust-proseg'
.. highlight: bash

rust-proseg
===========

.. conda:recipe:: rust-proseg
   :replaces_section_title:
   :noindex:

   A Rust crate for running Proseg\, a cell segmentation method for in situ spatial transcriptomics.


   :homepage: https://github.com/dcjones/proseg
   :license: GPL3 / GPLv3
   :recipe: /`rust-proseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-proseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-proseg/meta.yaml>`_

   


.. conda:package:: rust-proseg

   |downloads_rust-proseg| |docker_rust-proseg|

   :versions:
      
      

      ``2.0.5-0``,  ``2.0.4-0``

      

   
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

      mamba install rust-proseg

   and update with::

      mamba update rust-proseg

  To create a new environment, run::

      mamba create --name myenvname rust-proseg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rust-proseg:<tag>

   (see `rust-proseg/tags`_ for valid values for ``<tag>``)


.. |downloads_rust-proseg| image:: https://img.shields.io/conda/dn/bioconda/rust-proseg.svg?style=flat
   :target: https://anaconda.org/bioconda/rust-proseg
   :alt:   (downloads)
.. |docker_rust-proseg| image:: https://quay.io/repository/biocontainers/rust-proseg/status
   :target: https://quay.io/repository/biocontainers/rust-proseg
.. _`rust-proseg/tags`: https://quay.io/repository/biocontainers/rust-proseg?tab=tags


.. raw:: html

    <script>
        var package = "rust-proseg";
        var versions = ["2.0.5","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rust-proseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rust-proseg/README.html