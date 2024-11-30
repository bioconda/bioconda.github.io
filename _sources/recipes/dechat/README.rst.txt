:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dechat'
.. highlight: bash

dechat
======

.. conda:recipe:: dechat
   :replaces_section_title:
   :noindex:

   Repeat and haplotype aware error correction in nanopore sequencing reads with Dechat

   :homepage: https://github.com/LuoGroup2023/DeChat
   :license: MIT / MIT
   :recipe: /`dechat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dechat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dechat/meta.yaml>`_

   


.. conda:package:: dechat

   |downloads_dechat| |docker_dechat|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install dechat

   and update with::

      mamba update dechat

  To create a new environment, run::

      mamba create --name myenvname dechat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dechat:<tag>

   (see `dechat/tags`_ for valid values for ``<tag>``)


.. |downloads_dechat| image:: https://img.shields.io/conda/dn/bioconda/dechat.svg?style=flat
   :target: https://anaconda.org/bioconda/dechat
   :alt:   (downloads)
.. |docker_dechat| image:: https://quay.io/repository/biocontainers/dechat/status
   :target: https://quay.io/repository/biocontainers/dechat
.. _`dechat/tags`: https://quay.io/repository/biocontainers/dechat?tab=tags


.. raw:: html

    <script>
        var package = "dechat";
        var versions = ["1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dechat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dechat/README.html