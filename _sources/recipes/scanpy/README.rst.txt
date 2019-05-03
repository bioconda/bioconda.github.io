:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scanpy'
.. highlight: bash

scanpy
======

.. conda:recipe:: scanpy
   :replaces_section_title:

   Single\-Cell Analysis in Python. Scales to \>1M cells.

   :homepage: https://scanpy.readthedocs.io/en/latest/
   :license: BSD-3
   :recipe: /`scanpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-017-1382-0`

   


.. conda:package:: scanpy

   |downloads_scanpy| |docker_scanpy|

   :versions: 1.4.1-0, 1.4-0, 1.3.7-0, 1.3.6-0, 1.3.5-0, 1.3.4-0, 1.3.3-0, 1.3.2-0, 1.3.1-0
   
   :depends anndata: >=0.6.10
   :depends h5py: 
   :depends louvain: 
   :depends matplotlib: >=2.2
   :depends natsort: 
   :depends networkx: 
   :depends numba: 
   :depends pandas: >=0.21
   :depends pytables: 
   :depends python: >=3.6
   :depends python-igraph: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends setuptools: 
   :depends statsmodels: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scanpy

   and update with::

      conda update scanpy

   or use the docker container::

      docker pull quay.io/biocontainers/scanpy:<tag>

   (see `scanpy/tags`_ for valid values for ``<tag>``)


.. |downloads_scanpy| image:: https://img.shields.io/conda/dn/bioconda/scanpy.svg?style=flat
   :alt:   (downloads)
.. |docker_scanpy| image:: https://quay.io/repository/biocontainers/scanpy/status
   :target: https://quay.io/repository/biocontainers/scanpy
.. _`scanpy/tags`: https://quay.io/repository/biocontainers/scanpy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scanpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scanpy/README.html