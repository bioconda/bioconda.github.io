:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'episcanpy'
.. highlight: bash

episcanpy
=========

.. conda:recipe:: episcanpy
   :replaces_section_title:
   :noindex:

   Epigenomics Single\-Cell Analysis in Python.

   :homepage: https://github.com/colomemaria/epiScanpy
   :license: BSD-3-Clause
   :recipe: /`episcanpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/episcanpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/episcanpy/meta.yaml>`_
   :links: biotools: :biotools:`epiScanpy`, doi: :doi:`10.1038/s41467-021-25131-3`

   


.. conda:package:: episcanpy

   |downloads_episcanpy| |docker_episcanpy|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.2-0``

      

   
   :depends anndata: 
   :depends bamnostic: 
   :depends h5py: 
   :depends importlib-metadata: ``>=0.7``
   :depends intervaltree: 
   :depends joblib: 
   :depends kneed: 
   :depends legacy-api-wrap: 
   :depends matplotlib-base: 
   :depends natsort: 
   :depends networkx: 
   :depends numba: ``>=0.50.0``
   :depends numpy: ``>=1.21.2``
   :depends packaging: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends scanpy: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends setuptools-scm: 
   :depends statsmodels: 
   :depends tbb: 
   :depends tqdm: 
   :depends umap-learn: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install episcanpy

   and update with::

      mamba update episcanpy

  To create a new environment, run::

      mamba create --name myenvname episcanpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/episcanpy:<tag>

   (see `episcanpy/tags`_ for valid values for ``<tag>``)


.. |downloads_episcanpy| image:: https://img.shields.io/conda/dn/bioconda/episcanpy.svg?style=flat
   :target: https://anaconda.org/bioconda/episcanpy
   :alt:   (downloads)
.. |docker_episcanpy| image:: https://quay.io/repository/biocontainers/episcanpy/status
   :target: https://quay.io/repository/biocontainers/episcanpy
.. _`episcanpy/tags`: https://quay.io/repository/biocontainers/episcanpy?tab=tags


.. raw:: html

    <script>
        var package = "episcanpy";
        var versions = ["0.4.0","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/episcanpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/episcanpy/README.html