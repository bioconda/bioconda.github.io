:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cascade-reg'
.. highlight: bash

cascade-reg
===========

.. conda:recipe:: cascade-reg
   :replaces_section_title:
   :noindex:

   Causal discovery of gene regulatory programs from single\-cell genomics

   :homepage: https://github.com/gao-lab/CASCADE
   :documentation: https://cascade-reg.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`cascade-reg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cascade-reg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cascade-reg/meta.yaml>`_

   CASCADE stands for Causality\-Aware Single\-Cell Adaptive
   Discover\/Deduction\/Design Engine. It is a deep learning\-based bioinformatics
   tool for causal gene regulatory network discovery\, counterfactual
   perturbation effect prediction\, and targeted intervention design based on
   high\-content single\-cell perturbation screens.



.. conda:package:: cascade-reg

   |downloads_cascade-reg| |docker_cascade-reg|

   :versions:
      
      

      ``0.5.1-0``

      

   
   :depends adjusttext: 
   :depends anndata: 
   :depends kneed: 
   :depends loguru: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends pynvml: 
   :depends python: 
   :depends pytorch: ``>=2``
   :depends pytorch-lightning: ``>=2``
   :depends pyyaml: 
   :depends rich: 
   :depends scanpy: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends tensorboard: 
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

      mamba install cascade-reg

   and update with::

      mamba update cascade-reg

  To create a new environment, run::

      mamba create --name myenvname cascade-reg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cascade-reg:<tag>

   (see `cascade-reg/tags`_ for valid values for ``<tag>``)


.. |downloads_cascade-reg| image:: https://img.shields.io/conda/dn/bioconda/cascade-reg.svg?style=flat
   :target: https://anaconda.org/bioconda/cascade-reg
   :alt:   (downloads)
.. |docker_cascade-reg| image:: https://quay.io/repository/biocontainers/cascade-reg/status
   :target: https://quay.io/repository/biocontainers/cascade-reg
.. _`cascade-reg/tags`: https://quay.io/repository/biocontainers/cascade-reg?tab=tags


.. raw:: html

    <script>
        var package = "cascade-reg";
        var versions = ["0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cascade-reg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cascade-reg/README.html