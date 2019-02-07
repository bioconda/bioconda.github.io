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

   :versions: 1.3.7, 1.3.6, 1.3.5, 1.3.4, 1.3.3, 1.3.2, 1.3.1

   :depends: :conda:package:`anndata` >=0.6.10 :conda:package:`h5py`  :conda:package:`louvain`  :conda:package:`matplotlib` >=2.2 :conda:package:`natsort`  :conda:package:`networkx`  :conda:package:`numba`  :conda:package:`pandas` >=0.21 :conda:package:`pytables`  :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`python-igraph`  :conda:package:`scikit-learn`  :conda:package:`scipy`  :conda:package:`seaborn`  :conda:package:`setuptools`  :conda:package:`statsmodels`  

   :required~by: |required_by_scanpy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scanpy

   and update with::

      conda update scanpy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/scanpy


.. |required_by_scanpy| conda:required_by:: scanpy
.. |downloads_scanpy| image:: https://img.shields.io/conda/dn/bioconda/scanpy.svg?style=flat
   :alt:   (downloads)
.. |docker_scanpy| image:: https://quay.io/repository/biocontainers/scanpy/status
   :target: https://quay.io/repository/biocontainers/scanpy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scanpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scanpy/README.html

