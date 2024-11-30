:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'artic-porechop'
.. highlight: bash

artic-porechop
==============

.. conda:recipe:: artic-porechop
   :replaces_section_title:
   :noindex:

   Adapter removal and demultiplexing of Oxford Nanopore reads \(fork of rrwick\/Porechop\)

   :homepage: https://github.com/artic-network/Porechop
   :license: GPL3
   :recipe: /`artic-porechop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic-porechop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic-porechop/meta.yaml>`_

   


.. conda:package:: artic-porechop

   |downloads_artic-porechop| |docker_artic-porechop|

   :versions:
      
      

      ``0.3.2pre-6``,  ``0.3.2pre-5``,  ``0.3.2pre-4``,  ``0.3.2pre-3``,  ``0.3.2pre-2``,  ``0.3.2pre-1``,  ``0.3.2pre-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install artic-porechop

   and update with::

      mamba update artic-porechop

  To create a new environment, run::

      mamba create --name myenvname artic-porechop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/artic-porechop:<tag>

   (see `artic-porechop/tags`_ for valid values for ``<tag>``)


.. |downloads_artic-porechop| image:: https://img.shields.io/conda/dn/bioconda/artic-porechop.svg?style=flat
   :target: https://anaconda.org/bioconda/artic-porechop
   :alt:   (downloads)
.. |docker_artic-porechop| image:: https://quay.io/repository/biocontainers/artic-porechop/status
   :target: https://quay.io/repository/biocontainers/artic-porechop
.. _`artic-porechop/tags`: https://quay.io/repository/biocontainers/artic-porechop?tab=tags


.. raw:: html

    <script>
        var package = "artic-porechop";
        var versions = ["0.3.2pre","0.3.2pre","0.3.2pre","0.3.2pre","0.3.2pre"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/artic-porechop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/artic-porechop/README.html