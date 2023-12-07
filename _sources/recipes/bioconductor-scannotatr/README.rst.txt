:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scannotatr'
.. highlight: bash

bioconductor-scannotatr
=======================

.. conda:recipe:: bioconductor-scannotatr
   :replaces_section_title:
   :noindex:

   Pretrained learning models for cell type prediction on single cell RNA\-sequencing data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scAnnotatR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scannotatr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scannotatr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scannotatr/meta.yaml>`_

   The package comprises a set of pretrained machine learning models to predict basic immune cell types. This enables all users to quickly get a first annotation of the cell types present in their dataset without requiring prior knowledge. scAnnotatR also allows users to train their own models to predict new cell types based on specific research needs.


.. conda:package:: bioconductor-scannotatr

   |downloads_bioconductor-scannotatr| |docker_bioconductor-scannotatr|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-data.tree: 
   :depends r-dplyr: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-kernlab: 
   :depends r-proc: 
   :depends r-rocr: 
   :depends r-seurat: 
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

      mamba install bioconductor-scannotatr

   and update with::

      mamba update bioconductor-scannotatr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scannotatr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scannotatr:<tag>

   (see `bioconductor-scannotatr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scannotatr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scannotatr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scannotatr
   :alt:   (downloads)
.. |docker_bioconductor-scannotatr| image:: https://quay.io/repository/biocontainers/bioconductor-scannotatr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scannotatr
.. _`bioconductor-scannotatr/tags`: https://quay.io/repository/biocontainers/bioconductor-scannotatr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scannotatr";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scannotatr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scannotatr/README.html