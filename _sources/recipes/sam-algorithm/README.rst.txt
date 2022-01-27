:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sam-algorithm'
.. highlight: bash

sam-algorithm
=============

.. conda:recipe:: sam-algorithm
   :replaces_section_title:
   :noindex:

   The Self\-Assembling\-Manifold algorithm

   :homepage: https://github.com/atarashansky/self-assembling-manifold
   :license: MIT / MIT
   :recipe: /`sam-algorithm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam-algorithm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam-algorithm/meta.yaml>`_

   


.. conda:package:: sam-algorithm

   |downloads_sam-algorithm| |docker_sam-algorithm|

   :versions:
      
      

      ``0.9.0-0``,  ``0.8.9-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.3-0``

      

   
   :depends anndata: ``>=0.7.4``
   :depends dill: 
   :depends h5py: ``<=2.10.0``
   :depends numba: ``>=0.50.1``
   :depends numpy: ``>=1.19.0``
   :depends packaging: 
   :depends pandas: ``1.0.0``
   :depends python: ``>=3.7``
   :depends scikit-learn: ``>=0.23.1``
   :depends scipy: ``>=1.3.1``
   :depends umap-learn: ``>=0.4.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sam-algorithm

   and update with::

      conda update sam-algorithm

   or use the docker container::

      docker pull quay.io/biocontainers/sam-algorithm:<tag>

   (see `sam-algorithm/tags`_ for valid values for ``<tag>``)


.. |downloads_sam-algorithm| image:: https://img.shields.io/conda/dn/bioconda/sam-algorithm.svg?style=flat
   :target: https://anaconda.org/bioconda/sam-algorithm
   :alt:   (downloads)
.. |docker_sam-algorithm| image:: https://quay.io/repository/biocontainers/sam-algorithm/status
   :target: https://quay.io/repository/biocontainers/sam-algorithm
.. _`sam-algorithm/tags`: https://quay.io/repository/biocontainers/sam-algorithm?tab=tags


.. raw:: html

    <script>
        var package = "sam-algorithm";
        var versions = ["0.9.0","0.8.9","0.8.8","0.8.7","0.8.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sam-algorithm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sam-algorithm/README.html