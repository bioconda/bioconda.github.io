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

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install episcanpy

   and update with::

      conda update episcanpy

   or use the docker container::

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