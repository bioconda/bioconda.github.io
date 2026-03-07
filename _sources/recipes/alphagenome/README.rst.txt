:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alphagenome'
.. highlight: bash

alphagenome
===========

.. conda:recipe:: alphagenome
   :replaces_section_title:
   :noindex:

   Python SDK for interacting with and visualizing AlphaGenome genomic models

   :homepage: https://github.com/google-deepmind/alphagenome
   :documentation: https://www.alphagenomedocs.com/
   
   :license: APACHE / Apache-2.0
   :recipe: /`alphagenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphagenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphagenome/meta.yaml>`_

   AlphaGenome is a unified DNA sequence model from Google DeepMind for
   regulatory variant\-effect prediction. This package provides the Python
   SDK for interacting with the AlphaGenome API and visualizing predictions
   across gene expression\, splicing\, chromatin features\, and contact maps.



.. conda:package:: alphagenome

   |downloads_alphagenome| |docker_alphagenome|

   :versions:
      
      

      ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``

      

   
   :depends absl-py: 
   :depends anndata: 
   :depends grpcio: ``>=1.67.1``
   :depends immutabledict: 
   :depends intervaltree: 
   :depends jaxtyping: 
   :depends matplotlib-base: 
   :depends ml_dtypes: 
   :depends numpy: 
   :depends pandas: 
   :depends protobuf: ``>=5.28.3``
   :depends pyarrow: 
   :depends python: ``>=3.10``
   :depends scipy: 
   :depends seaborn: 
   :depends tqdm: 
   :depends typeguard: 
   :depends typing-extensions: 
   :depends zstandard: 
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

      mamba install alphagenome

   and update with::

      mamba update alphagenome

  To create a new environment, run::

      mamba create --name myenvname alphagenome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alphagenome:<tag>

   (see `alphagenome/tags`_ for valid values for ``<tag>``)


.. |downloads_alphagenome| image:: https://img.shields.io/conda/dn/bioconda/alphagenome.svg?style=flat
   :target: https://anaconda.org/bioconda/alphagenome
   :alt:   (downloads)
.. |docker_alphagenome| image:: https://quay.io/repository/biocontainers/alphagenome/status
   :target: https://quay.io/repository/biocontainers/alphagenome
.. _`alphagenome/tags`: https://quay.io/repository/biocontainers/alphagenome?tab=tags


.. raw:: html

    <script>
        var package = "alphagenome";
        var versions = ["0.6.1","0.6.0","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alphagenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alphagenome/README.html