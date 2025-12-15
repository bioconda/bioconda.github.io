:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'instanovo'
.. highlight: bash

instanovo
=========

.. conda:recipe:: instanovo
   :replaces_section_title:
   :noindex:

   InstaNovo enables diffusion\-powered de novo peptide sequencing in large scale proteomics experiments.

   :homepage: https://github.com/instadeepai/instanovo
   :documentation: https://instadeepai.github.io/InstaNovo/
   
   :license: APACHE / Apache-2.0
   :recipe: /`instanovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/instanovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/instanovo/meta.yaml>`_
   :links: doi: :doi:`10.1038/s42256-025-01019-5`, biotools: :biotools:`instanovo`

   


.. conda:package:: instanovo

   |downloads_instanovo| |docker_instanovo|

   :versions:
      
      

      ``1.2.2-1``,  ``1.2.2-0``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.0-0``

      

   
   :depends accelerate: ``>=1.6.0``
   :depends datasets: ``>=3.5.0``
   :depends gitpython: ``>=3.1.44``
   :depends hydra-core: ``>=1.3.2``
   :depends importlib-resources: ``>=6.5.2``
   :depends jaxtyping: ``>=0.2.34``
   :depends jiwer: ``>=3.0.5``
   :depends matchms: ``>=0.28.1``
   :depends neptune: ``>=1.13.0``
   :depends numpy: ``>=2.0.2``
   :depends omegaconf: ``>=2.3.0``
   :depends pandas: ``>=2.2.3``
   :depends platformdirs: ``>=4.5.1``
   :depends polars: ``>=1.12.0``
   :depends pubchempy: ``>=1.0.4``
   :depends pyteomics: ``>=4.7.5``
   :depends python: ``>=3.10,<3.14``
   :depends python-dotenv: ``>=1.0.1``
   :depends pyyaml: ``>=6.0.2``
   :depends requests: ``>=2.32.3``
   :depends s3fs: ``>=2024.12.0``
   :depends scikit-learn: ``>=1.5.2``
   :depends signalrcore: ``>=0.9.5``
   :depends spectrum_utils: ``>=0.4.2``
   :depends tensorboard: ``>=2.18.0``
   :depends tqdm: ``>=4.67.0``
   :depends transfusion-asr: ``>=0.1.0``
   :depends typer: ``>=0.15.1``
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

      mamba install instanovo

   and update with::

      mamba update instanovo

  To create a new environment, run::

      mamba create --name myenvname instanovo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/instanovo:<tag>

   (see `instanovo/tags`_ for valid values for ``<tag>``)


.. |downloads_instanovo| image:: https://img.shields.io/conda/dn/bioconda/instanovo.svg?style=flat
   :target: https://anaconda.org/bioconda/instanovo
   :alt:   (downloads)
.. |docker_instanovo| image:: https://quay.io/repository/biocontainers/instanovo/status
   :target: https://quay.io/repository/biocontainers/instanovo
.. _`instanovo/tags`: https://quay.io/repository/biocontainers/instanovo?tab=tags


.. raw:: html

    <script>
        var package = "instanovo";
        var versions = ["1.2.2","1.2.2","1.1.4","1.1.3","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/instanovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/instanovo/README.html