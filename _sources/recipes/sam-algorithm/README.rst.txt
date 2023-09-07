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
      
      

      ``1.0.2-0``,  ``0.9.0-0``,  ``0.8.9-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.3-0``

      

   
   :depends anndata: ``>=0.7.4``
   :depends dill: 
   :depends h5py: 
   :depends harmonypy: 
   :depends hnswlib: 
   :depends numba: ``>=0.50.1``
   :depends numpy: ``>=1.19.0``
   :depends packaging: ``>=0.20.0``
   :depends pandas: ``>1.0.0``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.23.1``
   :depends scipy: ``>=1.3.1``
   :depends umap-learn: ``>=0.4.6``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sam-algorithm

   and update with::

      mamba update sam-algorithm

  To create a new environment, run::

      mamba create --name myenvname sam-algorithm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.0.2","0.9.0","0.8.9","0.8.8","0.8.7"];
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