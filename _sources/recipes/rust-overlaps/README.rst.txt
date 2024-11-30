:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rust-overlaps'
.. highlight: bash

rust-overlaps
=============

.. conda:recipe:: rust-overlaps
   :replaces_section_title:
   :noindex:

   A fast and secure command line utilility for enumerating all suffix\-prefix
   overlaps within a set of sequences\, satisfying a user\-specified minimal
   overlap length and maximal error rate.

   :homepage: https://github.com/jbaaijens/rust-overlaps
   :license: MIT
   :recipe: /`rust-overlaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-overlaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-overlaps/meta.yaml>`_

   


.. conda:package:: rust-overlaps

   |downloads_rust-overlaps| |docker_rust-overlaps|

   :versions:
      
      

      ``0.1.1-9``,  ``0.1.1-8``,  ``0.1.1-7``,  ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install rust-overlaps

   and update with::

      mamba update rust-overlaps

  To create a new environment, run::

      mamba create --name myenvname rust-overlaps

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rust-overlaps:<tag>

   (see `rust-overlaps/tags`_ for valid values for ``<tag>``)


.. |downloads_rust-overlaps| image:: https://img.shields.io/conda/dn/bioconda/rust-overlaps.svg?style=flat
   :target: https://anaconda.org/bioconda/rust-overlaps
   :alt:   (downloads)
.. |docker_rust-overlaps| image:: https://quay.io/repository/biocontainers/rust-overlaps/status
   :target: https://quay.io/repository/biocontainers/rust-overlaps
.. _`rust-overlaps/tags`: https://quay.io/repository/biocontainers/rust-overlaps?tab=tags


.. raw:: html

    <script>
        var package = "rust-overlaps";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rust-overlaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rust-overlaps/README.html