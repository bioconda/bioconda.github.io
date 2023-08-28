:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rust-mdbg'
.. highlight: bash

rust-mdbg
=========

.. conda:recipe:: rust-mdbg
   :replaces_section_title:
   :noindex:

   An ultra\-fast minimizer\-space de Bruijn graph \(mdBG\) implementation\, geared towards the assembly of long and accurate reads.


   :homepage: https://github.com/ekimb/rust-mdbg
   :license: MIT
   :recipe: /`rust-mdbg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-mdbg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-mdbg/meta.yaml>`_

   


.. conda:package:: rust-mdbg

   |downloads_rust-mdbg| |docker_rust-mdbg|

   :versions:
      
      

      ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install rust-mdbg

   and update with::

      mamba update rust-mdbg

  To create a new environment, run::

      mamba create --name myenvname rust-mdbg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rust-mdbg:<tag>

   (see `rust-mdbg/tags`_ for valid values for ``<tag>``)


.. |downloads_rust-mdbg| image:: https://img.shields.io/conda/dn/bioconda/rust-mdbg.svg?style=flat
   :target: https://anaconda.org/bioconda/rust-mdbg
   :alt:   (downloads)
.. |docker_rust-mdbg| image:: https://quay.io/repository/biocontainers/rust-mdbg/status
   :target: https://quay.io/repository/biocontainers/rust-mdbg
.. _`rust-mdbg/tags`: https://quay.io/repository/biocontainers/rust-mdbg?tab=tags


.. raw:: html

    <script>
        var package = "rust-mdbg";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rust-mdbg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rust-mdbg/README.html