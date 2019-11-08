:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scanpy-scripts'
.. highlight: bash

scanpy-scripts
==============

.. conda:recipe:: scanpy-scripts
   :replaces_section_title:

   Scripts for using scanpy from the command line

   :homepage: https://github.com/ebi-gene-expression-group/scanpy-scripts
   :license: Apache / Apache-2.0
   :recipe: /`scanpy-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy-scripts/meta.yaml>`_

   


.. conda:package:: scanpy-scripts

   |downloads_scanpy-scripts| |docker_scanpy-scripts|

   :versions: 0.2.5.post1-0, 0.2.5-0, 0.2.4.post4-3, 0.2.4.post4-2, 0.2.4.post4-1, 0.2.4.post4-0, 0.2.4.post3-0, 0.2.4.post1-0, 0.2.4-0, 0.2.2-0, 0.0.5-4, 0.0.5-3, 0.0.5-2, 0.0.5-1, 0.0.5-0, 0.0.4-2, 0.0.4-1, 0.0.3-1, 0.0.2-0
   
   :depends anndata: <0.6.20
   :depends click: 
   :depends h5py: <2.10
   :depends leidenalg: 
   :depends loompy: >=2.0.0,<3.0.0
   :depends louvain: 
   :depends matplotlib: 
   :depends multicore-tsne: 
   :depends packaging: 
   :depends pandas: 
   :depends python: >=3
   :depends scanpy: >=1.4.2,<1.4.4
   :depends scipy: >=1.2.0,<1.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scanpy-scripts

   and update with::

      conda update scanpy-scripts

   or use the docker container::

      docker pull quay.io/biocontainers/scanpy-scripts:<tag>

   (see `scanpy-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_scanpy-scripts| image:: https://img.shields.io/conda/dn/bioconda/scanpy-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/scanpy-scripts
   :alt:   (downloads)
.. |docker_scanpy-scripts| image:: https://quay.io/repository/biocontainers/scanpy-scripts/status
   :target: https://quay.io/repository/biocontainers/scanpy-scripts
.. _`scanpy-scripts/tags`: https://quay.io/repository/biocontainers/scanpy-scripts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scanpy-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scanpy-scripts/README.html