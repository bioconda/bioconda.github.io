.. title:: Package Recipe 'clust'
.. highlight: bash


clust
=====

.. conda:recipe:: clust
   :replaces_section_title:

   Optimised consensus clustering of multiple heterogeneous datasets.

   :homepage: https://github.com/baselabujamous/clust
   :license: University of Oxford Academic Use Licence
   :recipe: /`clust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clust/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-018-1536-8`

   


.. conda:package:: clust

   |downloads_clust| |docker_clust|

   :versions: 1.8.10, 1.8.9, 1.8.7, 1.8.4

   :depends: :conda:package:`joblib`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`portalocker`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scikit-learn`  :conda:package:`scipy`  :conda:package:`sompy`  

   :required~by: |required_by_clust|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clust

   and update with::

      conda update clust

   or use the docker container::

      docker pull quay.io/repository/biocontainers/clust


.. |required_by_clust| conda:required_by:: clust
.. |downloads_clust| image:: https://img.shields.io/conda/dn/bioconda/clust.svg?style=flat
   :alt:   (downloads)
.. |docker_clust| image:: https://quay.io/repository/biocontainers/clust/status
   :target: https://quay.io/repository/biocontainers/clust







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clust/README.html

