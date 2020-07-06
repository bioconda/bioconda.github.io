:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clust'
.. highlight: bash

clust
=====

.. conda:recipe:: clust
   :replaces_section_title:
   :noindex:

   Optimised consensus clustering of multiple heterogeneous datasets.

   :homepage: https://github.com/baselabujamous/clust
   :license: LGPL / LGPL-3.0
   :recipe: /`clust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clust/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-018-1536-8`

   


.. conda:package:: clust

   |downloads_clust| |docker_clust|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.12-0``,  ``1.10.10-0``,  ``1.10.8-0``,  ``1.10.7-0``,  ``1.8.10-0``,  ``1.8.9-0``,  ``1.8.7-0``,  ``1.8.4-0``

      

   
   :depends joblib: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends portalocker: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clust

   and update with::

      conda update clust

   or use the docker container::

      docker pull quay.io/biocontainers/clust:<tag>

   (see `clust/tags`_ for valid values for ``<tag>``)


.. |downloads_clust| image:: https://img.shields.io/conda/dn/bioconda/clust.svg?style=flat
   :target: https://anaconda.org/bioconda/clust
   :alt:   (downloads)
.. |docker_clust| image:: https://quay.io/repository/biocontainers/clust/status
   :target: https://quay.io/repository/biocontainers/clust
.. _`clust/tags`: https://quay.io/repository/biocontainers/clust?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clust/README.html