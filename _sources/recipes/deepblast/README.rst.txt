:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepblast'
.. highlight: bash

deepblast
=========

.. conda:recipe:: deepblast
   :replaces_section_title:
   :noindex:

   Neural Networks for Protein Sequence Alignment.

   :homepage: https://github.com/flatironinstitute/deepblast
   :license: BSD / BSD-3-Clause
   :recipe: /`deepblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepblast/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.11.03.365932`

   


.. conda:package:: deepblast

   |downloads_deepblast| |docker_deepblast|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends biopython: ``>=1.78,<2.0``
   :depends faiss: 
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: 
   :depends pillow: 
   :depends python: 
   :depends pytorch: ``>=1.4``
   :depends pytorch-lightning: ``>=0.8.1``
   :depends scikit-learn: 
   :depends scipy: 
   :depends sentencepiece: 
   :depends tensorboard: 
   :depends transformers: 
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

      mamba install deepblast

   and update with::

      mamba update deepblast

  To create a new environment, run::

      mamba create --name myenvname deepblast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepblast:<tag>

   (see `deepblast/tags`_ for valid values for ``<tag>``)


.. |downloads_deepblast| image:: https://img.shields.io/conda/dn/bioconda/deepblast.svg?style=flat
   :target: https://anaconda.org/bioconda/deepblast
   :alt:   (downloads)
.. |docker_deepblast| image:: https://quay.io/repository/biocontainers/deepblast/status
   :target: https://quay.io/repository/biocontainers/deepblast
.. _`deepblast/tags`: https://quay.io/repository/biocontainers/deepblast?tab=tags


.. raw:: html

    <script>
        var package = "deepblast";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepblast/README.html