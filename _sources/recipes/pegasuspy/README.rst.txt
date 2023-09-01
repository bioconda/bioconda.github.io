:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pegasuspy'
.. highlight: bash

pegasuspy
=========

.. conda:recipe:: pegasuspy
   :replaces_section_title:
   :noindex:

   An efficient Python analysis tool which scales to transcriptomes of millions of single cells.

   :homepage: https://github.com/lilab-bcb/pegasus
   :documentation: https://pegasus.readthedocs.io
   
   :license: BSD / BSD-3-Clause
   :recipe: /`pegasuspy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegasuspy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegasuspy/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-020-0905-x`

   Pegasus is a tool for analyzing transcriptomes of millions of single cells.
   It is a command line tool\, a python package and a base for Cloud\-based analysis workflows.



.. conda:package:: pegasuspy

   |downloads_pegasuspy| |docker_pegasuspy|

   :versions:
      
      

      ``1.8.1-0``,  ``1.7.1-2``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends adjusttext: 
   :depends anndata: ``>=0.7.1``
   :depends demuxem: 
   :depends docopt: 
   :depends harmony-pytorch: 
   :depends hnswlib: 
   :depends importlib_metadata: ``>=0.7``
   :depends joblib: ``>=0.14``
   :depends leidenalg: ``>=0.8.0``
   :depends libgcc-ng: ``>=12``
   :depends lightgbm: ``>=2.2.1``
   :depends loompy: ``>=3``
   :depends louvain: ``>=0.7.0``
   :depends matplotlib-base: ``>=2.0.0``
   :depends natsort: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: ``>=1.2.0``
   :depends pegasusio: ``>=0.5.1``
   :depends psutil: 
   :depends pybind11: 
   :depends pyfit-sne: ``>=1.1.1``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-igraph: ``>=0.8.0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: ``>=0.23.2``
   :depends scikit-misc: 
   :depends scipy: ``>=1.7``
   :depends seaborn: 
   :depends statsmodels: 
   :depends tbb: 
   :depends threadpoolctl: 
   :depends umap-learn: ``>=0.5.2``
   :depends wordcloud: 
   :depends xlsxwriter: 
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

      mamba install pegasuspy

   and update with::

      mamba update pegasuspy

  To create a new environment, run::

      mamba create --name myenvname pegasuspy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pegasuspy:<tag>

   (see `pegasuspy/tags`_ for valid values for ``<tag>``)


.. |downloads_pegasuspy| image:: https://img.shields.io/conda/dn/bioconda/pegasuspy.svg?style=flat
   :target: https://anaconda.org/bioconda/pegasuspy
   :alt:   (downloads)
.. |docker_pegasuspy| image:: https://quay.io/repository/biocontainers/pegasuspy/status
   :target: https://quay.io/repository/biocontainers/pegasuspy
.. _`pegasuspy/tags`: https://quay.io/repository/biocontainers/pegasuspy?tab=tags


.. raw:: html

    <script>
        var package = "pegasuspy";
        var versions = ["1.8.1","1.7.1","1.7.1","1.7.1","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pegasuspy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pegasuspy/README.html