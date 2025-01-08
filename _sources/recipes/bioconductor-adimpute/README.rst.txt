:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adimpute'
.. highlight: bash

bioconductor-adimpute
=====================

.. conda:recipe:: bioconductor-adimpute
   :replaces_section_title:
   :noindex:

   Adaptive Dropout Imputer \(ADImpute\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ADImpute.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-adimpute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adimpute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adimpute/meta.yaml>`_

   Single\-cell RNA sequencing \(scRNA\-seq\) methods are typically unable to quantify the expression levels of all genes in a cell\, creating a need for the computational prediction of missing values \(‘dropout imputation’\). Most existing dropout imputation methods are limited in the sense that they exclusively use the scRNA\-seq dataset at hand and do not exploit external gene\-gene relationship information. Here we propose two novel methods\: a gene regulatory network\-based approach using gene\-gene relationships learnt from external data and a baseline approach corresponding to a sample\-wide average. ADImpute can implement these novel methods and also combine them with existing imputation methods \(currently supported\: DrImpute\, SAVER\). ADImpute can learn the best performing method per gene and combine the results from different methods into an ensemble.


.. conda:package:: bioconductor-adimpute

   |downloads_bioconductor-adimpute| |docker_bioconductor-adimpute|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :depends r-drimpute: 
   :depends r-kernlab: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-rsvd: 
   :depends r-saver: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-adimpute

   and update with::

      mamba update bioconductor-adimpute

  To create a new environment, run::

      mamba create --name myenvname bioconductor-adimpute

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adimpute:<tag>

   (see `bioconductor-adimpute/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adimpute| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adimpute.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adimpute
   :alt:   (downloads)
.. |docker_bioconductor-adimpute| image:: https://quay.io/repository/biocontainers/bioconductor-adimpute/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adimpute
.. _`bioconductor-adimpute/tags`: https://quay.io/repository/biocontainers/bioconductor-adimpute?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adimpute";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adimpute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adimpute/README.html