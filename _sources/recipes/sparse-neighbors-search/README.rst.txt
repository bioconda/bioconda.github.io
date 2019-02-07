.. title:: Package Recipe 'sparse-neighbors-search'
.. highlight: bash


sparse-neighbors-search
=======================

.. conda:recipe:: sparse-neighbors-search
   :replaces_section_title:

   Approximate k\-nearest neighbors search on sparse datasets

   :homepage: https://github.com/joachimwolff/minHashNearestNeighbors
   :license: MIT
   :recipe: /`sparse-neighbors-search <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparse-neighbors-search>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparse-neighbors-search/meta.yaml>`_

   


.. conda:package:: sparse-neighbors-search

   |downloads_sparse-neighbors-search| |docker_sparse-neighbors-search|

   :versions: 0.3, 0.2.3

   :depends: :conda:package:`cython`  :conda:package:`libgcc`  :conda:package:`numpy`  :conda:package:`python` 2.7* :conda:package:`scikit-learn`  :conda:package:`scipy`  

   :required~by: |required_by_sparse-neighbors-search|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sparse-neighbors-search

   and update with::

      conda update sparse-neighbors-search

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sparse-neighbors-search


.. |required_by_sparse-neighbors-search| conda:required_by:: sparse-neighbors-search
.. |downloads_sparse-neighbors-search| image:: https://img.shields.io/conda/dn/bioconda/sparse-neighbors-search.svg?style=flat
   :alt:   (downloads)
.. |docker_sparse-neighbors-search| image:: https://quay.io/repository/biocontainers/sparse-neighbors-search/status
   :target: https://quay.io/repository/biocontainers/sparse-neighbors-search







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sparse-neighbors-search/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sparse-neighbors-search/README.html

