:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kompot'
.. highlight: bash

kompot
======

.. conda:recipe:: kompot
   :replaces_section_title:
   :noindex:

   Differential abundance and gene expression analysis using Mahalanobis distance with JAX backend

   :homepage: https://github.com/settylab/kompot
   :documentation: https://kompot.readthedocs.io/
   
   :license: GPL / GPL-3.0-or-later
   :recipe: /`kompot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kompot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kompot/meta.yaml>`_

   Kompot performs differential abundance and differential gene expression
   analysis using Gaussian process\-based methods with Mahalanobis distance.
   It features a fast JAX backend and supports both Python API and CLI.



.. conda:package:: kompot

   |downloads_kompot| |docker_kompot|

   :versions:
      
      

      ``0.6.0-0``

      

   
   :depends anndata: ``>=0.8.0``
   :depends filelock: ``>=3.12.0``
   :depends jax: ``>=0.3.0``
   :depends jaxlib: ``>=0.3.0``
   :depends matplotlib-base: ``>=3.5.0``
   :depends mellon: ``>=1.6.0``
   :depends numpy: ``>=1.20.0``
   :depends pandas: ``>=1.3.0``
   :depends psutil: ``>=5.9.0``
   :depends pynndescent: ``>=0.5.0``
   :depends python: ``>=3.9``
   :depends python-igraph: ``>=0.10.0``
   :depends pyyaml: ``>=5.0.0``
   :depends scikit-learn: ``>=1.0.0``
   :depends scipy: ``>=1.7.0``
   :depends statsmodels: ``>=0.13.0``
   :depends tqdm: ``>=4.60.0``
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

      mamba install kompot

   and update with::

      mamba update kompot

  To create a new environment, run::

      mamba create --name myenvname kompot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kompot:<tag>

   (see `kompot/tags`_ for valid values for ``<tag>``)


.. |downloads_kompot| image:: https://img.shields.io/conda/dn/bioconda/kompot.svg?style=flat
   :target: https://anaconda.org/bioconda/kompot
   :alt:   (downloads)
.. |docker_kompot| image:: https://quay.io/repository/biocontainers/kompot/status
   :target: https://quay.io/repository/biocontainers/kompot
.. _`kompot/tags`: https://quay.io/repository/biocontainers/kompot?tab=tags


.. raw:: html

    <script>
        var package = "kompot";
        var versions = ["0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kompot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kompot/README.html