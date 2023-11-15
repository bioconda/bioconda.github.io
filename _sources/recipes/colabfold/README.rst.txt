:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'colabfold'
.. highlight: bash

colabfold
=========

.. conda:recipe:: colabfold
   :replaces_section_title:
   :noindex:

   ColabFold\: making protein folding accessible to all

   :homepage: https://github.com/sokrypton/ColabFold
   :license: MIT
   :recipe: /`colabfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/colabfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/colabfold/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-022-01488-1`, biotools: :biotools:`colabfold`

   


.. conda:package:: colabfold

   |downloads_colabfold| |docker_colabfold|

   :versions:
      
      

      ``1.5.3-1``,  ``1.5.3-0``

      

   
   :depends absl-py: 
   :depends appdirs: 
   :depends biopython: 
   :depends chex: ``0.1.8``
   :depends dm-haiku: 
   :depends dm-tree: 
   :depends hhsuite: ``>=3.3.0``
   :depends immutabledict: 
   :depends importlib-metadata: 
   :depends jax: ``0.4.14``
   :depends jaxlib: ``0.4.14``
   :depends kalign2: ``>=2.04``
   :depends matplotlib-base: 
   :depends ml-collections: 
   :depends mmseqs2: ``>=15.6f452``
   :depends numpy: 
   :depends openmm: ``7.7.0``
   :depends pandas: 
   :depends pdbfixer: 
   :depends py3dmol: 
   :depends python: 
   :depends requests: 
   :depends scipy: 
   :depends tensorflow: ``==2.12.1 cpu*``
   :depends tqdm: 
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

      mamba install colabfold

   and update with::

      mamba update colabfold

  To create a new environment, run::

      mamba create --name myenvname colabfold

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/colabfold:<tag>

   (see `colabfold/tags`_ for valid values for ``<tag>``)


.. |downloads_colabfold| image:: https://img.shields.io/conda/dn/bioconda/colabfold.svg?style=flat
   :target: https://anaconda.org/bioconda/colabfold
   :alt:   (downloads)
.. |docker_colabfold| image:: https://quay.io/repository/biocontainers/colabfold/status
   :target: https://quay.io/repository/biocontainers/colabfold
.. _`colabfold/tags`: https://quay.io/repository/biocontainers/colabfold?tab=tags


.. raw:: html

    <script>
        var package = "colabfold";
        var versions = ["1.5.3","1.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/colabfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/colabfold/README.html