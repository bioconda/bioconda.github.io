:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pegasuspy'
.. highlight: bash

pegasuspy
=========

.. conda:recipe:: pegasuspy
   :replaces_section_title:
   :noindex:

   An efficient Python analysis tool which scales to transcriptomes of millions of single cells.

   :homepage: https://github.com/klarman-cell-observatory/pegasus
   :documentation: https://pegasus.readthedocs.io
   
   :license: BSD / BSD-3-Clause
   :recipe: /`pegasuspy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegasuspy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegasuspy/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-020-0905-x`

   Pegasus is a tool for analyzing transcriptomes of millions of single cells. 
   It is a command line tool\, a python package and a base for Cloud\-based analysis workflows.



.. conda:package:: pegasuspy

   |downloads_pegasuspy| |docker_pegasuspy|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends adjusttext: 
   :depends anndata: ``>=0.7``
   :depends demuxem: 
   :depends docopt: 
   :depends forceatlas2-python: 
   :depends gprofiler-official: 
   :depends harmony-pytorch: 
   :depends hnswlib: 
   :depends importlib_metadata: ``>=0.7``
   :depends joblib: 
   :depends leidenalg: ``>=0.8.0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends lightgbm: 
   :depends loompy: 
   :depends louvain: ``>=0.7.0``
   :depends matplotlib-base: ``>=2.0.0``
   :depends natsort: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: ``>=0.24``
   :depends pegasusio: ``>=0.2.9``
   :depends pyarrow: 
   :depends pybind11: 
   :depends pyfit-sne: ``>=1.1.1``
   :depends python: ``>=3.7,<3.8.0a0``
   :depends python-igraph: ``>=0.8.0``
   :depends python_abi: ``3.7.* *_cp37m``
   :depends scanorama: 
   :depends scikit-learn: ``>=0.23.2``
   :depends scikit-misc: 
   :depends scipy: 
   :depends seaborn: 
   :depends statsmodels: 
   :depends umap-learn: ``>=0.4``
   :depends xlrd: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pegasuspy

   and update with::

      conda update pegasuspy

   or use the docker container::

      docker pull quay.io/biocontainers/pegasuspy:<tag>

   (see `pegasuspy/tags`_ for valid values for ``<tag>``)


.. |downloads_pegasuspy| image:: https://img.shields.io/conda/dn/bioconda/pegasuspy.svg?style=flat
   :target: https://anaconda.org/bioconda/pegasuspy
   :alt:   (downloads)
.. |docker_pegasuspy| image:: https://quay.io/repository/biocontainers/pegasuspy/status
   :target: https://quay.io/repository/biocontainers/pegasuspy
.. _`pegasuspy/tags`: https://quay.io/repository/biocontainers/pegasuspy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pegasuspy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pegasuspy/README.html