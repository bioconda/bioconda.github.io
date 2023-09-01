:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fsm-lite'
.. highlight: bash

fsm-lite
========

.. conda:recipe:: fsm-lite
   :replaces_section_title:
   :noindex:

   Frequency\-based String Mining \(lite\)

   :homepage: https://github.com/nvalimak/fsm-lite
   :license: GPL / GPL-3
   :recipe: /`fsm-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fsm-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fsm-lite/meta.yaml>`_
   :links: doi: :doi:`10.1038/ncomms12797`

   A single\-core implemetation of frequency\-based substring mining. Used to
   count k\-mers in populations of genomes \(supplied as fasta files\).



.. conda:package:: fsm-lite

   |downloads_fsm-lite| |docker_fsm-lite|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends sdsl-lite: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install fsm-lite

   and update with::

      mamba update fsm-lite

  To create a new environment, run::

      mamba create --name myenvname fsm-lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fsm-lite:<tag>

   (see `fsm-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_fsm-lite| image:: https://img.shields.io/conda/dn/bioconda/fsm-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/fsm-lite
   :alt:   (downloads)
.. |docker_fsm-lite| image:: https://quay.io/repository/biocontainers/fsm-lite/status
   :target: https://quay.io/repository/biocontainers/fsm-lite
.. _`fsm-lite/tags`: https://quay.io/repository/biocontainers/fsm-lite?tab=tags


.. raw:: html

    <script>
        var package = "fsm-lite";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fsm-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fsm-lite/README.html