:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cuna'
.. highlight: bash

cuna
====

.. conda:recipe:: cuna
   :replaces_section_title:
   :noindex:

   CUNA\: Cytosine Uracil Neural Algorithm for ancient DNA damage detection using nanopore signals.

   :homepage: https://github.com/iris1901/CUNA
   :license: MIT / MIT
   :recipe: /`cuna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cuna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cuna/meta.yaml>`_

   CUNA is a deep learning pipeline for detecting cytosine deamination \(C→U\) events in ancient DNA\, using raw nanopore signals.
   It includes feature extraction\, model training\, and modification detection.



.. conda:package:: cuna

   |downloads_cuna| |docker_cuna|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends h5py: 
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: 
   :depends pod5: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends pytorch: 
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install cuna

   and update with::

      mamba update cuna

  To create a new environment, run::

      mamba create --name myenvname cuna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cuna:<tag>

   (see `cuna/tags`_ for valid values for ``<tag>``)


.. |downloads_cuna| image:: https://img.shields.io/conda/dn/bioconda/cuna.svg?style=flat
   :target: https://anaconda.org/bioconda/cuna
   :alt:   (downloads)
.. |docker_cuna| image:: https://quay.io/repository/biocontainers/cuna/status
   :target: https://quay.io/repository/biocontainers/cuna
.. _`cuna/tags`: https://quay.io/repository/biocontainers/cuna?tab=tags


.. raw:: html

    <script>
        var package = "cuna";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cuna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cuna/README.html