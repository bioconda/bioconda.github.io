:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepchopper'
.. highlight: bash

deepchopper
===========

.. conda:recipe:: deepchopper
   :replaces_section_title:
   :noindex:

   A Genomic Language Model for Chimera Artifact Detection in Nanopore Direct RNA Sequencing.

   :homepage: https://github.com/ylab-hi/DeepChopper
   :license: Apache / Apache-2.0
   :recipe: /`deepchopper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepchopper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepchopper/meta.yaml>`_

   DeepChopper is a genomic language model designed to identify artificial sequences.
   It provides functionality for encoding FASTQ files\, making predictions\, and chopping sequences.



.. conda:package:: deepchopper

   |downloads_deepchopper| |docker_deepchopper|

   :versions:
      
      

      ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-0``

      

   
   :depends datasets: ``2.14.2``
   :depends deepchopper-cli: ``>=1.2.5``
   :depends evaluate: ``>=0.4.1``
   :depends fastapi: ``0.112.2``
   :depends gradio: ``5.0.1``
   :depends hydra-core: ``>=1.3.2``
   :depends libgcc: ``>=12``
   :depends lightning: ``>=2.1.2``
   :depends omegaconf: ``>=2.3.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-multipart: ``0.0.12``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pytorch: ``>=2.1.0``
   :depends rich: ``>=13.7.0``
   :depends safetensors: ``>=0.4.2``
   :depends scikit-learn: ``>=1.5.2``
   :depends torchmetrics: ``>=1.2.0``
   :depends transformers: ``>=4.37.2``
   :depends typer: ``>=0.12.0``
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

      mamba install deepchopper

   and update with::

      mamba update deepchopper

  To create a new environment, run::

      mamba create --name myenvname deepchopper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepchopper:<tag>

   (see `deepchopper/tags`_ for valid values for ``<tag>``)


.. |downloads_deepchopper| image:: https://img.shields.io/conda/dn/bioconda/deepchopper.svg?style=flat
   :target: https://anaconda.org/bioconda/deepchopper
   :alt:   (downloads)
.. |docker_deepchopper| image:: https://quay.io/repository/biocontainers/deepchopper/status
   :target: https://quay.io/repository/biocontainers/deepchopper
.. _`deepchopper/tags`: https://quay.io/repository/biocontainers/deepchopper?tab=tags


.. raw:: html

    <script>
        var package = "deepchopper";
        var versions = ["1.2.5","1.2.5","1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepchopper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepchopper/README.html