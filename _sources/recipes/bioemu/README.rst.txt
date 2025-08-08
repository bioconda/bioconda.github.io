:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioemu'
.. highlight: bash

bioemu
======

.. conda:recipe:: bioemu
   :replaces_section_title:
   :noindex:

   Biomolecular emulator for scalable emulation of protein equilibrium ensembles with generative deep learning

   :homepage: https://github.com/microsoft/bioemu
   :license: Apache-2.0 AND MIT
   :recipe: /`bioemu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioemu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioemu/meta.yaml>`_
   :links: biotools: :biotools:`bioemu`, doi: :doi:`10.1126/science.adv9817`, doi: :doi:`10.1101/2024.12.05.626885v2`

   


.. conda:package:: bioemu

   |downloads_bioemu| |docker_bioemu|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends bio: ``>=1.5.9``
   :depends dm-tree: 
   :depends fire: ``>=0.7.0``
   :depends huggingface_hub: 
   :depends hydra-core: 
   :depends mdtraj: ``>=1.9.9``
   :depends modelcif: ``0.7``
   :depends python: ``>=3.10``
   :depends pytorch: ``>=2.6.0``
   :depends stackprinter: 
   :depends torch-geometric: ``>=2.6.1``
   :depends typer: 
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

      mamba install bioemu

   and update with::

      mamba update bioemu

  To create a new environment, run::

      mamba create --name myenvname bioemu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioemu:<tag>

   (see `bioemu/tags`_ for valid values for ``<tag>``)


.. |downloads_bioemu| image:: https://img.shields.io/conda/dn/bioconda/bioemu.svg?style=flat
   :target: https://anaconda.org/bioconda/bioemu
   :alt:   (downloads)
.. |docker_bioemu| image:: https://quay.io/repository/biocontainers/bioemu/status
   :target: https://quay.io/repository/biocontainers/bioemu
.. _`bioemu/tags`: https://quay.io/repository/biocontainers/bioemu?tab=tags


.. raw:: html

    <script>
        var package = "bioemu";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioemu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioemu/README.html