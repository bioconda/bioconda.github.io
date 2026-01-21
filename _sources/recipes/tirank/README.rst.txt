:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tirank'
.. highlight: bash

tirank
======

.. conda:recipe:: tirank
   :replaces_section_title:
   :noindex:

   A comprehensive analysis tool for transferring phenotype of bulk transcriptomic data to single\-cell or spatial transcriptomic data.

   :homepage: https://github.com/LenisLin/TiRank
   :license: MIT
   :recipe: /`tirank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tirank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tirank/meta.yaml>`_

   TiRank integrates deep learning and statistical analysis to infer phenotype
   transfer from bulk transcriptomic data to single\-cell or spatial transcriptomic data.
   GPU\-accelerated modules rely on PyTorch \(\>\=2.1\) and torchvision \(\>\=0.16\)\,
   which should be installed manually according to the user\'s CUDA environment.



.. conda:package:: tirank

   |downloads_tirank| |docker_tirank|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.0-0``,  ``0.1.3-0``

      

   
   :depends dash: ``>=2.14``
   :depends dash-bootstrap-components: ``>=1.5``
   :depends gseapy: ``>=1.1``
   :depends imbalanced-learn: ``>=0.11``
   :depends lifelines: ``>=0.28``
   :depends matplotlib-base: ``>=3.8``
   :depends numpy: ``>=1.26``
   :depends optuna: ``>=3.5``
   :depends pandas: ``>=2.1``
   :depends pillow: ``>=10.2``
   :depends python: ``>=3.9``
   :depends scanpy: ``>=1.9``
   :depends scikit-learn: ``>=1.3``
   :depends scipy: ``>=1.11``
   :depends seaborn-base: ``>=0.13``
   :depends statsmodels: ``>=0.14``
   :depends timm: ``>=0.9``
   :depends tqdm: 
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

      mamba install tirank

   and update with::

      mamba update tirank

  To create a new environment, run::

      mamba create --name myenvname tirank

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tirank:<tag>

   (see `tirank/tags`_ for valid values for ``<tag>``)


.. |downloads_tirank| image:: https://img.shields.io/conda/dn/bioconda/tirank.svg?style=flat
   :target: https://anaconda.org/bioconda/tirank
   :alt:   (downloads)
.. |docker_tirank| image:: https://quay.io/repository/biocontainers/tirank/status
   :target: https://quay.io/repository/biocontainers/tirank
.. _`tirank/tags`: https://quay.io/repository/biocontainers/tirank?tab=tags


.. raw:: html

    <script>
        var package = "tirank";
        var versions = ["1.0.2","1.0.0","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tirank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tirank/README.html