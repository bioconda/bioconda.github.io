:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scanpy'
.. highlight: bash

scanpy
======

.. conda:recipe:: scanpy
   :replaces_section_title:
   :noindex:

   Single\-Cell Analysis in Python. Scales to \>1M cells.

   :homepage: https://scanpy.readthedocs.io/en/latest/
   :developer docs: http://github.com/theislab/scanpy
   :license: BSD / BSD-3
   :recipe: /`scanpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-017-1382-0`

   


.. conda:package:: scanpy

   |downloads_scanpy| |docker_scanpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.0-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.6-0</code>,  <code>1.4.4.post1-3</code>,  <code>1.4.4.post1-2</code>,  <code>1.4.4.post1-1</code>,  <code>1.4.4.post1-0</code>,  <code>1.4.4-1</code>,  </span></summary>
      

      ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.6-0``,  ``1.4.4.post1-3``,  ``1.4.4.post1-2``,  ``1.4.4.post1-1``,  ``1.4.4.post1-0``,  ``1.4.4-1``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends anndata: ``>=0.7``
   :depends h5py: ``>=2.10.0``
   :depends importlib_metadata: ``>=0.7``
   :depends joblib: 
   :depends legacy-api-wrap: 
   :depends matplotlib-base: ``>=3.1.2``
   :depends natsort: 
   :depends networkx: 
   :depends numba: ``>=0.41.0``
   :depends packaging: 
   :depends pandas: ``>=0.21``
   :depends patsy: 
   :depends pytables: 
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.21.2``
   :depends scipy: ``>=1.3``
   :depends seaborn: 
   :depends setuptools_scm: 
   :depends sinfo: 
   :depends statsmodels: ``>=0.10.0rc2``
   :depends tqdm: 
   :depends umap-learn: ``>=0.3.10``
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
   :target: https://anaconda.org/bioconda/scanpy
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