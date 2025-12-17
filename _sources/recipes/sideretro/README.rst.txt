:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sideretro'
.. highlight: bash

sideretro
=========

.. conda:recipe:: sideretro
   :replaces_section_title:
   :noindex:

   A pipeline for detecting Somatic Insertion of DE novo RETROcopies

   :homepage: https://github.com/galantelab/sideRETRO
   :license: GPL3 / GPL-3.0-only
   :recipe: /`sideretro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sideretro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sideretro/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa689`

   


.. conda:package:: sideretro

   |downloads_sideretro| |docker_sideretro|

   :versions:
      
      

      ``1.1.6-0``

      

   
   :depends htslib: ``>=1.21,<1.24.0a0``
   :depends libgcc: ``>=13``
   :depends libsqlite: ``>=3.49.1,<4.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install sideretro

   and update with::

      mamba update sideretro

  To create a new environment, run::

      mamba create --name myenvname sideretro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sideretro:<tag>

   (see `sideretro/tags`_ for valid values for ``<tag>``)


.. |downloads_sideretro| image:: https://img.shields.io/conda/dn/bioconda/sideretro.svg?style=flat
   :target: https://anaconda.org/bioconda/sideretro
   :alt:   (downloads)
.. |docker_sideretro| image:: https://quay.io/repository/biocontainers/sideretro/status
   :target: https://quay.io/repository/biocontainers/sideretro
.. _`sideretro/tags`: https://quay.io/repository/biocontainers/sideretro?tab=tags


.. raw:: html

    <script>
        var package = "sideretro";
        var versions = ["1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sideretro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sideretro/README.html