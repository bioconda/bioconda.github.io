:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gene-trajectory-python'
.. highlight: bash

gene-trajectory-python
======================

.. conda:recipe:: gene-trajectory-python
   :replaces_section_title:
   :noindex:

   Compute gene trajectories

   :homepage: https://github.com/KlugerLab/GeneTrajectory-python
   :license: MIT
   :recipe: /`gene-trajectory-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gene-trajectory-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gene-trajectory-python/meta.yaml>`_

   Gene Trajectory is a Python package that computes and analyzes gene trajectories in single\-cell data.
   It provides tools for trajectory inference\, gene expression analysis along trajectories\, and visualization of results.



.. conda:package:: gene-trajectory-python

   |downloads_gene-trajectory-python| |docker_gene-trajectory-python|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends matplotlib-base: ``>=3.6``
   :depends numpy: ``>=1.25``
   :depends pandas: ``>=1.5``
   :depends pot: ``>=0.8.2``
   :depends python: ``>=3.9``
   :depends python-igraph: ``>=0.10``
   :depends scanpy: ``>=1.9.3``
   :depends scikit-learn: ``>=0.24``
   :depends scikit-misc: ``>=0.1.3``
   :depends scipy: ``>=1.8``
   :depends seaborn: ``>=0.13``
   :depends tqdm: ``>=4.64.1``
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

      mamba install gene-trajectory-python

   and update with::

      mamba update gene-trajectory-python

  To create a new environment, run::

      mamba create --name myenvname gene-trajectory-python

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gene-trajectory-python:<tag>

   (see `gene-trajectory-python/tags`_ for valid values for ``<tag>``)


.. |downloads_gene-trajectory-python| image:: https://img.shields.io/conda/dn/bioconda/gene-trajectory-python.svg?style=flat
   :target: https://anaconda.org/bioconda/gene-trajectory-python
   :alt:   (downloads)
.. |docker_gene-trajectory-python| image:: https://quay.io/repository/biocontainers/gene-trajectory-python/status
   :target: https://quay.io/repository/biocontainers/gene-trajectory-python
.. _`gene-trajectory-python/tags`: https://quay.io/repository/biocontainers/gene-trajectory-python?tab=tags


.. raw:: html

    <script>
        var package = "gene-trajectory-python";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gene-trajectory-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gene-trajectory-python/README.html